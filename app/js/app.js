// Project Compression — SPA controller. Hash-routed, framework-free.
import { renderMarkdown } from './md.js';
import { Progress, CONFIG } from './progress.js';
import { renderQuiz } from './quiz.js';

const DATA = {};
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

async function loadData() {
  const [manifest, content, graph, board, summary] = await Promise.all([
    fetch('./data/manifest.json').then((r) => r.json()),
    fetch('./data/content.json').then((r) => r.json()),
    fetch('./data/graph.json').then((r) => r.json()),
    fetch('./data/board-coverage.json').then((r) => r.json()),
    fetch('./data/summary.json').then((r) => r.json()),
  ]);
  Object.assign(DATA, { manifest, content, graph, board, summary });
}

// ---------- helpers ----------
const subjectMeta = (id) => DATA.manifest.subjects.find((s) => s.id === id);
const tierMeta = (id) => DATA.manifest.tiers.find((t) => t.id === id);
const topicsFor = (subject, tier) => DATA.manifest.topics
  .filter((t) => t.subject === subject && (!tier || t.tier === tier))
  .sort((a, b) => a.order - b.order);
const topicById = (id) => DATA.content[id];

function statusBadge(id) {
  const p = Progress.get(id);
  const s = p?.status || 'not_started';
  const label = { not_started: 'Not started', in_progress: 'In progress', mastered: 'Mastered' }[s];
  return `<span class="badge ${s}">${label}</span>`;
}

function availabilityFor(id) {
  const t = topicById(id);
  return Progress.availability(id, t ? t.prereqs : []);
}

// ---------- router ----------
function router() {
  const hash = location.hash.slice(1) || '/';
  const parts = hash.split('/').filter(Boolean);
  const main = $('#view');
  main.innerHTML = '';
  $$('.nav-link').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + '/' + (parts[0] || '')));

  if (parts.length === 0) return renderDashboard(main);
  switch (parts[0]) {
    case 'subjects': return renderSubjects(main);
    case 'subject': return renderSubject(main, parts[1]);
    case 'topic': return renderTopic(main, decodeURIComponent(parts.slice(1).join('/')));
    case 'map': return renderMap(main);
    case 'competitive': return renderCompetitive(main);
    case 'teacher': return renderTeacher(main);
    case 'search': return renderSearch(main, decodeURIComponent(parts.slice(1).join('/') || ''));
    default: return renderDashboard(main);
  }
}

// ---------- dashboard ----------
function renderDashboard(main) {
  const sum = Progress.summary(DATA.manifest.topics);
  const due = Progress.dueForReview();
  const wrap = el('div', 'stack');

  wrap.appendChild(el('div', 'hero', `
    <h1>Project Compression</h1>
    <p class="lede">Grades 6–12, rebuilt from first principles and compressed into ≤3 years — mastery-based, interleaved, and built to make you a problem-solver and a builder, not a test-passer.</p>
  `));

  const stats = el('div', 'stat-row');
  stats.appendChild(statCard('Topics built', DATA.summary.topics));
  stats.appendChild(statCard('Mastered', `${sum.mastered}/${sum.total}`));
  stats.appendChild(statCard('Overall progress', `${sum.pct}%`));
  stats.appendChild(statCard('Cross-subject links', DATA.summary.crossSubjectEdges));
  wrap.appendChild(stats);

  if (due.length) {
    const rev = el('div', 'panel review');
    rev.innerHTML = `<h3>🔁 Due for spaced review (${due.length})</h3><p>Retention keeps compression honest — a quick review now beats re-learning later.</p>`;
    const list = el('div', 'chip-row');
    due.forEach((id) => { const t = topicById(id); const c = el('a', 'chip', t.title); c.href = `#/topic/${id}`; list.appendChild(c); });
    rev.appendChild(list);
    wrap.appendChild(rev);
  }

  wrap.appendChild(el('h2', null, 'Subjects'));
  const grid = el('div', 'card-grid');
  for (const s of DATA.manifest.subjects) {
    const built = topicsFor(s.id).length;
    const mastered = topicsFor(s.id).filter((t) => Progress.isMastered(t.id)).length;
    const card = el('a', 'subject-card');
    card.href = `#/subject/${s.id}`;
    card.style.setProperty('--accent', s.color);
    card.innerHTML = `<div class="subject-dot"></div><h3>${s.title}</h3>
      <p>${built} topic${built === 1 ? '' : 's'} built · ${mastered} mastered</p>`;
    grid.appendChild(card);
  }
  wrap.appendChild(grid);

  const cta = el('div', 'panel');
  cta.innerHTML = `<h3>How this works</h3>
    <ul>
      <li><strong>Every topic ships all six layers</strong> — deep notes, quizzes, common mistakes, tricks, memory aids, and prerequisite links.</li>
      <li><strong>Mastery gates, not grades</strong> — score ${Math.round(CONFIG.MASTERY_THRESHOLD * 100)}% on a topic's Level-3 quiz to master it and unlock what depends on it.</li>
      <li><strong>Compression by reuse</strong> — see the <a href="#/map">dependency map</a> for how subjects interleave instead of repeating.</li>
    </ul>`;
  wrap.appendChild(cta);
  main.appendChild(wrap);
}

