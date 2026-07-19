# Memory & Retention Aids — Python: Variables, Types & Expressions

## Core anchors

- **"`=` is a command, `==` is a question."** Assign vs compare.
- **"A variable is a labelled box."** A name bound to a value; look inside to use it.
- **"Right side first."** In `a = a + 5`, compute the right, then rebind the name.
- **"Quotes mean text."** `"42"` is characters; `42` is a number. Different types.

## Mnemonics

- **PEMDAS** — Parentheses, Exponents, Multiply/Divide, Add/Subtract. Same as maths.
- **"Slash floats, double-slash floors."** `/` always gives a float; `//` drops the decimal.
- **"Input is always a string."** So `int(input(...))` before doing maths on it.
- **"int() chops, round() rounds."** `int(3.9)` → 3 (truncates); `round(3.9)` → 4.
- **"Read tracebacks bottom-up."** Last line = the diagnosis.
- **Four types = "I Fear Strong Bugs"** → **I**nt, **F**loat, **S**tr, **B**ool.

## Visualization

- **The box-and-label picture.** Each variable is a box with a name tag; assignment puts a value in the box, reading the name peeks inside. When you reassign, you replace the contents — other boxes are untouched (kills mistake #7).
- **The conveyor belt for expressions.** An expression feeds operands through operators (respecting precedence) and drops a single value off the end. `2 + 3 * 4` sends `3*4=12` first, then `2+12=14`.
- **The trace table.** Columns = variables, rows = lines. Physically writing values as you step through is the single best habit for predicting output and finding bugs.

## Spaced-repetition prompts
_(Resurfaced at 1 → 3 → 7 → 16 → 35 days. Predict before checking.)_

1. What does `print(7 // 2, 7 % 2)` output? (→ `3 1`)
2. What is `type("3.0")`? (→ `<class 'str'>`)
3. `x = 5; y = x; x = 9; print(y)` — what prints? (→ `5`)
4. Why does `int(input("n? ")) + 1` need the `int()`? (→ input() returns a string; can't add str + int)
5. Evaluate `2 + 3 * 4` and `(2 + 3) * 4`. (→ `14` and `20`)
6. What does `"ha" * 3` give? (→ `"hahaha"`)
7. Does `int(2.9)` give 2 or 3? (→ 2 — truncates)
8. Difference between `=` and `==`? (→ assign vs compare-equal)

## The one-line recall card
> **A variable is a labelled box (`=` assigns, right side first); values have types and `"42"` ≠ `42`; expressions follow PEMDAS; `/` floats and `//` floors and `%` is remainder; `input()` is always a string so cast it; trace on paper and read tracebacks bottom-up.**
