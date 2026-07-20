# Error Handling & Debugging Discipline

> [!intro] Exceptions, reading tracebacks, and systematic debugging.

## Exceptions

When something goes wrong, Python raises an exception. try/except lets your program respond gracefully instead of crashing.

## Debugging

Debugging is systematic: read the traceback (bottom-up), reproduce the bug, isolate it with prints or asserts, then fix. Guessing wastes time.

```formula Key syntax & rules
try / except handles errors gracefully
Read tracebacks bottom-up (last line = the error)
Reproduce → isolate → fix
```

> [!example] **Worked example**
> **Problem.** A traceback ends with "ZeroDivisionError". What does that tell you?
> >
> > **Solution.** Code divided by zero. The last line names the error; the line above shows where — fix the divisor.

## What you should be able to do

- Handle exceptions with try/except
- Read tracebacks
- Debug systematically

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
