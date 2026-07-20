# Python: Variables, Types & Expressions

> **Your first real step as a builder.** This assumes you have *never coded*. By the end you'll be able to store data, combine it, and predict exactly what a program prints — the foundation every later program stands on. We go slow on the mental model because a *correct model now* prevents a hundred bugs later.

## 1. What a program is doing

A program is a list of **instructions** the computer runs top to bottom. The most fundamental instruction is: *remember this value under this name, so I can use it later.* That's a **variable**.

## 2. Variables: a name bound to a value

```python
score = 10
```

Read this right-to-left: "take the value `10`, and bind the name `score` to it." The `=` is **assignment**, not equality (it does *not* mean "score equals 10 forever" the way maths does — it means "make score refer to 10 *now*").

**The box model (intuition):** picture `score` as a labelled box holding `10`. When you later write `score`, Python looks in the box and uses what's there.

```svg
<svg viewBox="0 0 300 96" role="img" aria-label="A variable as a labelled box holding a value" xmlns="http://www.w3.org/2000/svg">
  <text x="70" y="30" font-size="13" fill="#8fa0ff" text-anchor="middle">score</text>
  <line x1="70" y1="36" x2="70" y2="52" stroke="#6b7a99"/>
  <rect x="30" y="52" width="80" height="34" rx="6" fill="#12182a" stroke="#39466a"/>
  <text x="70" y="74" font-size="15" fill="#e6ecff" text-anchor="middle">10</text>
  <text x="150" y="74" font-size="12" fill="#9aa8c4">← the name labels a box; the box holds the value</text>
</svg>
```

```python
score = 10
score = score + 5     # take what's in the box (10), add 5, put 15 back
print(score)          # 15
```

That middle line confuses every beginner because it looks like the false maths statement "score = score + 5." It isn't maths — it's an instruction: *compute the right side using the current value, then rebind the name.* Right side first, always.

**Naming rules & good style:**
- Letters, digits, underscores; can't start with a digit; case-sensitive (`Score` ≠ `score`).
- Use meaningful `snake_case` names: `total_price`, not `x` or `tp`. Code is read far more than written; names are messages to the next reader (often future you).

## 3. The core data types

Every value has a **type** that determines what you can do with it. The four you need now:

| Type | Name | Examples | Represents |
|---|---|---|---|
| `int` | integer | `0`, `42`, `-7` | whole numbers |
| `float` | floating-point | `3.14`, `-0.5`, `2.0` | numbers with a decimal part |
| `str` | string | `"hello"`, `'A'`, `"42"` | text (a sequence of characters) |
| `bool` | boolean | `True`, `False` | truth values |

Check a type with `type(x)`:
```python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("42"))      # <class 'str'>   <- text, NOT the number 42
print(type(True))      # <class 'bool'>
```

**Crucial:** `"42"` (a string) and `42` (an int) are *different values of different types*. `"42"` is three-then... no — two characters of text; `42` is a number you can do arithmetic with. Confusing them is the #1 beginner bug (see Common Mistakes).

## 4. Expressions and how they're evaluated

An **expression** is anything that produces a value. Python evaluates it and hands back the result.

### Arithmetic (on numbers)
```python
7 + 3      # 10   addition
7 - 3      # 4    subtraction
7 * 3      # 21   multiplication
7 / 3      # 2.333...  TRUE division — ALWAYS gives a float
7 // 3     # 2    floor division — drops the fractional part
7 % 3      # 1    modulo — the REMAINDER (hugely useful later)
2 ** 3     # 8    exponent — 2 to the power 3
```

Two dividers matter: `/` always gives a float (`6 / 2` is `3.0`, not `3`), while `//` gives the whole-number part. `%` (remainder) seems obscure now but is everywhere later — checking even/odd (`n % 2 == 0`), wrapping around clocks, cycling through lists.

### Precedence (order of operations)
Same as maths — **PEMDAS**: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction, left to right.
```python
2 + 3 * 4        # 14, not 20  (× before +)
(2 + 3) * 4      # 20          (parentheses first)
2 ** 3 ** 2      # 512, not 64 (** is right-associative: 2 ** (3 ** 2))
```
When in doubt, **add parentheses** — clarity beats cleverness.

### Strings have their own operators
```python
"foo" + "bar"    # "foobar"   + JOINS strings (concatenation)
"ab" * 3         # "ababab"   * REPEATS a string
"foo" + 42       # ERROR: can't add str and int
```
`+` means "add" for numbers but "join" for strings — the operator's meaning depends on the *types* of its operands. And you can't mix: `"foo" + 42` raises a `TypeError`.

### Comparison expressions → booleans
```python
5 > 3      # True
5 == 5     # True     (== is "equal?", = is "assign")
5 != 3     # True     (!= is "not equal")
3 >= 4     # False
```
Note `==` (a **question**: are these equal?) vs `=` (a **command**: bind this name). Mixing them is a classic bug.

### Boolean expressions → combine truths
```python
True and False   # False  (both must be true)
True or False    # True   (at least one true)
not True         # False
(5 > 3) and (2 < 1)   # False
```
These power every decision a program makes (next topic: conditionals).

## 5. Type conversion (casting) — on purpose, not by accident

You often need to change a value's type deliberately:
```python
int("42")      # 42     text -> integer
str(42)        # "42"   integer -> text
float("3.14")  # 3.14   text -> float
int(3.9)       # 3      float -> int (truncates toward zero, does NOT round)
```
This matters most with **input**: everything a user types comes in as a **string**, even if it looks like a number.
```python
age = input("Age? ")     # age is a STRING, e.g. "15"
age = int(age)           # now it's the number 15, ready for arithmetic
print(age + 1)           # 16   (without the int(), "15" + 1 would crash)
```

## 6. Tracing: the core skill

The single most valuable habit is **tracing** — stepping through code line by line, tracking each variable's value, to predict the output *before running it*. Do it on paper.

```python
a = 4
b = a + 2        # a is 4 -> b is 6
a = a * 3        # a is now 12  (b is still 6 — b didn't change)
c = a - b        # 12 - 6 -> c is 6
print(a, b, c)   # 12 6 6
```
Reassigning `a` did **not** retroactively change `b`; `b` had already been computed from the *old* `a`. Tracing makes this obvious and trains the mental model that debugging depends on.

## 7. Reading a type error

When types clash, Python raises a **traceback**. Read it bottom-up:
```
Traceback (most recent call last):
  File "prog.py", line 3, in <module>
    total = price + " rupees"
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```
The **last line** names the problem: you tried `int + str`. The line above shows *where*. Fix: convert first — `str(price) + " rupees"`. Learning to read tracebacks now (rather than fearing them) is what separates people who get unstuck from people who don't.

## 8. Summary
- A variable is a **name bound to a value**; `=` assigns, right side first.
- Four core types: `int`, `float`, `str`, `bool` — and `"42"` ≠ `42`.
- Expressions produce values; know arithmetic operators (esp. `/` vs `//` vs `%`), precedence (PEMDAS), string `+`/`*`, comparisons, and booleans.
- Convert types **deliberately** with `int()`, `str()`, `float()`; `input()` always gives a string.
- **Trace** code by hand to predict output — the skill everything else builds on.
- Read tracebacks bottom-up; the last line is the diagnosis.
