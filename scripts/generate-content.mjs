#!/usr/bin/env node
// Expands the structured curriculum datasets (scripts/curriculum/*.mjs) into full
// topic directories under content/, each with all six signature-layer files.
// - Skips any topic whose directory already exists (protects the hand-authored
//   flagship deep-dive topics from being overwritten).
// - Auto-chains prerequisites: each topic builds on the previous topic in its
//   subject sequence, plus any explicit cross-subject prereqs (`xprereqs`).
// Run: node scripts/generate-content.mjs   then   node scripts/build.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'content');

import mathData from './curriculum/math.mjs';
import physicsData from './curriculum/physics.mjs';
import chemistryData from './curriculum/chemistry.mjs';
import biologyData from './curriculum/biology.mjs';
import englishData from './curriculum/english.mjs';
import csData from './curriculum/cs.mjs';

const datasets = [mathData, physicsData, chemistryData, biologyData, englishData, csData];
const tierOrder = { F1: 1, F2: 2, I1: 3, I2: 4, A1: 5, A2: 6 };

let created = 0, skipped = 0;

for (const ds of datasets) {
  const subject = ds.subject;
  // order topics by tier then in-tier order
  const topics = [...ds.topics].sort((a, b) => (tierOrder[a.tier] - tierOrder[b.tier]) || (a.order - b.order));
  const idOf = (x) => x.idOverride || `${subject}.${x.tier}.${x.slug}`;
  topics.forEach((t, i) => {
    const id = idOf(t);
    const dir = join(CONTENT, subject, t.tier, t.slug);
    const prev = i > 0 ? idOf(topics[i - 1]) : null;
    const prereqs = [...new Set([...(prev ? [prev] : []), ...(t.xprereqs || [])])];

    if (existsSync(dir)) { skipped++; return; } // flagship or already generated

    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'topic.json'), JSON.stringify(topicJson(subject, t, id, prereqs), null, 2) + '\n');
    writeFileSync(join(dir, 'notes.md'), notesMd(t));
    writeFileSync(join(dir, 'mistakes.md'), listMd('Common Mistakes', t.title, t.mistakes, 'Every learner hits these — spot them before they cost you.'));
    writeFileSync(join(dir, 'tricks.md'), listMd('Tricks & Problem-Solving Techniques', t.title, t.tricks, 'Faster, cleaner ways to handle this topic.'));
    writeFileSync(join(dir, 'memory-aids.md'), listMd('Memory & Retention Aids', t.title, t.memory, 'How to remember this — and keep it.'));
    writeFileSync(join(dir, 'quiz.json'), JSON.stringify(quizJson(id, t.quiz || []), null, 2) + '\n');
    created++;
  });
}

console.log(`Generation complete: ${created} topics created, ${skipped} existing skipped.`);

// ---------- builders ----------
function topicJson(subject, t, id, prereqs) {
  return {
    id, subject, tier: t.tier, title: t.title, slug: t.slug,
    core: t.core !== false, order: t.order, depth: 'module',
    estMinutes: t.estMinutes ?? 180,
    summary: t.summary,
    outcomes: t.outcomes || [],
    prereqs,
    boardMap: t.board || {},
    competitiveTags: t.comp || [],
    keywords: t.keywords || [],
  };
}

function notesMd(t) {
  const parts = [`# ${t.title}`, '', `> ${t.summary}`, ''];
  for (const [h, body] of (t.concepts || [])) {
    parts.push(`## ${h}`, '', body.trim(), '');
  }
  if ((t.outcomes || []).length) {
    parts.push('## What you should be able to do', '');
    for (const o of t.outcomes) parts.push(`- ${o}`);
    parts.push('');
  }
  parts.push('---', '', '_A structured module in The Ultimate Learner — the essentials with all six learning layers. Deeper worked-example expansions are layered on over time; the three F1 "deep dive" topics show the target depth._');
  return parts.join('\n') + '\n';
}

function listMd(section, title, items, intro) {
  const parts = [`# ${section} — ${title}`, '', `> ${intro}`, ''];
  for (const it of (items || [])) parts.push(`- ${it}`, '');
  return parts.join('\n') + '\n';
}

function quizJson(id, quiz) {
  const levels = { 1: [], 2: [], 3: [] };
  quiz.forEach((q, i) => {
    const lvl = String(q.lvl || 1);
    const item = { id: `${id.replace(/\W+/g, '_')}_q${i + 1}`, type: q.type || 'mcq', prompt: q.prompt };
    if ((q.type || 'mcq') === 'mcq') { item.choices = q.choices; item.answer = q.answer; }
    else { item.answer = q.answer; if (q.tolerance != null) item.tolerance = q.tolerance; if (q.unit) item.unit = q.unit; }
    item.explanation = q.explanation || '';
    (levels[lvl] || levels['1']).push(item);
  });
  return { topicId: id, levels };
}
