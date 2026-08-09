#!/usr/bin/env node
// Project Compression — content validator + bundler.
// Zero dependencies. Reads content/, enforces the six-file topic contract,
// assembles the dependency graph and board-coverage report, emits app/data/*.json.
// Run: node scripts/build.mjs   (add --check to validate without writing)

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'content');
const OUT = join(ROOT, 'app', 'data');
const CHECK_ONLY = process.argv.includes('--check');
// --strict promotes every depth-bar shortfall to a build error (not just for topics
// that declare depth "deep"). Turn this on permanently once the backlog is empty.
const STRICT = process.argv.includes('--strict');

const REQUIRED_FILES = ['topic.json', 'notes.md', 'quiz.json', 'mistakes.md', 'tricks.md', 'memory-aids.md'];
const LAYER_OF = {
  'notes.md': 'Concept-deep notes',
  'quiz.json': 'Quizzes & graded question sets',
  'mistakes.md': 'Common Mistakes',
  'tricks.md': 'Tricks & problem-solving techniques',
  'memory-aids.md': 'Memory & retention aids',
  'topic.json': 'Prerequisite links / metadata',
};

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// ---- load tiers ----
const tiersPath = join(CONTENT, 'tiers.json');
if (!existsSync(tiersPath)) { err('content/tiers.json is missing'); fail(); }
const tiersData = JSON.parse(readFileSync(tiersPath, 'utf8'));
const validTiers = new Set(tiersData.tiers.map((t) => t.id));
const validSubjects = new Set(tiersData.subjects.map((s) => s.id));
const tierOrder = Object.fromEntries(tiersData.tiers.map((t) => [t.id, t.order]));

// ---- discover topic directories ----
// A topic dir is any directory that contains topic.json.
function findTopicDirs(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (existsSync(join(p, 'topic.json'))) out.push(p);
    else out.push(...findTopicDirs(p));
  }
  return out;
}

const topicDirs = existsSync(CONTENT) ? findTopicDirs(CONTENT) : [];
const topics = [];
const byId = new Map();

for (const dir of topicDirs) {
  const rel = dir.replace(ROOT + '/', '');
  // enforce the six-file contract
  for (const f of REQUIRED_FILES) {
    if (!existsSync(join(dir, f))) {
      err(`${rel}: missing ${f}  (signature layer: "${LAYER_OF[f]}")`);
    }
  }
  let meta;
  try { meta = JSON.parse(readFileSync(join(dir, 'topic.json'), 'utf8')); }
  catch (e) { err(`${rel}/topic.json: invalid JSON — ${e.message}`); continue; }

  // required metadata fields
  for (const field of ['id', 'subject', 'tier', 'title', 'slug', 'outcomes', 'prereqs']) {
    if (meta[field] === undefined) err(`${rel}/topic.json: missing field "${field}"`);
  }
  if (meta.subject && !validSubjects.has(meta.subject)) err(`${rel}: unknown subject "${meta.subject}"`);
  if (meta.tier && !validTiers.has(meta.tier)) err(`${rel}: unknown tier "${meta.tier}"`);
  if (meta.id && byId.has(meta.id)) err(`Duplicate topic id "${meta.id}"`);

  // validate quiz.json shape + answer sanity
  let quiz = null;
  try {
    quiz = JSON.parse(readFileSync(join(dir, 'quiz.json'), 'utf8'));
    validateQuiz(quiz, rel);
  } catch (e) { err(`${rel}/quiz.json: invalid JSON — ${e.message}`); }

  // load prose layers
  const readMd = (f) => (existsSync(join(dir, f)) ? readFileSync(join(dir, f), 'utf8') : '');

  const record = {
    ...meta,
    dir: rel,
    notes: readMd('notes.md'),
    mistakes: readMd('mistakes.md'),
    tricks: readMd('tricks.md'),
    memoryAids: readMd('memory-aids.md'),
    quiz,
  };
  topics.push(record);
  if (meta.id) byId.set(meta.id, record);
}