function statCard(label, value) { return el('div', 'stat-card', `<div class="stat-value">${value}</div><div class="stat-label">${label}</div>`); }

// ---------- subjects list ----------
function renderSubjects(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'All subjects'));
  const grid = el('div', 'card-grid');
  for (const s of DATA.manifest.subjects) {
    const card = el('a', 'subject-card'); card.href = `#/subject/${s.id}`; card.style.setProperty('--accent', s.color);
    card.innerHTML = `<div class="subject-dot"></div><h3>${s.title}</h3><p>${topicsFor(s.id).length} topics</p>`;
    grid.appendChild(card);
  }
  wrap.appendChild(grid);
  main.appendChild(wrap);
}

// ---------- subject (tiers + topics) ----------
function renderSubject(main, subjectId) {
  const s = subjectMeta(subjectId);
  if (!s) { main.appendChild(el('p', 'muted', 'Unknown subject.')); return; }
  const wrap = el('div', 'stack');
  wrap.appendChild(el('div', 'crumbs', `<a href="#/">Home</a> / ${s.title}`));
  wrap.appendChild(el('h1', null, s.title));

  for (const tier of DATA.manifest.tiers) {
    const list = topicsFor(subjectId, tier.id);
    if (!list.length) continue;
    const sec = el('section', 'tier-section');
    sec.appendChild(el('h2', 'tier-head', `${tier.label} <span class="tier-sub">${tier.tier}</span>`));
    const rows = el('div', 'topic-list');
    for (const t of list) {
      const avail = availabilityFor(t.id);
      const row = el('a', 'topic-row' + (avail.locked ? ' locked' : ''));
      row.href = `#/topic/${t.id}`;
      row.innerHTML = `
        <div class="topic-main">
          <span class="topic-title">${t.title}${t.core ? '' : ' <span class="tag">elective</span>'}</span>
          <span class="topic-sum">${t.summary}</span>
        </div>
        <div class="topic-meta">${statusBadge(t.id)}${avail.locked ? `<span class="lock" title="Locked — needs prerequisites">🔒</span>` : ''}</div>`;
      rows.appendChild(row);
    }
    sec.appendChild(rows);
    wrap.appendChild(sec);
  }
  main.appendChild(wrap);
}

