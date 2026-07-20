// The Ultimate Learner — SPA controller. Hash-routed, framework-free.
// Everything is open: no locking, no mastery gates, no completion state.
// Prerequisite links are shown purely as informational "builds on / leads to".
import { renderMarkdown } from './md.js';
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
const depthTag = (t) => (t.depth === 'flagship'
  ? '<span class="tag flagship">deep dive</span>'
  : '');

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
  window.scrollTo(0, 0);
}

// ---------- dashboard ----------
function renderDashboard(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('div', 'hero', `
    <h1>The Ultimate Learner</h1>
    <p class="lede">Grades 6–12, rebuilt from first principles and compressed into ≤3 years — mastery by design, interleaved across subjects, and built to make you a problem-solver and a builder. Every topic is open: explore anything, anytime.</p>
  `));

  const stats = el('div', 'stat-row');
  stats.appendChild(statCard('Topics', DATA.summary.topics));
  stats.appendChild(statCard('Subjects', DATA.manifest.subjects.length));
  stats.appendChild(statCard('Tiers', DATA.manifest.tiers.length));
  stats.appendChild(statCard('Cross-subject links', DATA.summary.crossSubjectEdges));
  wrap.appendChild(stats);

  wrap.appendChild(el('h2', null, 'Subjects'));
  const grid = el('div', 'card-grid');
  for (const s of DATA.manifest.subjects) {
    const built = topicsFor(s.id).length;
    const card = el('a', 'subject-card');
    card.href = `#/subject/${s.id}`;
    card.style.setProperty('--accent', s.color);
    card.innerHTML = `<div class="subject-dot"></div><h3>${s.title}</h3>
      <p>${built} topic${built === 1 ? '' : 's'} · Foundation → Advanced</p>`;
    grid.appendChild(card);
  }
  wrap.appendChild(grid);

  const cta = el('div', 'panel');
  cta.innerHTML = `<h3>How this works</h3>
    <ul>
      <li><strong>Every topic ships all six layers</strong> — deep notes, quizzes, common mistakes, tricks, memory aids, and prerequisite links.</li>
      <li><strong>Everything unlocked</strong> — no gates, no locked topics. Learn in the recommended order or jump straight to what you need.</li>
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
  wrap.style.setProperty('--accent', s.color);
  wrap.appendChild(el('div', 'crumbs', `<a href="#/">Home</a> / ${s.title}`));
  wrap.appendChild(el('h1', null, s.title));

  for (const tier of DATA.manifest.tiers) {
    const list = topicsFor(subjectId, tier.id);
    if (!list.length) continue;
    const sec = el('section', 'tier-section');
    sec.appendChild(el('h2', 'tier-head', `${tier.label} <span class="tier-sub">${tier.tier}</span>`));
    const rows = el('div', 'topic-list');
    for (const t of list) {
      const row = el('a', 'topic-row');
      row.href = `#/topic/${t.id}`;
      row.innerHTML = `
        <div class="topic-main">
          <span class="topic-title">${t.title}${t.core ? '' : ' <span class="tag">elective</span>'}${depthTag(t)}</span>
          <span class="topic-sum">${t.summary}</span>
        </div>
        <div class="topic-meta"><span class="go">Open →</span></div>`;
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

  const wrap = el('div', 'stack topic-page');
  wrap.style.setProperty('--accent', s.color);
  wrap.appendChild(el('div', 'crumbs', `<a href="#/">Home</a> / <a href="#/subject/${t.subject}">${s.title}</a> / ${tierMeta(t.tier).label}`));

  const head = el('div', 'topic-header');
  head.innerHTML = `<h1>${t.title}</h1><p class="lede">${t.summary}</p>
    <div class="chip-row">
    ${(t.competitiveTags || []).map((c) => `<span class="chip static comp">${c}</span>`).join('')}
    <span class="chip static">${tierMeta(t.tier).label}</span>
    ${t.depth === 'flagship' ? '<span class="chip static flag">deep dive</span>' : ''}</div>`;
  wrap.appendChild(head);

  // outcomes + prereqs (informational only — nothing is locked)
  const meta = el('div', 'panel');
  if ((t.outcomes || []).length) meta.innerHTML = `<h3>Learning outcomes</h3><ul>${t.outcomes.map((o) => `<li>${o}</li>`).join('')}</ul>`;
  if ((t.prereqs || []).length) {
    meta.innerHTML += `<h3>Builds on</h3><div class="chip-row">${t.prereqs.map((p) => `<a class="chip" href="#/topic/${p}">${topicById(p)?.title || p}</a>`).join('')}</div>`;
  }
  const dependents = DATA.graph.edges.filter((e) => e.from === id).map((e) => e.to);
  if (dependents.length) {
    meta.innerHTML += `<h3>Leads to</h3><div class="chip-row">${dependents.map((d) => `<a class="chip" href="#/topic/${d}">${topicById(d)?.title || d}</a>`).join('')}</div>`;
  }
  if (meta.innerHTML) wrap.appendChild(meta);

  // tabs for the six layers
  const tabBar = el('div', 'tab-bar');
  const panel = el('div', 'tab-panel');
  const tabDefs = [
    ['notes', '📖 Notes'],
    ['quiz', '📝 Quiz'],
    ['mistakes', '⚠️ Common Mistakes'],
    ['tricks', '💡 Tricks'],
    ['memory', '🧠 Memory Aids'],
    ['board', '🗺️ Board map'],
  ];
  tabDefs.forEach(([key, label], i) => {
    const b = el('button', 'tab' + (i === 0 ? ' active' : ''), label);
    b.addEventListener('click', () => { $$('.tab', tabBar).forEach((x) => x.classList.remove('active')); b.classList.add('active'); showTab(key); });
    tabBar.appendChild(b);
  });
  const tabs = el('div', 'tabs');
  tabs.appendChild(tabBar); tabs.appendChild(panel);
  wrap.appendChild(tabs);

  function showTab(key) {
    panel.innerHTML = '';
    if (key === 'notes') panel.innerHTML = `<article class="prose">${renderMarkdown(t.notes || '')}</article>`;
    else if (key === 'mistakes') panel.innerHTML = `<article class="prose">${renderMarkdown(t.mistakes || '')}</article>`;
    else if (key === 'tricks') panel.innerHTML = `<article class="prose">${renderMarkdown(t.tricks || '')}</article>`;
    else if (key === 'memory') panel.innerHTML = `<article class="prose">${renderMarkdown(t.memoryAids || '')}</article>`;
    else if (key === 'board') renderBoardTab(panel, t);
    else if (key === 'quiz') renderQuizTab(panel, t);
  }
  showTab('notes');
  main.appendChild(wrap);
}

