#!/usr/bin/env node
// Deepens generated topics to flagship depth.
//
// Reads the deep-content datasets (scripts/curriculum/deep/*.mjs, keyed by topic id)
// and REWRITES the five authored layer files for each covered topic:
//   notes.md, mistakes.md, tricks.md, memory-aids.md, quiz.json
// topic.json is patched in place (depth -> "deep", estMinutes) so that all
// hand-curated metadata — prereqs, boardMap, competitiveTags — is preserved.
//
// Unlike scripts/generate-content.mjs (which SKIPS existing directories to protect
// hand-written content), this script intentionally overwrites, because the deep
// dataset IS the authored source of truth for the topics it covers. Topics with
// depth "flagship" are never touched.
//
// Idempotent: running twice produces byte-identical output.
// Run: node scripts/deepen.mjs [--only=subject|topic.id] [--dry]
//      then node scripts/build.mjs

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import deepContent from './curriculum/deep/index.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'content');

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const onlyArg = args.find((a) => a.startsWith('--only='));
const ONLY = onlyArg ? onlyArg.slice('--only='.length) : null;

let written = 0, skipped = 0, missing = 0;
const problems = [];

for (const [id, deep] of Object.entries(deepContent)) {
  if (ONLY && id !== ONLY && !id.startsWith(ONLY + '.')) continue;

  const [subject, tier, ...rest] = id.split('.');
  const slug = rest.join('.');
  const dir = join(CONTENT, subject, tier, slug);

  if (!existsSync(join(dir, 'topic.json'))) {
    problems.push(`${id}: no topic directory at content/${subject}/${tier}/${slug}`);
    missing++;
    continue;
  }

  const meta = JSON.parse(readFileSync(join(dir, 'topic.json'), 'utf8'));
  if (meta.depth === 'flagship') { skipped++; continue; } // never overwrite the hand-written flagships

  const files = {
    'notes.md': notesMd(meta, deep),
    'mistakes.md': listMd('Common Mistakes', meta.title, deep.mistakes,
      'Every learner hits these. Read the *why* — that is what stops the mistake coming back.'),
    'tricks.md': listMd('Tricks & Problem-Solving Techniques', meta.title, deep.tricks,
      'Faster, cleaner ways to handle this topic — and when each one applies.'),
    'memory-aids.md': listMd('Memory & Retention Aids', meta.title, deep.memory,
      'How to remember this — and still have it months later.'),
    'quiz.json': JSON.stringify(quizJson(id, deep.quiz || []), null, 2) + '\n',
  };

  const nextMeta = { ...meta, depth: 'deep' };
  if (deep.estMinutes) nextMeta.estMinutes = deep.estMinutes;
  if (deep.keywords?.length) nextMeta.keywords = deep.keywords;
  files['topic.json'] = JSON.stringify(nextMeta, null, 2) + '\n';

  if (!DRY) for (const [name, body] of Object.entries(files)) writeFileSync(join(dir, name), body);
  written++;
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error('  - ' + p);
}
console.log(`${DRY ? '[dry run] ' : ''}Deepened ${written} topic(s); ${skipped} flagship(s) left untouched; ${missing} missing.`);
if (missing) process.exit(1);

// ---------- builders ----------

function notesMd(meta, deep) {
  const out = [`# ${meta.title}`, ''];

  if (deep.hook) out.push(`> [!intro] ${deep.hook}`, '');

  (deep.sections || []).forEach((s, idx) => {
    out.push(`## ${idx + 1}. ${s.h}`, '');
    if (s.body) out.push(s.body.trim(), '');
    if (s.svg) out.push('```svg', s.svg.trim(), '```', '');
    if (s.formulas?.length) {
      out.push('```formula ' + (s.formulaLabel || defaultKeyLabel(meta.subject)), ...s.formulas, '```', '');
    }
    for (const ex of asArray(s.example)) out.push(...exampleCallout(ex), '');
    if (s.note) out.push(...calloutLines('note', s.note), '');
  });

  if (deep.formulas?.length) {
    out.push('```formula ' + (deep.formulaLabel || defaultKeyLabel(meta.subject)), ...deep.formulas, '```', '');
  }

  const globalExamples = asArray(deep.examples);
  if (globalExamples.length) {
    out.push('## Worked examples', '');
    for (const ex of globalExamples) out.push(...exampleCallout(ex), '');
  }

  if ((meta.outcomes || []).length) {
    out.push('## What you should be able to do', '');
    for (const o of meta.outcomes) out.push(`- ${o}`);
    out.push('');
  }

  if (deep.summary?.length) {
    out.push('## Summary — the mental toolkit', '');
    deep.summary.forEach((s, i) => out.push(`${i + 1}. ${s}`));
    out.push('');
  }

  out.push('---', '', '_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._');
  return out.join('\n') + '\n';
}

// Renders a worked example as a single-level callout. Building the lines here
// (rather than prefixing an already-quoted string) is what keeps the blockquote
// from nesting into "> >".
function exampleCallout(ex) {
  if (typeof ex === 'string') return calloutLines('example', ex);
  const body = [`**${ex.title || 'Worked example'}**`, '', `**Problem.** ${ex.q}`, '', `**Solution.** ${ex.solution}`];
  if (ex.moral) body.push('', `*${ex.moral}*`);
  return calloutLines('example', body.join('\n'));
}

function calloutLines(kind, text) {
  const lines = String(text).split('\n').map((l) => (l.trim() === '' ? '>' : `> ${l}`));
  lines[0] = `> [!${kind}] ${lines[0].replace(/^>\s?/, '')}`;
  return lines;
}

function asArray(x) { return x == null ? [] : Array.isArray(x) ? x : [x]; }

function defaultKeyLabel(subject) {
  if (subject === 'math' || subject === 'physics' || subject === 'chemistry') return 'Key formulas';
  if (subject === 'cs') return 'Key syntax & rules';
  return 'Key facts';
}

function listMd(section, title, items, intro) {
  const parts = [`# ${section} — ${title}`, '', `> ${intro}`, ''];
  for (const it of (items || [])) parts.push(`- ${it}`, '');
  return parts.join('\n') + '\n';
}

function quizJson(id, quiz) {
  const base = id.replace(/\W+/g, '_');
  const levels = { 1: [], 2: [], 3: [] };
  for (const q of quiz) {
    const lvl = String(q.lvl || 1);
    const bucket = levels[lvl] || levels['1'];
    const item = {
      id: `${base}_l${lvl}_q${bucket.length + 1}`,
      type: q.type || 'mcq',
      prompt: q.prompt,
    };
    if ((q.type || 'mcq') === 'mcq') { item.choices = q.choices; item.answer = q.answer; }
    else {
      item.answer = q.answer;
      if (q.tolerance != null) item.tolerance = q.tolerance;
      if (q.unit) item.unit = q.unit;
    }
    item.explanation = q.explanation || '';
    bucket.push(item);
  }
  return { topicId: id, levels };
}
