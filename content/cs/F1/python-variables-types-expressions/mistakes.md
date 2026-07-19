# Common Mistakes — Python: Variables, Types & Expressions

### 1. Reading `=` as equality
Seeing `score = score + 5` and thinking "that's false, a thing can't equal itself plus 5."
> **Fix:** `=` is an *instruction*, not a maths equation. It means "evaluate the right side, then bind the name to that result." Right side first, then rebind.

### 2. Confusing `"42"` (string) with `42` (int)
`"5" + "3"` gives `"53"`, not `8`; then surprise when arithmetic breaks.
> **Fix:** quotes mean **text**. `"42"` is characters; `42` is a number. Convert with `int("42")` before doing arithmetic.

### 3. Forgetting that `input()` returns a string
```python
age = input("Age? ")
print(age + 1)          # TypeError: can't add str and int
```
> **Fix:** wrap it: `age = int(input("Age? "))`. Everything typed by a user arrives as a string.

### 4. Mixing up `=` and `==`
Writing `if x = 5:` (assignment) when you mean `if x == 5:` (comparison).
> **Fix:** `=` assigns (a command); `==` asks "equal?" (a question). In Python `if x = 5:` is even a syntax error — a helpful nudge.

### 5. Expecting `/` to give a whole number
`10 / 2` is `5.0` (a float), not `5`. Beginners expect an int.
> **Fix:** `/` is *true division* and always returns a float. Use `//` for floor (whole-number) division when you want an int-like result.

### 6. Misjudging operator precedence
`2 + 3 * 4` → expecting 20, getting 14.
> **Fix:** `*` and `/` bind tighter than `+` and `-` (PEMDAS). When unsure, add parentheses: `(2 + 3) * 4`.

### 7. Thinking reassigning one variable updates another
```python
a = 5
b = a
a = 10
print(b)      # 5, not 10
```
> **Fix:** `b = a` copied the *value* at that moment. Later changing `a` doesn't reach back and change `b`. Trace it line by line.

### 8. Trying to concatenate a string and a number with `+`
`"Total: " + 50` → `TypeError`.
> **Fix:** convert the number: `"Total: " + str(50)`, or use an f-string: `f"Total: {50}"`.

### 9. Assuming `int()` rounds
`int(3.9)` is `3`, not `4`.
> **Fix:** `int()` **truncates** toward zero (chops the decimal). Use `round(3.9)` if you actually want rounding.

### 10. Fearing tracebacks instead of reading them
Panicking at red error text and guessing randomly.
> **Fix:** read the traceback **bottom-up**: the last line is the error type + message (the diagnosis); the line above is where it happened. Tracebacks are the program *telling you the fix*.

### 11. Invalid or misleading variable names
Starting a name with a digit (`2nd = 5` → error) or naming everything `x`, `data`, `temp`.
> **Fix:** names can't start with digits; more importantly, use descriptive `snake_case` (`second_score`) so code reads like prose.