function renderBoardTab(panel, t) {
  const rows = Object.entries(t.boardMap || {}).map(([board, objs]) =>
    `<tr><th>${board}</th><td>${(objs || []).map((o) => `<span class="chip static">${o}</span>`).join(' ') || '<span class="muted">—</span>'}</td></tr>`).join('');
  panel.innerHTML = `<div class="prose"><p>This topic maps to the following board objectives — proof that compressing does not skip required coverage (it teaches each objective <em>once</em>).</p>
    <div class="table-wrap"><table><tbody>${rows || '<tr><td class="muted">Mapping in progress.</td></tr>'}</tbody></table></div></div>`;
}

function renderQuizTab(panel, t) {
  const levels = t.quiz?.levels || {};
  const hasAny = ['1', '2', '3'].some((l) => (levels[l] || []).length);
  if (!hasAny) { panel.innerHTML = `<p class="muted">Practice questions for this topic are being written.</p>`; return; }
  const intro = el('div', 'quiz-intro');
  intro.innerHTML = `<p>Self-check practice — three levels of increasing difficulty, with instant feedback. Purely for your own learning; nothing is graded or gated.</p>`;
  const levelBar = el('div', 'level-bar');
  const quizHost = el('div', 'quiz-host');
  const feedbackHost = el('div');
  const available = ['1', '2', '3'].filter((l) => (levels[l] || []).length);
  available.forEach((lvl) => {
    const b = el('button', 'btn btn-level', `Level ${lvl}`);
    b.addEventListener('click', () => {
      $$('.btn-level', levelBar).forEach((x) => x.classList.remove('active')); b.classList.add('active');
      feedbackHost.innerHTML = '';
      renderQuiz(quizHost, t.quiz, lvl, (score, correct, total) => {
        feedbackHost.innerHTML = '';
        const msg = el('div', 'panel');
        msg.innerHTML = `<p>Level ${lvl}: <strong>${correct}/${total}</strong> (${Math.round(score * 100)}%). ${score >= 0.8 ? 'Great — try the next level or another topic.' : 'Revisit the notes and Common Mistakes, then try again.'}</p>`;
        feedbackHost.appendChild(msg);
      });
    });
    levelBar.appendChild(b);
  });
  panel.appendChild(intro); panel.appendChild(levelBar); panel.appendChild(quizHost); panel.appendChild(feedbackHost);
  levelBar.firstChild.click();
}

