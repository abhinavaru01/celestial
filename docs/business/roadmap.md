# Phased Build Roadmap

The final chosen phase order (recorded per PRD §7). Rationale for delivering a full vertical slice first is in `decisions.md#d-007`.

## Status legend
✅ done & verified · 🟡 partial / scaffolded · ⬜ not started

## Phase 0 — Foundations & scaffolding ✅
- ✅ `memory.md`, `decisions.md`, `PRD.md`, repo structure
- ✅ Content model / data schema (six-file topic contract) — `docs/platform/architecture.md`
- ✅ Tier system — `docs/curriculum/tier-system.md`; `content/tiers.json`
- ✅ Dependency-graph format (derived from content) — `docs/curriculum/dependency-graph.md`
- ✅ Validating build script — `scripts/build.mjs`

## Phase 1 — Curriculum blueprint ✅
- ✅ Full tier-by-tier syllabi for all 6 subjects — `docs/curriculum/syllabus/*.md`
- ✅ Knowledge dependency map (mechanism + live graph) 
- ✅ Board-equivalence mapping — `docs/curriculum/board-equivalence.md`
- ✅ Timeline model (≤3 years, honest load) — `docs/curriculum/timeline-model.md`
- ✅ Mastery-gating logic — `docs/curriculum/mastery-gating.md`
- ✅ Competitive integration points — `docs/curriculum/competitive-integration.md`

## Phase 2 — Proof-of-model content ✅
- ✅ Math: Ratio, Proportion & Percentage — all six layers
- ✅ Physics: Motion — all six layers (demonstrates cross-subject reuse of the math topic)
- ✅ CS: Python Variables, Types & Expressions — all six layers
- ✅ Validated against the content model by `build.mjs` (build passes; all layers enforced)

## Phase 3 — Platform MVP ✅
- ✅ Notes delivery (subject → tier → topic) 
- ✅ Quiz engine (3 levels, mcq + numeric, instant feedback)
- ✅ Progress tracking + mastery (localStorage; unlock logic on the dependency graph)
- ✅ Common-Mistakes / Tricks / Memory-aid tab views per topic
- ✅ Dependency-map view, search, teacher coverage matrix
- ✅ Verified end-to-end in a real browser (render + quiz→mastery→unlock flow, zero JS errors)

## Phase 4 — Competitive-prep section 🟡
- ✅ Section structure + sample JEE problem set + strategy guide, topic-linked (`content/competitive/jee/`)
- ⬜ Full PYQ banks, per-exam guides (JEE-Adv, NEET), timed mocks + analytics
- ⬜ Make competitive sets first-class data (own schema) rendered in-app like quizzes

## Phase 5 — Teacher tools + polish 🟡
- ✅ Curriculum overview matrix, board-coverage view, dependency-map link (in-app)
- ⬜ Real rosters: assign topics, track *multiple* students (needs backend — the documented trigger)
- ⬜ Print/export views; accessibility audit pass

## Phase 6 — Business layer & launch readiness 🟡
- ✅ Positioning & differentiation — `docs/business/positioning.md`
- ✅ This roadmap
- ✅ Research notes — `docs/business/research-notes.md`
- ⬜ Pricing model, go-to-market plan, outcome-measurement design, pilot with real students

## Phase 3.5 — Depth pass (current) 🟡
The six-layer contract guaranteed each layer *existed*; it did not guarantee depth. See `decisions.md#d-012`.
- ✅ Deep-content pipeline — `scripts/curriculum/deep/<subject>/<tier>.mjs` + `scripts/deepen.mjs`
- ✅ Depth bar enforced by `scripts/build.mjs` (notes length, sections, worked examples, formula block, **≥3 quiz questions at every level**, ≥4 items per layer), with a per-subject dashboard on every build
- 🟡 Re-author all 192 topics to the bar — **Math F1/F2/I1/I2 done; 164 remaining**
- ⬜ Switch `build.mjs --strict` on permanently once the backlog is empty

## The scaling loop (how "everything" gets built)
Each new topic is the *same repeatable unit of work*: create the six-file directory, declare prerequisites, run `build.mjs` (which enforces all six layers, checks the graph, updates coverage). The platform renders it with zero new code. Curriculum breadth therefore scales as content authoring, not engineering — which is the whole point of the content-as-data model.

**Immediate next content targets** (highest dependency-leverage, per the graph): complete F1 across all subjects, then F2, prioritising high in-degree keystones (the mole, functions, linear relationships, git basics).
