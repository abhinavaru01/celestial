# Dictionaries & Sets

> [!intro] Key-value modelling with dictionaries, and sets for uniqueness.

## Dictionaries

A dictionary maps keys to values (like a real dictionary maps words to meanings). Lookup by key is fast and expressive — ideal for labelled data.

## Sets

A set stores unique, unordered items. It answers membership and removes duplicates efficiently. Choosing list vs dict vs set is a real design skill.

```formula Key syntax & rules
dict: {key: value}, lookup by key
set: unique, unordered items
list(set(x)) removes duplicates
```

> [!example] **Worked example**
> **Problem.** What is len(set([1, 2, 2, 3, 3, 3]))?
> >
> > **Solution.** The set keeps unique values {1, 2, 3}, so len = 3.

## What you should be able to do

- Use dictionaries for key-value data
- Use sets for uniqueness
- Choose the right structure

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
