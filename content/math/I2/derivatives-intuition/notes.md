# Calculus Intuition: Derivatives

> [!intro] **A derivative is a rate of change made exact.** You already compute average rates — a gradient between two points, average speed over a journey. The derivative answers the harder question: *how fast is it changing right now, at this instant?* The trick that makes it possible is the limit: shrink the interval toward zero and watch what the gradient approaches. This is the same "slope = rate" idea from F2, sharpened until it works on curves.

## 1. From average rate to instantaneous rate

Between two points on a curve, the **average** rate of change is the gradient of the **chord** joining them:

$$\frac{f(x+h) - f(x)}{h}$$

That is exactly rise over run, with run $= h$.

The problem: this measures the average over the interval, not the rate *at* $x$. Making $h$ smaller gives a better local approximation — but setting $h = 0$ gives $\tfrac00$, which is meaningless.

The resolution is to ask what the expression **approaches** as $h$ shrinks, without ever setting it to zero. That limit is the **derivative**:

$$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

Geometrically, as $h \to 0$ the chord pivots until it becomes the **tangent** at the point. So the derivative is the gradient of the tangent — the slope of the curve at a single point.

Watch the machinery work on $f(x) = x^2$:

$$\frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

Cancelling $h$ is legitimate because $h \ne 0$ — it is merely heading toward 0. As $h \to 0$ the expression approaches $2x$, so $f'(x) = 2x$. At $x = 3$ the slope is 6.

```svg
<svg viewBox="0 0 400 180" role="img" aria-label="Chord approaching a tangent on a curve" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="150" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="150" x2="370" y2="150" stroke="#6b7a99" stroke-width="2"/>
  <path d="M60 145 Q 200 145 340 35" fill="none" stroke="#6b7a99" stroke-width="2.5"/>
  <line x1="150" y1="140" x2="300" y2="66" stroke="#9aa8c4" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="120" y1="160" x2="290" y2="106" stroke="#6ee7a8" stroke-width="2.5"/>
  <circle cx="196" cy="133" r="4.5" fill="#6366f1"/>
  <text x="206" y="126" font-size="11" fill="#e6ecff">tangent: the limit of the chords</text>
  <text x="250" y="60" font-size="11" fill="#9aa8c4">chord</text>
</svg>
```

## 2. The power rule, and the rules that follow

Doing that limit every time would be exhausting. Fortunately the pattern generalises:

$$\frac{d}{dx}x^n = nx^{n-1}$$

**Bring the power down in front, then reduce the power by one.** Check it against what you know: $x^2 \to 2x$ ✓, and $x^1 \to 1$ — the gradient of $y = x$ is 1, as it must be.

Three companions complete the basic toolkit:

- **Constant:** $\dfrac{d}{dx}(c) = 0$. A constant function is horizontal, and a horizontal line has gradient 0.
- **Constant multiple:** $\dfrac{d}{dx}(cf) = c f'$. Doubling a function doubles its steepness.
- **Sum:** $\dfrac{d}{dx}(f+g) = f' + g'$. Differentiate term by term.

So for $f(x) = 3x^2 - 5x + 7$: the terms give $6x$, $-5$ and $0$, hence $f'(x) = 6x - 5$.

Two notations mean the same thing: $f'(x)$ (Lagrange) and $\dfrac{dy}{dx}$ (Leibniz). The second is not a fraction, though it usefully behaves like one; read it as "the rate of change of $y$ with respect to $x$" — and the phrase "with respect to" matters, because it names which variable is doing the changing.

```formula Key formulas
f′(x) = lim(h→0) [f(x+h) − f(x)]/h
Power rule: d/dx(xⁿ) = nxⁿ⁻¹
d/dx(c) = 0;  d/dx(cf) = cf′;  d/dx(f + g) = f′ + g′
The derivative is the gradient of the tangent
```

> [!example] **Differentiating term by term**
>
> **Problem.** Differentiate $f(x) = 3x^2 - 5x + 7$ and find the gradient at $x = 2$.
>
> **Solution.** Term by term: $3x^2 \to 6x$, $-5x \to -5$, $7 \to 0$. So $f'(x) = 6x - 5$, and $f'(2) = 12 - 5 = 7$.
>
> *The constant vanishes because shifting a graph up or down never changes its steepness.*

