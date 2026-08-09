# Common Mistakes — Combinatorics & Probability II

> Every learner hits these. Read the *why* — that is what stops the mistake coming back.

- **Using a permutation where order is irrelevant** (or vice versa). **Fix:** ask whether swapping two chosen items gives a different outcome. Committee no, race positions yes.

- **Adding when you should multiply.** **Fix:** "and" between sequential stages means multiply; "or" between alternatives means add.

- **Forgetting that choices shrink when repetition is forbidden.** Using 10⁴ for a PIN with distinct digits. **Fix:** 10 × 9 × 8 × 7.

- **Treating without-replacement draws as independent.** **Fix:** the second probability is conditional — both numerator and denominator change.

- **Confusing P(A|B) with P(B|A).** **Fix:** they answer different questions. P(four legs | dog) ≈ 1 but P(dog | four legs) is small.

- **Ignoring the base rate** in test-accuracy problems. **Fix:** with a rare condition, most positives are false positives however accurate the test.

- **Computing ⁿCᵣ for large r the hard way.** **Fix:** use ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎ — ¹⁰C₈ is just ¹⁰C₂ = 45.

- **Forgetting 0! = 1** and getting a division error. **Fix:** it is defined as 1 precisely so the formulas work at the extremes.

