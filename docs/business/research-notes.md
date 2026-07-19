# Research Notes — Learning Science Behind the Design

The design choices are grounded in well-established cognitive-science findings on how people learn efficiently and retain knowledge. This note records the reasoning links; specific claims should be re-verified against primary literature before external/marketing use (flagged where load-bearing).

## 1. Spacing effect → our spaced-repetition + gate-exam-as-review design
Distributed practice (reviewing material at expanding intervals) produces dramatically better long-term retention than massed practice ("cramming") for the same total study time. This is one of the most replicated findings in learning science (Ebbinghaus; Cepeda et al. meta-analyses).
→ **Design consequence:** post-mastery review at 1→3→7→16→35-day intervals; gate exams double as large spaced-review events. Compression does **not** sacrifice retention because the schedule is built on spacing, not cramming.

## 2. Interleaving → our cross-subject sequencing and mixed gate exams
Interleaving different problem types/topics (rather than blocking one type at a time) improves discrimination and transfer, even though it feels harder in the moment (Rohrer & Taylor). Blocked practice inflates immediate performance but harms durable learning.
→ **Design consequence:** the dependency graph deliberately interleaves subjects; gate exams are mixed and include transfer items combining two subjects. This is also precisely what makes JEE/NEET multi-concept problems tractable.

## 3. Cognitive load theory → "concise but concept-deep," worked examples, prerequisite gating
Working memory is limited; learning fails when extraneous load is high or when prerequisites aren't automatic (Sweller). Worked examples and managing intrinsic load by sequencing prerequisites first are effective mitigations.
→ **Design consequence:** notes are concise and lead with intuition + worked examples; the dependency graph guarantees prerequisites are mastered (hence low-load) before a topic is attempted; mastery gating ensures foundational skills are automatic before they're built upon.

## 4. Testing effect (retrieval practice) → quizzes as learning, not just assessment
Retrieving information strengthens memory more than re-reading (Roediger & Karpicke). Low-stakes frequent testing improves retention and reveals gaps.
→ **Design consequence:** every topic ships three graded quiz levels with instant feedback; gates are re-sittable and low-stakes; the platform treats quizzes as practice, not just gatekeeping.

## 5. Mastery learning → our mastery-based progression
Bloom's mastery learning: when students must reach a competence bar before advancing (with corrective feedback loops), outcomes improve substantially and variance shrinks.
→ **Design consequence:** topic mastery (≥80% L3) + gate exams gate advancement; failing a gate routes to targeted review, not penalty.

## 6. Desirable difficulties & the fluency illusion
Conditions that feel harder (spacing, interleaving, retrieval) produce better learning; ease of processing is a poor cue for actual learning (Bjork). Learners systematically mistake fluency for mastery.
→ **Design consequence:** Level-2 "fluency" is required but explicitly **not** sufficient for mastery — mastery needs Level-3 transfer. The Common-Mistakes layer directly targets the fluency illusion's traps.

## 7. What specifically makes JEE/NEET hard (re-verify specifics before external use)
- **JEE (esp. Advanced):** multi-step problems combining several concepts; non-standard framings; heavy time pressure; physics/math depth beyond board level.
- **NEET:** enormous factual breadth in biology plus applied reasoning; speed across 180 questions; penalty for guessing.
→ **Design consequence:** interleaving + transfer-focused assessment attack the multi-concept difficulty; model-first biology and mechanism-based chemistry reduce NEET's rote burden to reasoning; the competitive track adds timed practice and trap familiarity on top of core mastery — no separate curriculum.

## 8. Anti-burnout basis
Chronic overload and high-stakes, one-shot assessment are associated with stress and disengagement. Reducing daily hours (compression is structural, not effort-based), low-stakes re-sittable gates, spaced (not crammed) review, and weekly subject rotation are the concrete guardrails.

---
**Verification discipline (PRD §6):** the qualitative mechanisms above are robust and widely taught. Any *quantitative* claim used externally ("halves the time", specific effect sizes, exam statistics) must be re-checked against current primary sources before publication, and cited. This file is the reasoning record, not a citation list.
