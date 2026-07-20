# Strings at Depth

> [!intro] String methods, slicing and formatting.

## Strings are sequences

A string is an ordered sequence of characters. Slicing (s[1:4]) extracts parts; methods like upper() and split() transform text.

## Immutability

Strings cannot be changed in place — methods return new strings. Understanding this avoids a common source of confusion.

```formula Key syntax & rules
s[a:b] includes a, excludes b
Strings are immutable (methods return new strings)
split() → list, join() → string
```

> [!example] **Worked example**
> **Problem.** For s = "python", what is s[1:4]?
> >
> > **Solution.** Indices 1,2,3 (4 excluded) → "yth".

## What you should be able to do

- Use common string methods
- Slice strings
- Format strings

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