// ---------- topic (the six layers) ----------
function renderTopic(main, id) {
  const t = topicById(id);
  if (!t) { main.appendChild(el('p', 'muted', 'Topic not found.')); return; }
  const s = subjectMeta(t.subject);
  const avail = Progress.availability(id, t.prereqs);

  const wrap = el('div', 'stack topic-page');
  wrap.style.setProperty('--accent', s.color);
  wrap.appendChild(el('div', 'crumbs', `<a href="#/">Home</a> / <a href="#/subject/${t.subject}">${s.title}</a> / ${tierMeta(t.tier).label}`));

  const head = el('div', 'topic-header');
  head.innerHTML = `<h1>${t.title}</h1><p class="lede">${t.summary}</p>
    <div class="chip-row">${statusBadge(id)}
    ${t.competitiveTags.map((c) => `<span class="chip static comp">${c}</span>`).join('')}
    <span class="chip static">${tierMeta(t.tier).label}</span></div>`;
  wrap.appendChild(head);

  if (avail.locked) {
    const warn = el('div', 'panel warn-panel');
    warn.innerHTML = `<h3>🔒 Prerequisites needed</h3><p>Master these first:</p>`;
    const row = el('div', 'chip-row');
    avail.missing.forEach((p) => { const c = el('a', 'chip', topicById(p)?.title || p); c.href = `#/topic/${p}`; row.appendChild(c); });
    warn.appendChild(row);
    wrap.appendChild(warn);
  }

  // outcomes + prereqs
  const meta = el('div', 'panel');
  meta.innerHTML = `<h3>Learning outcomes</h3><ul>${t.outcomes.map((o) => `<li>${o}</li>`).join('')}</ul>`;
  if (t.prereqs.length) {
    meta.innerHTML += `<h3>Builds on</h3><div class="chip-row">${t.prereqs.map((p) => `<a class="chip" href="#/topic/${p}">${topicById(p)?.title || p}${Progress.isMastered(p) ? ' ✓' : ''}</a>`).join('')}</div>`;
  }
  const dependents = DATA.graph.edges.filter((e) => e.from === id).map((e) => e.to);
  if (dependents.length) {
    meta.innerHTML += `<h3>Unlocks</h3><div class="chip-row">${dependents.map((d) => `<a class="chip" href="#/topic/${d}">${topicById(d)?.title || d}</a>`).join('')}</div>`;
  }
  wrap.appendChild(meta);

  // tabs for the six layers
  const tabs = el('div', 'tabs');
  const tabDefs = [
    ['notes', '📖 Notes'],
    ['quiz', '📝 Quiz'],
    ['mistakes', '⚠️ Common Mistakes'],
    ['tricks', '💡 Tricks'],
    ['memory', '🧠 Memory Aids'],
    ['board', '🗺️ Board map'],
  ];
  const tabBar = el('div', 'tab-bar');
  const panel = el('div', 'tab-panel');
  tabDefs.forEach(([key, label], i) => {
    const b = el('button', 'tab' + (i === 0 ? ' active' : ''), label);
    b.addEventListener('click', () => { $$('.tab', tabBar).forEach((x) => x.classList.remove('active')); b.classList.add('active'); showTab(key); });
    tabBar.appendChild(b);
  });
  tabs.appendChild(tabBar); tabs.appendChild(panel);
  wrap.appendChild(tabs);

  function showTab(key) {
    panel.innerHTML = '';
    if (key === 'notes') panel.innerHTML = `<article class="prose">${renderMarkdown(t.notes)}</article>`;
    else if (key === 'mistakes') panel.innerHTML = `<article class="prose">${renderMarkdown(t.mistakes)}</article>`;
    else if (key === 'tricks') panel.innerHTML = `<article class="prose">${renderMarkdown(t.tricks)}</article>`;
    else if (key === 'memory') panel.innerHTML = `<article class="prose">${renderMarkdown(t.memoryAids)}</article>`;
    else if (key === 'board') renderBoardTab(panel, t);
    else if (key === 'quiz') renderQuizTab(panel, t);
  }
  showTab('notes');
  main.appendChild(wrap);
}

function renderBoardTab(panel, t) {
  const rows = Object.entries(t.boardMap || {}).map(([board, objs]) =>
    `<tr><th>${board}</th><td>${(objs || []).map((o) => `<span class="chip static">${o}</span>`).join(' ') || '<span class="muted">—</span>'}</td></tr>`).join('');
  panel.innerHTML = `<div class="prose"><p>This topic satisfies the following board objectives — proof that compressing does not skip required coverage (it teaches each objective <em>once</em>).</p>
    <div class="table-wrap"><table><tbody>${rows}</tbody></table></div></div>`;
}

function renderQuizTab(panel, t) {
  const p = Progress.get(t.id);
  const intro = el('div', 'quiz-intro');
  intro.innerHTML = `<p>Three levels of increasing difficulty. Master this topic by scoring <strong>${Math.round(CONFIG.MASTERY_THRESHOLD * 100)}%+ on Level 3</strong>. Levels 1–2 build the fluency Level 3 needs.</p>`;
  const levelBar = el('div', 'level-bar');
  const quizHost = el('div', 'quiz-host');
  const feedbackHost = el('div');
  [1, 2, 3].forEach((lvl) => {
    const best = p?.levelScores?.[String(lvl)];
    const b = el('button', 'btn btn-level', `Level ${lvl}${best != null ? ` · best ${Math.round(best * 100)}%` : ''}`);
    b.addEventListener('click', () => {
      $$('.btn-level', levelBar).forEach((x) => x.classList.remove('active')); b.classList.add('active');
      feedbackHost.innerHTML = '';
      renderQuiz(quizHost, t.quiz, lvl, (score) => {
        Progress.recordAttempt(t.id, lvl, score);
        const mastered = Progress.isMastered(t.id);
        feedbackHost.innerHTML = '';
        const msg = el('div', 'panel ' + (lvl === 3 && mastered ? 'ok-panel' : ''));
        if (lvl === 3) {
          msg.innerHTML = mastered
            ? `<h3>🎉 Topic mastered!</h3><p>You scored ${Math.round(score * 100)}% on Level 3. Dependent topics are now unlocked. This topic will resurface for spaced review to lock in retention.</p>`
            : `<h3>Almost there</h3><p>You scored ${Math.round(score * 100)}% on Level 3 — mastery needs ${Math.round(CONFIG.MASTERY_THRESHOLD * 100)}%. Review the Common Mistakes tab and try again; each attempt is saved.</p>`;
        } else {
          msg.innerHTML = `<p>Level ${lvl}: ${Math.round(score * 100)}%. ${score >= 0.8 ? 'Solid — move up a level.' : 'Revisit the notes, then retry.'}</p>`;
        }
        feedbackHost.appendChild(msg);
        // refresh level labels + badge
        renderTopicBadgeRefresh(t.id);
      });
    });
    levelBar.appendChild(b);
  });
  panel.appendChild(intro); panel.appendChild(levelBar); panel.appendChild(quizHost); panel.appendChild(feedbackHost);
  levelBar.firstChild.click();
}

