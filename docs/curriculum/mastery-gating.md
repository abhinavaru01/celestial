# Assessment & Mastery-Gating Logic

Progression is **mastery-based**: a student advances by *proving* they can do the work, not by spending time. This document defines exactly how mastery is measured and how gates work. The logic here is implemented by the platform's progress engine (`app/js/progress.js`) and the data model in `docs/platform/architecture.md`.

## Three levels of assessment

1. **Per-topic quizzes** — every topic's `quiz.json` has **three difficulty levels**:
   - **Level 1 (Recall/Apply):** can you do the basic case?
   - **Level 2 (Fluency):** can you do it reliably, including standard variations?
   - **Level 3 (Transfer/Depth):** can you handle unfamiliar framings and multi-step problems?
2. **Sub-level gate exams** — a mixed, **interleaved** exam spanning all core topics of the sub-level, including *retention* items from the previous sub-level.
3. **Capstones** (A-tier only) — a produced artifact per strand (CS project, research essay, problem portfolio).

## Topic mastery rule

A topic is **mastered** when the student scores **≥80% on its Level-3 quiz**.

- Levels 1 and 2 are **scaffolding, not gates**: they must be attempted (and are used to give feedback and unlock L3), but they do not by themselves confer mastery. This prevents "passing by doing only easy questions."
- Mastery is **sticky but decayable**: once mastered, a topic stays mastered, but the spaced-repetition system schedules review prompts; a missed review lowers a `retentionConfidence` score and can resurface the topic for a quick re-check before the next gate.

## Sub-level gate rule

To advance from a sub-level (e.g., F1→F2), a student must satisfy **both**:

1. **All core topics** in the sub-level are mastered (`core: true` topics; electives never block).
2. **Gate exam ≥ 75%**, where the gate exam:
   - draws **interleaved** questions across the sub-level's topics (not topic-by-topic),
   - includes **retention items** from the previous sub-level (proving nothing was forgotten — the honesty check on compression),
   - includes at least some **transfer items** combining two subjects (proving the interleaving actually integrated).

Rationale (`decisions.md#d-004`): per-topic quizzes measure *isolated* skill; the gate exam measures *retention + transfer*, which is precisely what a compressed curriculum risks losing. Gating on both closes that risk.

## Failing a gate (by design, low-stakes)

- A failed gate returns a **diagnostic**: which topics/objectives the missed items map to.
- The student reviews **exactly those** (the platform routes them straight to the relevant Common-Mistakes and notes sections) and **re-sits**. No time penalty, no permanent record of the failure — attempts are stored but the status is simply "not yet passed."
- This removes the high-stakes, one-shot stress of board/entrance exams and aligns with the anti-burnout stance.

## Data model (summary — full schema in architecture doc)

Per student, per topic:
```json
{
  "topicId": "physics.F1.motion",
  "status": "not_started | in_progress | mastered",
  "levelScores": { "1": 0.9, "2": 0.85, "3": 0.82 },
  "attempts": [ { "level": 3, "score": 0.82, "at": "2026-07-19T10:00:00Z" } ],
  "retentionConfidence": 0.7,
  "lastReviewedAt": "2026-07-19T10:00:00Z",
  "nextReviewDue": "2026-07-26T00:00:00Z"
}
```
Per student, per sub-level gate:
```json
{ "gateId": "gate.F1", "passed": false, "bestScore": 0.68, "attempts": [ ... ], "weakObjectives": ["ratio-scaling", "graph-reading"] }
```

## How unlock order uses this

- A topic is **available** when all its `prereqs` (from the dependency graph) are `mastered`.
- A gate is **available** when all core topics in its sub-level are `mastered`.
- The next sub-level's topics are **locked** until the gate is `passed`.

This makes the dependency graph, the mastery rule, and the tier ladder a single coherent engine: content declares prerequisites → mastery rule decides what's done → gates decide when to advance.

## Spaced-repetition schedule

Default expanding intervals after mastery: 1 day → 3 → 7 → 16 → 35 days (tuned per topic difficulty). Review prompts are drawn from each topic's `memory-aids.md` retention section. Gate exams double as large spaced-review events, so review is never *only* extra work — it is folded into assessment.
