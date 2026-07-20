# Knowledge Dependency Graph

The dependency graph is the **mechanism that makes compression real**. Instead of a fixed grade-by-grade march, every topic declares exactly what must be understood before it. The graph is what lets us (a) delete redundancy — a concept is taught once and every later topic *links to* it rather than re-teaching it — and (b) interleave across subjects — physics kinematics can depend on a math topic, and the system knows it.

## How the graph is defined and maintained

**The graph is not a hand-drawn master file.** It is *derived* from content, so it can never drift out of date (`decisions.md#d-005`).

- Every topic ships a `topic.json` with a `prereqs` array of topic IDs (see `docs/platform/architecture.md` for the schema).
- Cross-subject prerequisites are allowed and encouraged — this is the interleaving engine.
- `scripts/build.mjs` reads every `topic.json`, assembles the global directed graph, and **fails the build** if it finds:
  - a prerequisite pointing at a topic ID that doesn't exist (dangling reference),
  - a cycle (A needs B needs A — impossible to sequence),
  - a forward-in-time dependency that violates tier ordering (a topic depending on something from a *later* sub-level).
- The validated graph is emitted to `app/data/graph.json` for the platform's dependency-map view and used to compute unlock order.

## Topic ID convention

`<subject>.<tier>.<slug>` — e.g. `math.F1.ratio-proportion-percentage`, `physics.F1.motion`, `cs.F1.python-variables-types-expressions`. Stable and human-readable; the directory path mirrors the ID.

## Worked example — the compression in action

The three proof-of-model topics demonstrate the mechanism concretely:

```
math.F1.ratio-proportion-percentage
        │  (a rate is a ratio of unlike quantities)
        ▼
physics.F1.motion            ← speed IS a rate; the physics topic REUSES the math,
        │                       it does not re-teach "dividing distance by time"
        ▼
(later) physics.I2.kinematics-calculus depends on BOTH
        physics.F1.motion AND math.I2.derivatives
```

In a legacy curriculum, "speed = distance/time" is taught afresh in physics as if ratio had never happened. Here, `physics.F1.motion` lists `math.F1.ratio-proportion-percentage` as a prerequisite and its notes explicitly say "you already know rates — a speed is just a rate of position." The redundant re-teaching is deleted; the time is reclaimed. Multiply this across hundreds of topics and the ~6-year syllabus fits in ≤3.

## Reading the graph

- **In-degree** (how many topics point *to* a topic) ranks leverage. High in-degree topics (ratio/proportion, the mole, functions, git basics) are taught with extra care because everything depends on them.
- **Cross-subject edges** are the interleaving map — the platform highlights them so students and teachers see *why* subjects are sequenced together.
- **A topic unlocks** for a student when all its `prereqs` are mastered (see `mastery-gating.md`).

## Current graph (full build)

The full curriculum is authored: **192 topics** across 6 subjects × 6 tiers, connected by **282 prerequisite edges, 24 of them cross-subject** (validated acyclic by `scripts/build.mjs`; see `app/data/graph.json`). Prerequisites are generated two ways: an auto-chain along each subject's tier sequence (topic *n* builds on topic *n−1*), plus explicit cross-subject links declared as `xprereqs` in the curriculum datasets (`scripts/curriculum/*.mjs`).

Representative cross-subject edges (the interleaving that makes compression real):

| Prerequisite | Leads to |
|---|---|
| `math.F1.ratio-proportion-percentage` | `physics.F1.motion` (speed *is* a rate) |
| `math.F1.ratio-proportion-percentage` | `chemistry.F2.pressure-density`, `math.F2.linear-relationships-coordinate-plane` |
| `math.F2.exponents-scientific-notation` | `chemistry.F2.mole-concept` |
| `math.I1.trigonometry-i` | `physics.I1.kinematics-2d` |
| `math.I2.derivatives-intuition` | `physics.I2.kinematics-calculus` |
| `math.I2.exponentials-logarithms` | `chemistry.A1.chemical-kinetics`, `biology.I2.population-biology` |
| `math.A2.differential-equations` | `physics.A2.electromagnetic-induction` |
| `chemistry.F2.mole-concept` | `chemistry.I1.solutions-concentration`, `biology.I1.cell-processes` |

Every new `topic.json` extends this graph automatically; the build fails on any dangling reference, cycle, or tier-order violation.
