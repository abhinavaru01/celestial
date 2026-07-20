# Strings & Manual Memory Management in C

> [!intro] C strings as character arrays, malloc/free, and why Python never needed them.

## Strings are char arrays

A C string is an array of characters ending in a null terminator (\0). There is no built-in string type like Python's.

## Manual memory

malloc requests memory; free returns it. Forgetting to free causes leaks; using freed memory causes bugs. Python's garbage collector did this for you.

```formula Key syntax & rules
C strings end with a null terminator \0
malloc allocates; free releases
Every malloc needs a matching free
```

> [!example] **Worked example**
> **Problem.** What happens if you malloc memory but never free it?
> >
> > **Solution.** A memory leak — the memory stays reserved and unavailable, which can exhaust memory over time.

## What you should be able to do

- Handle C strings
- Allocate and free memory
- Avoid memory leaks

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
