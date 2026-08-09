// Deep-content datasets, merged into one map keyed by topic id.
//
// Each subject file default-exports `{ '<topic.id>': <deepEntry>, ... }`.
//
// A deep entry is the authored source for a topic's five content layers:
//
//   hook          string  — the "why this matters" opener (renders as an intro callout)
//   sections      [{ h, body, svg?, formulas?, formulaLabel?, example?, note? }]
//                         — numbered teaching sections; `body` is Markdown and may use
//                           $inline$ / $$display$$ math, tables and lists
//   formulas      [string]— a closing key-formula/fact block (formulaLabel overrides the title)
//   examples      [{ q, solution, title?, moral? }] — worked examples after the sections
//   summary       [string]— the closing "mental toolkit" list
//   mistakes      [string]— Common Mistakes layer (state the trap, the why, and the fix)
//   tricks        [string]— Tricks & Techniques layer
//   memory        [string]— Memory & Retention layer
//   quiz          [{ lvl, type, prompt, choices?, answer, explanation, tolerance?, unit? }]
//                         — needs >= 3 questions at each of levels 1, 2 and 3
//   estMinutes    number  — optional study-time override
//
// Consumed by scripts/deepen.mjs; the depth bar is enforced by scripts/build.mjs.

import math from './math.mjs';
import physics from './physics.mjs';
import chemistry from './chemistry.mjs';
import biology from './biology.mjs';
import english from './english.mjs';
import cs from './cs.mjs';

const merged = {};
for (const ds of [math, physics, chemistry, biology, english, cs]) {
  for (const [id, entry] of Object.entries(ds)) {
    if (merged[id]) throw new Error(`Duplicate deep-content entry for topic "${id}"`);
    merged[id] = entry;
  }
}

export default merged;