## 3. What the derivative tells you about a graph

The **sign** of $f'$ describes the behaviour of $f$, and this is where derivatives become genuinely useful:

- $f' > 0$ — the function is **increasing** (tangent slopes up).
- $f' < 0$ — **decreasing**.
- $f' = 0$ — a **stationary point**: maximum, minimum, or point of inflection.

Stationary points are where optimisation happens. To find the maximum or minimum of $f$, solve $f'(x) = 0$, then classify each solution:

- **Second derivative test:** $f'' > 0$ means the slope is increasing, so the curve is cupped upward — a **minimum**. $f'' < 0$ gives a **maximum**.
- Or check the sign of $f'$ just either side: $+ \to -$ is a maximum, $- \to +$ a minimum.

*Example.* For $f(x) = x^2 - 6x + 5$: $f'(x) = 2x - 6 = 0$ at $x = 3$, and $f'' = 2 > 0$, so it is a minimum, with value $f(3) = -4$. That matches the vertex found by completing the square in I1 Quadratics — **two methods, one answer**, which is exactly the kind of cross-check that builds confidence.

Not every stationary point is a turning point: $f(x) = x^3$ has $f'(0) = 0$ yet keeps increasing through the origin. That is a point of inflection, and it is why classification is a required step rather than an optional one.

## 4. Kinematics: where this came from

Differentiation was invented largely to describe motion, and kinematics remains the clearest illustration.

If $s(t)$ is displacement, then

$$v = \frac{ds}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

Velocity is the derivative of displacement; acceleration is the derivative of velocity. This makes the F1 physics statements exact rather than approximate: "slope of a distance–time graph is speed" was always true for *straight* graphs; the derivative extends it to curved ones.

*Worked example.* A ball's height is $s = 20t - 5t^2$ metres.

- $v = \dfrac{ds}{dt} = 20 - 10t$. At launch ($t=0$) the velocity is 20 m/s upward.
- At the highest point the ball is momentarily stationary, so $v = 0$ gives $t = 2$ s.
- Maximum height: $s(2) = 40 - 20 = 20$ m.
- $a = \dfrac{dv}{dt} = -10$ m/s² — constant, negative, and downward: gravity.

Note what "momentarily at rest" means: velocity is zero at the peak, but acceleration is not. An object can be stationary and still accelerating — a distinction that causes endless confusion in physics and which the derivative makes precise.

> [!example] **Optimisation with calculus**
>
> **Problem.** A farmer fences three sides of a rectangular pen with 40 m of fencing. Find the maximum area using calculus.
>
> **Solution.** With sides $x$, $x$ and $40-2x$: $A = x(40-2x) = 40x - 2x^2$. Then $\dfrac{dA}{dx} = 40 - 4x = 0$ gives $x = 10$, and $\dfrac{d^2A}{dx^2} = -4 < 0$ confirms a maximum. Area $= 10 \times 20 = 200$ m².
>
> *The same answer as completing the square in I1 — calculus generalises the method to problems where no square can be completed.*

```formula Key formulas
f′(x) = lim(h→0)[f(x+h) − f(x)]/h — the gradient of the tangent
Power rule: d/dx(xⁿ) = nxⁿ⁻¹;  constants differentiate to 0
f′ > 0 increasing;  f′ < 0 decreasing;  f′ = 0 stationary
f″ > 0 ⇒ minimum;  f″ < 0 ⇒ maximum
Kinematics: v = ds/dt,  a = dv/dt = d²s/dt²
```

## What you should be able to do

- Interpret the derivative as an instantaneous rate
- Differentiate simple powers
- Connect derivative to slope of a tangent

## Summary — the mental toolkit

1. An average rate is a chord gradient; the derivative is what it approaches as the interval shrinks to zero.
2. The limit avoids 0/0 by asking what the expression approaches, never setting h = 0.
3. Geometrically the derivative is the gradient of the tangent at a point.
4. Power rule: bring the power down, reduce it by one; constants differentiate to zero.
5. The sign of f′ says increasing or decreasing; f′ = 0 locates stationary points.
6. Classify stationary points with f″ or a sign check — not every one is a turning point.
7. Velocity is the derivative of displacement and acceleration of velocity; zero velocity does not mean zero acceleration.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