// ---------- dependency map ----------
function renderMap(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Knowledge dependency map'));
  wrap.appendChild(el('p', 'lede', 'The mechanism behind compression: each topic declares its prerequisites, so concepts are taught once and reused across subjects instead of being repeated. These links are a suggested path — everything is open regardless.'));

  const legend = el('div', 'chip-row');
  legend.innerHTML = `<span class="chip static">→ leads to</span><span class="chip static comp">cross-subject link</span>`;
  wrap.appendChild(legend);

  const byTier = {};
  for (const n of DATA.graph.nodes) (byTier[n.tier] ||= []).push(n);
  const cols = el('div', 'map-cols');
  for (const tier of DATA.manifest.tiers) {
    if (!byTier[tier.id]) continue;
    const col = el('div', 'map-col');
    col.appendChild(el('h4', null, tier.label));
    for (const n of byTier[tier.id].sort((a, b) => a.subject.localeCompare(b.subject) || (topicById(a.id)?.order ?? 0) - (topicById(b.id)?.order ?? 0))) {
      const s = subjectMeta(n.subject);
      const node = el('a', 'map-node');
      node.href = `#/topic/${n.id}`;
      node.style.setProperty('--accent', s.color);
      node.innerHTML = `<span class="map-subject">${s.title}</span><span class="map-title">${n.title}</span>
        <span class="map-degree">${n.inDegree ? `↳ builds on ${n.inDegree}` : 'entry'} · leads to ${n.outDegree}</span>`;
      col.appendChild(node);
    }
    cols.appendChild(col);
  }
  wrap.appendChild(cols);

  const cross = DATA.graph.edges.filter((e) => e.crossSubject);
  const edgePanel = el('div', 'panel');
  edgePanel.innerHTML = `<h3>Cross-subject links (${cross.length})</h3><p class="muted">Where one subject reuses another instead of re-teaching it — the interleaving that makes compression real.</p>`;
  const ul = el('ul', 'edge-list');
  for (const e of cross) {
    ul.innerHTML += `<li class="cross"><a href="#/topic/${e.from}">${topicById(e.from)?.title || e.from}</a> → <a href="#/topic/${e.to}">${topicById(e.to)?.title || e.to}</a> <span class="chip static comp">cross-subject</span></li>`;
  }
  if (cross.length) edgePanel.appendChild(ul);
  wrap.appendChild(edgePanel);
  main.appendChild(wrap);
}