function renderTopicBadgeRefresh(id) {
  // lightweight: update any visible status badge on the topic header
  const badge = $('.topic-header .badge');
  if (badge) { const s = Progress.get(id)?.status || 'not_started'; badge.className = 'badge ' + s; badge.textContent = { not_started: 'Not started', in_progress: 'In progress', mastered: 'Mastered' }[s]; }
}

// ---------- dependency map ----------
function renderMap(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Knowledge dependency map'));
  wrap.appendChild(el('p', 'lede', 'The mechanism behind compression: each topic declares its prerequisites, so concepts are taught once and reused across subjects instead of being repeated. Cross-subject links are highlighted.'));

  const legend = el('div', 'chip-row');
  legend.innerHTML = `<span class="chip static">→ prerequisite of</span><span class="chip static comp">cross-subject link</span>`;
  wrap.appendChild(legend);

  // group nodes by tier column
  const byTier = {};
  for (const n of DATA.graph.nodes) (byTier[n.tier] ||= []).push(n);
  const cols = el('div', 'map-cols');
  for (const tier of DATA.manifest.tiers) {
    if (!byTier[tier.id]) continue;
    const col = el('div', 'map-col');
    col.appendChild(el('h4', null, tier.label));
    for (const n of byTier[tier.id].sort((a, b) => a.subject.localeCompare(b.subject))) {
      const s = subjectMeta(n.subject);
      const node = el('a', 'map-node');
      node.href = `#/topic/${n.id}`;
      node.style.setProperty('--accent', s.color);
      node.innerHTML = `<span class="map-subject">${s.title}</span><span class="map-title">${n.title}</span>
        <span class="map-degree">${n.inDegree ? `↳ needs ${n.inDegree}` : 'entry'} · unlocks ${n.outDegree}</span>`;
      col.appendChild(node);
    }
    cols.appendChild(col);
  }
  wrap.appendChild(cols);

  // edge list
  const edgePanel = el('div', 'panel');
  edgePanel.innerHTML = `<h3>Prerequisite links (${DATA.graph.edges.length})</h3>`;
  const ul = el('ul', 'edge-list');
  for (const e of DATA.graph.edges) {
    ul.innerHTML += `<li class="${e.crossSubject ? 'cross' : ''}"><a href="#/topic/${e.from}">${topicById(e.from).title}</a> → <a href="#/topic/${e.to}">${topicById(e.to).title}</a>${e.crossSubject ? ' <span class="chip static comp">cross-subject</span>' : ''}</li>`;
  }
  edgePanel.appendChild(ul);
  wrap.appendChild(edgePanel);
  main.appendChild(wrap);
}

// ---------- competitive ----------
function renderCompetitive(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Competitive Exam Prep'));
  wrap.appendChild(el('p', 'lede', 'A separate, optional track for JEE / NEET and similar exams. It runs parallel to the core syllabus and adds exam-specific practice and depth — without adding a second curriculum. Each set links back to the core topics it exercises.'));

  const tagged = DATA.manifest.topics.filter((t) => t.competitiveTags && t.competitiveTags.length);
  const panel = el('div', 'panel');
  panel.innerHTML = `<h3>Core topics with competitive integration points</h3><p>These topics carry exam-flavoured Level-3 questions and feed the problem sets below.</p>`;
  const row = el('div', 'chip-row');
  tagged.forEach((t) => { const c = el('a', 'chip', `${t.title} · ${t.competitiveTags.join(', ')}`); c.href = `#/topic/${t.id}`; row.appendChild(c); });
  panel.appendChild(row);
  wrap.appendChild(panel);

  const sample = el('div', 'panel');
  sample.innerHTML = `<h3>Sample: JEE — Rates & Motion problem set</h3>
    <p>Linked topics: <a class="chip" href="#/topic/math.F1.ratio-proportion-percentage">Ratio, Proportion & Percentage</a>
    <a class="chip" href="#/topic/physics.F1.motion">Motion</a></p>
    <p class="muted">Strategy note and full problem set live in <code>content/competitive/jee/</code>. Full build-out is Phase 4 of the roadmap.</p>`;
  wrap.appendChild(sample);
  main.appendChild(wrap);
}