function validateQuiz(quiz, rel) {
  if (!quiz.levels) { err(`${rel}/quiz.json: missing "levels"`); return; }
  for (const lvl of ['1', '2', '3']) {
    const qs = quiz.levels[lvl] ?? [];
    if (!Array.isArray(qs)) { err(`${rel}/quiz.json: level ${lvl} must be an array`); continue; }
    // Empty/thin levels are reported by the depth audit, which is stricter than this.
    if (qs.length === 0) continue;
    for (const q of qs) {
      if (!q.id) err(`${rel}/quiz.json L${lvl}: a question is missing "id"`);
      if (!q.prompt) err(`${rel}/quiz.json L${lvl} (${q.id}): missing "prompt"`);
      if (!q.explanation) warn(`${rel}/quiz.json L${lvl} (${q.id}): missing "explanation" (instant feedback)`);
      if (q.type === 'mcq') {
        if (!Array.isArray(q.choices) || q.choices.length < 2) err(`${rel}/quiz.json L${lvl} (${q.id}): mcq needs >=2 choices`);
        if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= (q.choices?.length ?? 0))
          err(`${rel}/quiz.json L${lvl} (${q.id}): mcq answer index out of range`);
      } else if (q.type === 'numeric') {
        if (typeof q.answer !== 'number') err(`${rel}/quiz.json L${lvl} (${q.id}): numeric answer must be a number`);
      } else {
        err(`${rel}/quiz.json L${lvl} (${q.id}): unknown type "${q.type}" (use mcq or numeric)`);
      }
    }
  }
}

// ---- depth audit ----
// The six-layer contract guarantees each layer EXISTS. The depth bar guarantees each
// layer is worth reading. Topics marked "deep" or "flagship" must clear it or the build
// fails, so a deepened topic can never silently regress to a stub. Topics still marked
// "module" only warn — that is the migration backlog, reported as a dashboard below.
const DEPTH_BAR = {
  notesChars: 3500,   // a real teaching treatment, not a summary
  sections: 4,        // "## " headings within notes.md
  examples: 1,        // worked-example callouts
  formulaBlocks: 1,   // ```formula key formulas / key facts
  quizPerLevel: 3,    // at each of levels 1, 2, 3
  listItems: 4,       // in each of mistakes / tricks / memory-aids
};