// ---------- competitive ----------
function renderCompetitive(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Competitive Exam Prep'));
  wrap.appendChild(el('p', 'lede', 'An optional track for JEE / NEET and similar exams. It runs parallel to the core syllabus and adds exam-specific practice and depth — without adding a second curriculum. Each set links back to the core topics it exercises.'));

  const tagged = DATA.manifest.topics.filter((t) => t.competitiveTags && t.competitiveTags.length);
  const panel = el('div', 'panel');
  panel.innerHTML = `<h3>Topics with competitive integration points (${tagged.length})</h3><p>These topics carry exam-flavoured questions and feed the problem sets.</p>`;
  const row = el('div', 'chip-row');
  tagged.slice(0, 60).forEach((t) => { const c = el('a', 'chip', `${t.title} · ${t.competitiveTags.join(', ')}`); c.href = `#/topic/${t.id}`; row.appendChild(c); });
  panel.appendChild(row);
  wrap.appendChild(panel);

  const sample = el('div', 'panel');
  sample.innerHTML = `<h3>Sample: JEE — Rates & Motion problem set</h3>
    <p>Linked topics: <a class="chip" href="#/topic/math.F1.ratio-proportion-percentage">Ratio, Proportion & Percentage</a>
    <a class="chip" href="#/topic/physics.F1.motion">Motion</a></p>
    <p class="muted">Strategy note and full problem set live in <code>content/competitive/jee/</code>. Full build-out is ongoing.</p>`;
  wrap.appendChild(sample);
  main.appendChild(wrap);
}

// ---------- teacher ----------
function renderTeacher(main) {
  const wrap = el('div', 'stack');
  wrap.appendChild(el('h1', null, 'Teacher Tools'));
  wrap.appendChild(el('p', 'lede', 'Curriculum overview across every subject and tier. Use it to plan teaching order and see coverage at a glance.'));

  const panel = el('div', 'panel');
  panel.innerHTML = `<h3>Curriculum coverage matrix</h3><p class="muted">Number of topics authored per subject × sub-level.</p>`;
  let table = `<div class="table-wrap"><table><thead><tr><th>Subject</th>${DATA.manifest.tiers.map((t) => `<th>${t.id}</th>`).join('')}<th>Total</th></tr></thead><tbody>`;
  for (const s of DATA.manifest.subjects) {
    table += `<tr><th>${s.title}</th>`;
    let subtotal = 0;
    for (const tier of DATA.manifest.tiers) {
      const n = topicsFor(s.id, tier.id).length;
      subtotal += n;
      table += `<td class="${n ? 'cell-built' : 'cell-empty'}">${n || '·'}</td>`;
    }
    table += `<td class="cell-done">${subtotal}</td></tr>`;
  }
  table += '</tbody></table></div>';
  panel.innerHTML += table;
  wrap.appendChild(panel);

  const bc = el('div', 'panel');
  bc.innerHTML = `<h3>Board-equivalence coverage</h3><p>Objectives mapped from authored content (proof of equivalence — grows as content deepens).</p>`;
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
    results.appendChild(el('p', 'muted', `${hits.length} result${hits.length === 1 ? '' : 's'}`));
    hits.slice(0, 100).forEach((t) => {
      const row = el('a', 'topic-row'); row.href = `#/topic/${t.id}`;
      row.innerHTML = `<div class="topic-main"><span class="topic-title">${t.title}</span><span class="topic-sum">${subjectMeta(t.subject).title} · ${tierMeta(t.tier).label} · ${t.summary}</span></div><div class="topic-meta"><span class="go">Open →</span></div>`;
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
    $('#view').innerHTML = `<div class="panel warn-panel"><h3>Could not load content data</h3><p>Run <code>node scripts/build.mjs</code> to generate <code>app/data/*.json</code>, then serve the app over HTTP.</p><p class="muted">${e.message}</p></div>`;
    return;
  }
  const nav = $('#nav-search');
  if (nav) nav.addEventListener('keydown', (e) => { if (e.key === 'Enter') location.hash = '#/search/' + encodeURIComponent(nav.value); });
  window.addEventListener('hashchange', router);
  router();
}
boot();
