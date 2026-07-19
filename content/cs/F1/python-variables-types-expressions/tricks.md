# Tricks & Problem-Solving Techniques — Python: Variables, Types & Expressions

### 1. Trace on paper with a variable table
For any tricky snippet, draw a table with one column per variable and one row per line executed. Fill in values as you "run" it by hand. This turns confusing code into a mechanical checklist and is the foundation of all debugging.

| line | a | b | c |
|---|---|---|---|
| `a = 4` | 4 | — | — |
| `b = a + 2` | 4 | 6 | — |
| `a = a * 3` | 12 | 6 | — |

### 2. Use `type()` and `print()` as your microscope
When something behaves oddly, print the value **and** its type:
```python
print(x, type(x))
```
Nine times out of ten the bug is "I thought this was an int but it's a str." Seeing the type instantly reveals it.

### 3. f-strings beat `+` for mixing text and numbers
Instead of fragile `"Score: " + str(score)`, write:
```python
print(f"Score: {score}")
```
No manual `str()`, no `TypeError`, and it reads clearly. Anything in `{}` is evaluated and inserted.

### 4. `%` (modulo) is the even/odd and cycle tool
- `n % 2 == 0` → `n` is even; `== 1` → odd.
- `n % 10` → last digit of `n`.
- Modulo wraps things around (clocks, days of week, cycling list positions). Remember "modulo = remainder" and reach for it whenever you hear "every Nth" or "wrap around."

### 5. Convert `input()` immediately, in one line
Fold the cast into the input so you never forget:
```python
age = int(input("Age? "))
price = float(input("Price? "))
```
This kills the most common beginner bug (string-from-input) at the source.

### 6. Parenthesize when precedence is unclear
You lose nothing by writing `(a * b) + c` even when the parentheses are technically redundant. Clarity for the next reader (and fewer precedence bugs) is worth more than brevity.

### 7. Swap two variables the Pythonic way
```python
a, b = b, a      # swaps in one line, no temp variable needed
```
A neat demonstration that the right side is fully evaluated before assignment.

### 8. Predict-then-run to build intuition
Before running any snippet, write down what you *think* it prints. Then run it. Every mismatch is a gap in your mental model made visible — the fastest way to learn the language's real behaviour.

### 9. Keep a "gotchas" note
Jot each surprise (`/` gives float, `int()` truncates, `"5"+"3"="53"`) into a personal note. These few rules cause most early bugs; a glance at your list resolves them until they're automatic.

### 10. Name to explain, comment to justify
A good variable name (`remaining_lives`) removes the need for a comment. Save comments for *why* something non-obvious is done, not *what* the line does. This habit scales to every future project and to reading others' code.
