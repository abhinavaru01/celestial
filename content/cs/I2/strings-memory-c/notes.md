# Strings & Manual Memory Management in C

> C strings as character arrays, malloc/free, and why Python never needed them.

## Strings are char arrays

A C string is an array of characters ending in a null terminator (\0). There is no built-in string type like Python's.

## Manual memory

malloc requests memory; free returns it. Forgetting to free causes leaks; using freed memory causes bugs. Python's garbage collector did this for you.

## What you should be able to do

- Handle C strings
- Allocate and free memory
- Avoid memory leaks

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. Deeper worked-example expansions are layered on over time; the three F1 "deep dive" topics show the target depth._
