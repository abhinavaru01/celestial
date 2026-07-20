# Algorithms I

> [!intro] Linear and binary search, basic sorting, and correctness reasoning.

## Searching

Linear search checks each item; binary search halves a sorted list each step, so it is far faster on large sorted data — a first taste of efficiency.

## Sorting and correctness

Sorting arranges data; simple sorts (bubble, insertion) are easy to reason about. Arguing why an algorithm always works is a transferable rigour.

```formula Key syntax & rules
Linear search: check each (works unsorted)
Binary search: halve a SORTED list each step
Test edge cases: empty, one item, not found
```

> [!example] **Worked example**
> **Problem.** Why is binary search invalid on unsorted data?
> >
> > **Solution.** It decides which half to discard based on order; without sorting, "the item must be in the upper half" is not guaranteed.

## What you should be able to do

- Implement linear and binary search
- Implement a basic sort
- Reason about correctness

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
