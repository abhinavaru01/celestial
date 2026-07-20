# Algorithms II

> [!intro] Divide and conquer, efficient sorting (merge/quick), and hashing.

## Divide and conquer

Split a problem, solve the parts, combine — the strategy behind merge sort and binary search. It often turns O(n²) into O(n log n).

## Hashing

A hash maps keys to array positions for near-instant lookup — how dictionaries and sets are fast. Understanding it explains their performance.

```formula Key syntax & rules
Divide and conquer: split, solve, combine
Merge/quick sort: O(n log n)
Hashing → ~O(1) average lookup
```

> [!example] **Worked example**
> **Problem.** Why is merge sort O(n log n)?
> >
> > **Solution.** It splits the list in half (log n levels of splitting) and does O(n) work merging at each level → n·log n.

## What you should be able to do

- Apply divide and conquer
- Explain merge and quick sort
- Use hashing for fast lookup

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
