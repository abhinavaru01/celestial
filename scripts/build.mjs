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
    if (qs.length === 0) { warn(`${rel}/quiz.json: level ${lvl} has no questions yet`); continue; }
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
  if (warnings.length) { console.log(`  ${warnings.length} warning(s):`); for (const w of warnings) console.log('    ~ ' + w); }
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
if (cycleFound) process.exit(1);
if (warnings.length) { console.log(`  ${warnings.length} warning(s):`); for (const w of warnings) console.log('    ~ ' + w); }