const countMatches = (s, re) => (s.match(re) || []).length;
// Depth shows up in more than one shape: the generated topics use "- " bullets while the
// hand-written flagships use "### 1." headings for the same purpose. Count both, so the
// bar measures substance rather than a house style.
const countListItems = (s) => countMatches(s, /^(?:-\s+\S|#{3}\s+\S|\d+\.\s+\S)/gm);
// A worked example takes several legitimate forms: an "[!example]" callout, a bolded
// Problem/Worked-example lead, an example-titled heading, explicit numbered working, or —
// in CS, where it is the natural form — an annotated runnable code block.
const countExamples = (s) => countMatches(s, /^>\s*\[!example\]/gm)
  + countMatches(s, /\*\*(?:Problem|Worked example|Example)\b/g)
  + countMatches(s, /^#{2,4}\s+.*\b(example|worked)\b/gim)
  + countMatches(s, /^\d+\.\s+\S/gm)
  + countMatches(s, /^```(?!svg|formula|html|\s*$)\w+/gm);
// A key-formula/facts summary is a ```formula block, display math, or a reference table.
const countFormulaBlocks = (s) => countMatches(s, /^```formula\b/gm)
  + countMatches(s, /^\s*\$\$/gm)
  + countMatches(s, /^\s*\|?[\s:|-]+\|[\s:|-]*$/gm);

function auditDepth(t) {
  const gaps = [];
  const notes = t.notes || '';
  // Ignore the title (#) and count only teaching sections (##+).
  const sections = countMatches(notes, /^#{2,3}\s+\S/gm);
  const examples = countExamples(notes);
  const formulaBlocks = countFormulaBlocks(notes);

  if (notes.length < DEPTH_BAR.notesChars) gaps.push(`notes.md is ${notes.length} chars (bar: ${DEPTH_BAR.notesChars})`);
  if (sections < DEPTH_BAR.sections) gaps.push(`${sections} section(s) (bar: ${DEPTH_BAR.sections})`);
  if (examples < DEPTH_BAR.examples) gaps.push(`${examples} worked example(s) (bar: ${DEPTH_BAR.examples})`);
  if (formulaBlocks < DEPTH_BAR.formulaBlocks) gaps.push(`no key-formula/facts block`);

  for (const lvl of ['1', '2', '3']) {
    const n = (t.quiz?.levels?.[lvl] ?? []).length;
    if (n < DEPTH_BAR.quizPerLevel) gaps.push(`quiz L${lvl} has ${n} question(s) (bar: ${DEPTH_BAR.quizPerLevel})`);
  }
  for (const [layer, src] of [['mistakes', t.mistakes], ['tricks', t.tricks], ['memory-aids', t.memoryAids]]) {
    const n = countListItems(src || '');
    if (n < DEPTH_BAR.listItems) gaps.push(`${layer} has ${n} item(s) (bar: ${DEPTH_BAR.listItems})`);
  }
  return gaps;
}

const deepTopics = [];
const shallowTopics = [];
for (const t of topics) {
  const gaps = auditDepth(t);
  const claimsDepth = t.depth === 'deep' || t.depth === 'flagship';
  if (gaps.length === 0) deepTopics.push(t);
  else {
    shallowTopics.push(t);
    const msg = `${t.dir}: below the depth bar — ${gaps.join('; ')}`;
    if (claimsDepth) err(`${msg}  [declared depth="${t.depth}"]`);
    else if (STRICT) err(msg);
    else warn(msg);
  }
}

function depthDashboard() {
  const bySubject = {};
  for (const t of topics) {
    const s = (bySubject[t.subject] ||= { deep: 0, total: 0 });
    s.total++;
    if (!shallowTopics.includes(t)) s.deep++;
  }
  const rows = Object.entries(bySubject)
    .map(([s, v]) => `    ${s.padEnd(10)} ${String(v.deep).padStart(3)}/${String(v.total).padEnd(3)} ${bar(v.deep / v.total)}`)
    .join('\n');
  return `  depth: ${deepTopics.length}/${topics.length} topics at the depth bar\n${rows}`;
}
function bar(frac) { const n = Math.round(frac * 20); return '█'.repeat(n) + '·'.repeat(20 - n); }

// ---- dependency graph: validate prereqs, detect dangling refs, cycles, tier-order violations ----
const edges = [];
for (const t of topics) {
  for (const p of t.prereqs || []) {
    if (!byId.has(p)) { err(`${t.dir}: prereq "${p}" does not exist (dangling reference)`); continue; }
    edges.push([p, t.id]); // p must come before t
    const pTier = byId.get(p).tier, tTier = t.tier;
    if (tierOrder[pTier] > tierOrder[tTier])
      err(`${t.id}: depends on "${p}" from a LATER tier (${pTier} after ${tTier}) — impossible ordering`);
  }
}

// cycle detection (DFS)
const adj = new Map(topics.map((t) => [t.id, []]));
for (const [a, b] of edges) adj.get(a).push(b);
const WHITE = 0, GRAY = 1, BLACK = 2;
const color = new Map(topics.map((t) => [t.id, WHITE]));
const stack = [];
let cycleFound = false;
function dfs(u) {
  color.set(u, GRAY); stack.push(u);
  for (const v of adj.get(u)) {
    if (color.get(v) === GRAY) {
      const i = stack.indexOf(v);
      err(`Dependency cycle: ${stack.slice(i).concat(v).join(' -> ')}`);
      cycleFound = true;
    } else if (color.get(v) === WHITE) dfs(v);
  }
  color.set(u, BLACK); stack.pop();
}
for (const t of topics) if (color.get(t.id) === WHITE) dfs(t.id);

// in-degree (leverage metric)
const inDeg = Object.fromEntries(topics.map((t) => [t.id, 0]));
for (const [, b] of edges) inDeg[b] = (inDeg[b] || 0) + 1;
const outDeg = Object.fromEntries(topics.map((t) => [t.id, 0]));
for (const [a] of edges) outDeg[a] = (outDeg[a] || 0) + 1;

// ---- board coverage report ----
const boards = ['CBSE', 'ICSE', 'IB'];
const boardCoverage = {};
for (const b of boards) boardCoverage[b] = [];
for (const t of topics) {
  for (const b of boards) {
    for (const obj of (t.boardMap?.[b] || [])) boardCoverage[b].push({ objective: obj, topicId: t.id });
  }
}

// ---- emit ----
function fail() {
  console.error(`\n✗ BUILD FAILED — ${errors.length} error(s):\n`);
  for (const e of errors) console.error('  - ' + e);
  if (warnings.length) { console.error(`\n  ${warnings.length} warning(s):`); for (const w of warnings) console.error('    ~ ' + w); }
  process.exit(1);
}

if (errors.length) fail();

const manifest = {
  generatedAt: new Date().toISOString(),
  subjects: tiersData.subjects,
  tiers: tiersData.tiers,
  topics: topics.map((t) => ({
    id: t.id, subject: t.subject, tier: t.tier, title: t.title, slug: t.slug,
    core: t.core !== false, order: t.order ?? 0, estMinutes: t.estMinutes ?? null,
    summary: t.summary ?? '', prereqs: t.prereqs || [], competitiveTags: t.competitiveTags || [],
    depth: t.depth || 'module',
    inDegree: inDeg[t.id], outDegree: outDeg[t.id],
  })),
};

const content = {};
for (const t of topics) {
  content[t.id] = {
    id: t.id, subject: t.subject, tier: t.tier, title: t.title, slug: t.slug,
    core: t.core !== false, depth: t.depth || 'module', summary: t.summary ?? '', outcomes: t.outcomes || [],
    estMinutes: t.estMinutes ?? null, prereqs: t.prereqs || [],
    boardMap: t.boardMap || {}, competitiveTags: t.competitiveTags || [], keywords: t.keywords || [],
    notes: t.notes, mistakes: t.mistakes, tricks: t.tricks, memoryAids: t.memoryAids, quiz: t.quiz,
  };
}

const graph = {
  nodes: topics.map((t) => ({ id: t.id, subject: t.subject, tier: t.tier, title: t.title, inDegree: inDeg[t.id], outDegree: outDeg[t.id] })),
  edges: edges.map(([from, to]) => ({ from, to, crossSubject: byId.get(from).subject !== byId.get(to).subject })),
};

const boardReport = { coverage: boardCoverage, topicCount: topics.length, byBoard: Object.fromEntries(boards.map((b) => [b, boardCoverage[b].length])) };

const summary = {
  topics: topics.length,
  bySubject: countBy(topics, (t) => t.subject),
  byTier: countBy(topics, (t) => t.tier),
  edges: edges.length,
  crossSubjectEdges: graph.edges.filter((e) => e.crossSubject).length,
  highestLeverage: [...topics].sort((a, b) => inDeg[b.id] - inDeg[a.id]).slice(0, 5).map((t) => ({ id: t.id, inDegree: inDeg[t.id] })),
};

function countBy(arr, f) { const m = {}; for (const x of arr) { const k = f(x); m[k] = (m[k] || 0) + 1; } return m; }

if (CHECK_ONLY) {
  console.log(`✓ Validation passed: ${topics.length} topic(s), all six signature layers present, graph acyclic.`);
  console.log(depthDashboard());
  if (warnings.length) console.log(`  ${warnings.length} topic(s) still below the depth bar (run with --strict to fail on them)`);
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
writeFileSync(join(OUT, 'content.json'), JSON.stringify(content, null, 2));
writeFileSync(join(OUT, 'graph.json'), JSON.stringify(graph, null, 2));
writeFileSync(join(OUT, 'board-coverage.json'), JSON.stringify(boardReport, null, 2));
writeFileSync(join(OUT, 'summary.json'), JSON.stringify(summary, null, 2));

console.log(`✓ BUILD OK`);
console.log(`  topics: ${topics.length}  |  edges: ${edges.length} (${summary.crossSubjectEdges} cross-subject)`);
console.log(`  by subject: ${JSON.stringify(summary.bySubject)}`);
console.log(`  wrote app/data/{manifest,content,graph,board-coverage,summary}.json`);
console.log(depthDashboard());
if (cycleFound) process.exit(1);
if (warnings.length) console.log(`  ${warnings.length} topic(s) still below the depth bar (run with --strict to fail on them)`);
