# Functions as Objects

> [!intro] **A function is a machine with one rule: one input, one output.** That single restriction is what makes functions predictable enough to build mathematics on — and it is why $y = \pm\sqrt{x}$ is not a function while $y = x^2$ is. Once you think of a function as an object in its own right (something you can compose, invert and transform), graphs stop being curves to memorise and become a small number of shapes moved around.

## 1. The defining rule: one input, one output

A **function** $f$ assigns to each input exactly one output. Write $f(x)$ for the output at $x$ — read "f of x", never "f times x".

The **domain** is the set of allowed inputs; the **range** is the set of outputs actually produced. Domain restrictions come from three places, and they are worth checking before anything else:

- **Division by zero:** $f(x) = \dfrac{1}{x-2}$ excludes $x = 2$.
- **Even roots of negatives:** $f(x) = \sqrt{x-3}$ needs $x \ge 3$.
- **Context:** a function giving the area of a square of side $s$ needs $s > 0$, whatever the algebra allows.

The **vertical line test** turns the defining rule into something you can see: if any vertical line meets a graph more than once, that input has two outputs and the graph is not a function. A circle fails it; a parabola passes.

Note carefully that the restriction is **one-directional**. A function may send two different inputs to the same output — $f(x) = x^2$ sends both $3$ and $-3$ to $9$, and that is perfectly legal. What is forbidden is one input giving two outputs. A function that never repeats an output is called **one-to-one**, and that property is exactly what decides whether it can be inverted.

```formula Key formulas
f(x): exactly one output per input
Domain = allowed inputs;  range = outputs produced
Exclude: division by zero, even roots of negatives, context-impossible values
Vertical line test: more than one intersection ⇒ not a function
```

## 2. Composition: functions applied in sequence

Composing means feeding one function's output into another. $(f \circ g)(x) = f(g(x))$ means **do $g$ first**, then $f$ — read it inside-out, like brackets.

With $f(x) = 2x + 1$ and $g(x) = x^2$:

$$f(g(x)) = f(x^2) = 2x^2 + 1, \qquad g(f(x)) = g(2x+1) = (2x+1)^2$$

These are different functions — at $x = 3$ they give 19 and 49. **Composition is not commutative**, and expecting it to be is the standard error. The everyday analogy is reliable: putting on socks then shoes is not the same as shoes then socks.

The domain of a composition needs care: $x$ must be valid for $g$, *and* $g(x)$ must be valid for $f$. If $f(x) = \sqrt{x}$ and $g(x) = x - 5$, then $f(g(x)) = \sqrt{x-5}$ requires $x \ge 5$ even though $g$ alone accepts everything.

> [!example] **Order matters**
>
> **Problem.** For $f(x)=2x+1$ and $g(x)=x^2$, evaluate $f(g(3))$ and $g(f(3))$.
>
> **Solution.** $f(g(3)) = f(9) = 19$. $g(f(3)) = g(7) = 49$. Do the inner function first in each case.
>
> *Composition reads inside-out, and swapping the order changes the answer.*

## 3. Inverses: undoing a function

The **inverse** $f^{-1}$ undoes $f$: $f^{-1}(f(x)) = x$. Its graph is the reflection of $f$ in the line $y = x$, because reflecting swaps the roles of input and output.

To find it, swap $x$ and $y$ and solve for $y$. For $f(x) = 2x + 1$:

$$y = 2x+1 \;\to\; x = 2y+1 \;\to\; y = \frac{x-1}{2}$$

Check by composing: $f^{-1}(f(3)) = f^{-1}(7) = 3$ ✓.

**An inverse exists only if the function is one-to-one.** $f(x) = x^2$ has no inverse over all reals, because $f(3) = f(-3) = 9$ and the inverse could not decide which to return. Restricting the domain to $x \ge 0$ makes it one-to-one, and then $f^{-1}(x) = \sqrt{x}$ — which is precisely why the square-root symbol is defined to return only the positive root. The **horizontal line test** detects this: if a horizontal line meets the graph twice, there is no inverse.

Notation trap: $f^{-1}(x)$ means the inverse function, **not** $\dfrac{1}{f(x)}$. The superscript $-1$ is behaving like the "undo" it does for operations, not like an exponent.

```formula Key formulas
f⁻¹(f(x)) = x;  graph of f⁻¹ is f reflected in y = x
Find it by swapping x and y, then solving for y
Exists only if f is one-to-one (horizontal line test)
f⁻¹(x) is the inverse function, NOT 1/f(x)
```

## 4. Transformations: one shape, moved around

Rather than learning every graph separately, learn a few parent shapes and how four transformations move them.

| Change | Effect | Direction |
|---|---|---|
| $f(x) + a$ | shift **up** by $a$ | as expected |
| $f(x + a)$ | shift **left** by $a$ | **opposite** to expectation |
| $a\,f(x)$ | stretch vertically by $a$ | as expected |
| $f(ax)$ | squash horizontally by $a$ | **opposite** (factor $\tfrac1a$) |
| $-f(x)$ | reflect in the $x$-axis | — |
| $f(-x)$ | reflect in the $y$-axis | — |

**Inside the bracket, everything behaves backwards**, and this is the point students find genuinely counter-intuitive. Why does $f(x+3)$ shift *left*? Because the graph reaches a given output *sooner*: whatever $f$ did at $x = 0$, the new function does at $x = -3$.

So $y = (x-2)^2 + 3$ is the parabola $y = x^2$ moved 2 right and 3 up, with vertex $(2, 3)$ — which is exactly the vertex form from Quadratics, now recognisable as a transformation rather than a separate formula.

Parent shapes worth knowing on sight: $y = x$ (line), $y = x^2$ (parabola), $y = x^3$, $y = \tfrac1x$ (hyperbola), $y = \sqrt{x}$, $y = |x|$.

> [!example] **Reading a transformed graph**
>
> **Problem.** Describe $y = -2(x+1)^2 + 5$ as transformations of $y = x^2$.
>
> **Solution.** Inside the bracket, $+1$ shifts **left** 1. The factor 2 stretches vertically by 2, the minus reflects in the $x$-axis, and $+5$ shifts up 5. The vertex moves from $(0,0)$ to $(-1, 5)$, and the parabola opens downward.
>
> *Inside the bracket acts horizontally and backwards; outside acts vertically and as written.*

```formula Key formulas
One input → exactly one output (vertical line test)
(f∘g)(x) = f(g(x)) — inner function first; not commutative
Inverse: swap x and y, solve; needs one-to-one (horizontal line test)
f(x) + a up;  f(x + a) LEFT;  a·f(x) vertical stretch;  f(ax) horizontal squash
−f(x) reflects in x-axis;  f(−x) reflects in y-axis
```

## What you should be able to do

- Use function notation and find domain/range
- Compose and invert functions
- Transform graphs (shift, stretch, reflect)

## Summary — the mental toolkit

1. A function gives exactly one output per input; two inputs may share an output.
2. Domain excludes division by zero, even roots of negatives, and context-impossible values.
3. The vertical line test checks functionhood; the horizontal line test checks invertibility.
4. Composition applies the inner function first and is not commutative.
5. An inverse reflects the graph in y = x and exists only for one-to-one functions.
6. f⁻¹ means inverse, never reciprocal.
7. Transformations inside the bracket act horizontally and in reverse; outside, vertically and as written.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
