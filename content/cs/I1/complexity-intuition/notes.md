# Complexity Intuition (Big-O)

> [!intro] Big-O as "how does work grow with input size" — using logarithms from maths.

## Growth, not seconds

Big-O describes how an algorithm's work grows with input size n: O(n) linear, O(n²) quadratic, O(log n) logarithmic. It predicts scalability, not exact time.

## Why it matters

An O(log n) search beats O(n) massively on big data — the difference between instant and unusable. This reuses logarithms from maths.

```formula Key syntax & rules
Big-O = how work grows with input n
O(log n) < O(n) < O(n²)
Nested loops over n → O(n²)
```

> [!example] **Worked example**
> **Problem.** An algorithm does one pass over n items, then another separate pass. Big-O?
> >
> > **Solution.** O(n) + O(n) = O(2n) = O(n) — constants are dropped; it is linear.

## What you should be able to do

- Explain Big-O notation
- Compare algorithm growth rates
- Estimate scalability

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
