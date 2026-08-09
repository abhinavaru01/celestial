# Tricks & Problem-Solving Techniques — Combinatorics & Probability II

> Faster, cleaner ways to handle this topic — and when each one applies.

- **Decide order-matters-or-not before writing anything.** That single decision picks the formula, and most errors are made before any arithmetic.

- **Use the complement for "at least one".** 1 − P(none) is almost always easier than summing cases.

- **Use the symmetry ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎** to keep the arithmetic small.

- **Draw a tree for any two-stage probability problem.** Multiply along branches, add across paths — and each branch set must sum to 1, which is a free check.

- **Handle constraints by choosing from each group separately, then multiplying** — "exactly 2 women from 4, and 1 man from 5" is ⁴C₂ × ⁵C₁.

- **Sanity-check every probability against 0 ≤ P ≤ 1**, and check counts against a small case you can enumerate by hand.

- **Test a formula on a tiny example.** With 3 people and 2 seats you can list all 6 permutations and confirm ³P₂ = 6.

