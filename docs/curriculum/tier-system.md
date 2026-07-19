# The Tier System

Project Compression replaces grade levels with **three difficulty tiers, each split into two sub-levels**. A sub-level is the unit of mastery gating and takes a typical full-time student **~20 weeks** (see `timeline-model.md`). Six gates → ~3 years, with slack built in.

```
Foundation      F1 → F2      ≈ grades 6–8 equivalent, compressed
Intermediate    I1 → I2      ≈ grades 9–10 + early 11 equivalent
Advanced        A1 → A2      ≈ grades 11–12 + competitive-exam depth
```

Progression is **mastery-based, not time-based**: 20 weeks is a planning estimate, never an entitlement or a cap. A student advances the moment they clear the gate; a student who needs 26 weeks takes 26 weeks.

## Why tiers instead of grades

Grade levels bundle *age* with *ability* and force every subject to move in lockstep. Tiers decouple them:

- A student can be in **I2 Math and F2 English simultaneously** — each subject strand has its own gate. This is where much of the compression comes from: no one waits in a subject they've already mastered because another subject is behind.
- Tiers are defined by **what you can do** (outcomes + mastery bar), not by how many semesters you've attended.

## Tier definitions

### Foundation (F1, F2)
- **Entry prerequisites:** basic literacy and arithmetic (read fluently, whole-number operations). A short diagnostic places students; gaps are patched with targeted "F0 patch" micro-modules rather than a full remedial year.
- **Learning outcomes:** the complete conceptual substrate — proportional reasoning, algebraic manipulation, the scientific-model mindset, structured writing, and working programs in Python. Everything later tiers build on and *nothing that later tiers will re-teach*.
- **Mastery bar to exit F2:** every core F-topic mastered (≥80% on its Level-3 quiz set) **plus** the F-gate exam (mixed, interleaved) at ≥75%.

### Intermediate (I1, I2)
- **Entry prerequisites:** F2 gate passed in that subject strand.
- **Learning outcomes:** full board-equivalent grade 9–10 command plus the early grade-11 material that classical curricula artificially delay (e.g., basic calculus intuition, stoichiometry, data structures). Students finish I2 able to attempt entry-level JEE-Main/NEET questions in covered areas.
- **Mastery bar to exit I2:** per-topic mastery + I-gate exam ≥75%, including transfer questions that combine topics across subjects.

### Advanced (A1, A2)
- **Entry prerequisites:** I2 gate passed in that strand.
- **Learning outcomes:** grade 11–12 equivalent at full rigor; A2 closes at competitive-exam depth (JEE-Advanced/NEET-level problem solving in the optional competitive track; board-equivalent otherwise). CS strand ends with an independently built, version-controlled software project.
- **Mastery bar to exit A2 (graduation):** per-topic mastery + A-gate exam ≥75% + one capstone per strand (CS: shipped project; English: researched argumentative essay; Math/Science: multi-step problem portfolio).

## Progression logic

1. Topics within a sub-level are ordered by the **dependency graph** (`dependency-graph.md`), not by tradition. A topic unlocks when its prerequisites are mastered.
2. **Topic mastery:** ≥80% on the topic's Level-3 quiz (Levels 1–2 are scaffolding — required to attempt L3, not gates themselves).
3. **Sub-level gate:** all core topics mastered + mixed gate exam ≥75%. The gate exam interleaves topics and includes items testing *retention* of the previous sub-level — this is the anti-forgetting mechanism that makes compression honest.
4. **Failing a gate** is routine, not punitive: the result identifies the weak topics, the student reviews exactly those, and re-sits. No seat-time penalty.
5. Elective/enrichment topics (marked `core: false` in `topic.json`) never block gates.

## Sub-level naming in data

Tier IDs used throughout content and code: `F1`, `F2`, `I1`, `I2`, `A1`, `A2`. Defined canonically in `content/tiers.json`.

*Rationale for this design: see `decisions.md#d-003` and `#d-004`.*