// ---------- teacher ----------
function renderTeacher(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Teacher Tools'));
  wrap.appendChild(el('p', 'lede', 'Curriculum overview and class progress. In the MVP, progress reflects this device; a synced multi-student roster is the documented next step when a backend is added.'));

  // curriculum overview matrix
  const panel = el('div', 'panel');
  panel.innerHTML = `<h3>Curriculum coverage matrix</h3>`;
  let table = `<div class="table-wrap"><table><thead><tr><th>Subject</th>${DATA.manifest.tiers.map((t) => `<th>${t.id}</th>`).join('')}</tr></thead><tbody>`;
  for (const s of DATA.manifest.subjects) {
    table += `<tr><th>${s.title}</th>`;
    for (const tier of DATA.manifest.tiers) {
      const list = topicsFor(s.id, tier.id);
      const mastered = list.filter((t) => Progress.isMastered(t.id)).length;
      const cls = list.length ? (mastered === list.length && list.length ? 'cell-done' : 'cell-built') : 'cell-empty';
      table += `<td class="${cls}">${list.length ? `${mastered}/${list.length}` : '·'}</td>`;
    }
    table += '</tr>';
  }
  table += '</tbody></table></div>';
  panel.innerHTML += table;
  panel.innerHTML += `<p class="muted">Numbers show mastered / built topics per subject × sub-level. "·" = not yet authored.</p>`;
  wrap.appendChild(panel);

  // board coverage
  const bc = el('div', 'panel');
  bc.innerHTML = `<h3>Board-equivalence coverage</h3><p>Objectives mapped from built content (proof of equivalence — grows as content is authored).</p>`;
  let bt = '<div class="table-wrap"><table><thead><tr><th>Board</th><th>Objectives covered</th></tr></thead><tbody>';
  for (const [board, n] of Object.entries(DATA.board.byBoard)) bt += `<tr><th>${board}</th><td>${n}</td></tr>`;
  bt += '</tbody></table></div>';
  bc.innerHTML += bt;
  wrap.appendChild(bc);

  const link = el('div', 'panel');
  link.innerHTML = `<h3>Dependency map</h3><p>Use the <a href="#/map">dependency map</a> to see how topics interleave across subjects and to plan teaching order.</p>`;
  wrap.appendChild(link);
  main.appendChild(wrap);
}

// ---------- search ----------
function renderSearch(main, query) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Search'));
  const box = el('input', 'search-box'); box.type = 'search'; box.placeholder = 'Search topics, keywords…'; box.value = query;
  box.addEventListener('input', () => { location.hash = '#/search/' + encodeURIComponent(box.value); });
  wrap.appendChild(box);
  const results = el('div', 'topic-list');
  const q = query.trim().toLowerCase();
  if (q) {
    const hits = DATA.manifest.topics.filter((t) => {
      const c = DATA.content[t.id];
      const hay = [t.title, t.summary, ...(c.keywords || []), c.subject, c.tier].join(' ').toLowerCase();
      return hay.includes(q);
    });
    if (!hits.length) results.appendChild(el('p', 'muted', 'No matches.'));
    hits.forEach((t) => {
      const row = el('a', 'topic-row'); row.href = `#/topic/${t.id}`;
      row.innerHTML = `<div class="topic-main"><span class="topic-title">${t.title}</span><span class="topic-sum">${subjectMeta(t.subject).title} · ${t.summary}</span></div><div class="topic-meta">${statusBadge(t.id)}</div>`;
      results.appendChild(row);
    });
  }
  wrap.appendChild(results);
  main.appendChild(wrap);
  box.focus();
}

// ---------- boot ----------
async function boot() {
  try {
    await loadData();
  } catch (e) {
    $('#view').innerHTML = `<div class="panel warn-panel"><h3>Could not load content data</h3><p>Run <code>node scripts/build.mjs</code> to generate <code>app/data/*.json</code>, then serve the app over HTTP (e.g. <code>python3 -m http.server</code> from the repo root, and open <code>/app/</code>).</p><p class="muted">${e.message}</p></div>`;
    return;
  }
  // top nav search box
  const nav = $('#nav-search');
  if (nav) nav.addEventListener('keydown', (e) => { if (e.key === 'Enter') location.hash = '#/search/' + encodeURIComponent(nav.value); });
  window.addEventListener('hashchange', router);
  router();
}
boot();
