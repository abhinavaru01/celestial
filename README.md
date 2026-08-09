# The Ultimate Learner
### (internal initiative name: Project Compression)

A restructured global curriculum + learning platform: the equivalent of grades 6–12 delivered in **≤3 years**, without diluting depth — through **redundancy removal and cross-subject interleaving**, and a platform where every topic ships all six signature learning layers. **Everything is open** — no locked topics or gates; prerequisites are shown as informational "builds on / leads to" links.

**Live:** https://abhinavaru01.github.io/celestial/ · Deploys automatically on push to `main` (GitHub Pages, `.github/workflows/deploy-pages.yml`).

> New here? Read **`memory.md`** first — it is the single source of truth for project state and lets anyone resume with zero re-learning. Major decisions and their rationale live in **`decisions.md`**. The full brief is **`PRD.md`**.

## Quick start

```bash
# 1. Validate content + generate the app's data bundle (no dependencies, Node 18+)
node scripts/build.mjs            # add --check to validate without writing

# 2. Serve the app over HTTP and open it
python3 -m http.server 8000       # from the repo root
# then open http://localhost:8000/app/
```

The build **fails loudly** if any topic is missing one of its six required files — that is how the "all six signature layers, always" guarantee is enforced mechanically rather than by hope.

It also enforces a **depth bar** (`decisions.md#d-012`): a topic clears it with ≥3500 characters of notes, ≥4 teaching sections, a worked example, a key-formula/facts block, **≥3 quiz questions at each of the three levels**, and ≥4 items in each of mistakes/tricks/memory-aids. Topics marked `deep` or `flagship` fail the build if they slip below it; the rest are reported as a per-subject dashboard so the remaining backlog is always visible.

```bash
# Deepen topics from the authored deep-content datasets, then rebuild
node scripts/deepen.mjs            # add --only=math (or a topic id) to scope it
node scripts/build.mjs             # prints the depth dashboard
```

## What's built (see `docs/business/roadmap.md` for full status)
- **Full curriculum:** all **192 topics** across 6 subjects × 6 tiers (37 Math, 30 Physics, 30 Chemistry, 30 Biology, 28 English, 37 CS), each with all six signature layers. 3 hand-written flagship deep-dives set the depth bar; the rest are structured modules generated from `scripts/curriculum/*.mjs`. 282-edge dependency graph (24 cross-subject).
- **Platform:** notes, 3-level self-check quizzes with instant feedback, per-topic Mistakes/Tricks/Memory/Board views, dependency-map view, search, teacher coverage matrix. Framework-free, open access.
- **Scaffolded:** competitive section with a sample JEE set + strategy guide; business positioning, roadmap, and research notes.

## Repository map
```
memory.md, decisions.md, PRD.md   project state, decisions, brief (read memory.md first)
content/<subject>/<tier>/<slug>/   a topic = six files (topic.json, notes.md, quiz.json,
                                   mistakes.md, tricks.md, memory-aids.md)
content/tiers.json                 canonical tier ladder (F1…A2) + subjects
content/competitive/               optional competitive-prep content
scripts/build.mjs                  content validator + data bundler (zero deps)
app/                               the platform SPA (framework-free); app/data/* is generated
docs/curriculum/                   syllabi, tier system, dependency graph, gating, timeline, board map
docs/platform/architecture.md      tech stack, content contract, data model
docs/business/                     positioning, roadmap, research notes
```

## Adding a topic (the repeatable pattern)
1. Create `content/<subject>/<tier>/<slug>/` with all six files (copy an existing topic as a template).
2. Declare `prereqs` in `topic.json` (cross-subject links encouraged — this is the compression engine).
3. Run `node scripts/build.mjs`. It enforces the six-layer contract, checks the dependency graph (dangling refs, cycles, tier-order), and refreshes board coverage. The platform renders the new topic with no code changes.

## The three proof-of-model topics
- `math.F1.ratio-proportion-percentage` — the highest-leverage Foundation topic.
- `physics.F1.motion` — depends on the math topic and **reuses** it (speed *is* a rate), demonstrating compression concretely.
- `cs.F1.python-variables-types-expressions` — zero-prerequisite CS entry point.
