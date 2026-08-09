# Linear Relationships & the Coordinate Plane

> [!intro] **This is where ratio becomes a picture.** A constant rate — the idea you built in F1 — drawn on axes is a straight line, and its steepness *is* the rate. Once you see that, $y = mx + c$ stops being a formula to memorise and becomes a sentence: "start at $c$, then change by $m$ for every step across". The same line is a speed in physics, a price per unit in economics, and a gradient in calculus later.

## 1. The coordinate plane: naming every point

Two perpendicular number lines — the $x$-axis (across) and $y$-axis (up) — let any point in the plane be named by an ordered pair $(x, y)$. The order is not negotiable: $(3, 5)$ and $(5, 3)$ are different points.

The axes split the plane into four **quadrants**, numbered anticlockwise from the top right:

| Quadrant | $x$ | $y$ |
|---|---|---|
| I (top right) | $+$ | $+$ |
| II (top left) | $-$ | $+$ |
| III (bottom left) | $-$ | $-$ |
| IV (bottom right) | $+$ | $-$ |

Reading a point's signs tells you its quadrant instantly, which is a useful check when plotting.

The plane's real power is that it turns **relationships between two quantities into shapes.** A table of values becomes a set of points; the pattern in the table becomes the shape of the graph. Every graph you meet afterwards — quadratics, circles, sine waves — is this same translation.

## 2. Gradient: the rate, made visible

The **gradient** (slope) $m$ measures steepness as *rise over run* — how much $y$ changes per unit change in $x$:

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

That fraction is a **rate**, and rates are ratios of unlike quantities — exactly the F1 idea. If $y$ is distance and $x$ is time, the gradient is speed. If $y$ is cost and $x$ is quantity, it is price per unit.

Read the sign and size together:

- **Positive** gradient rises left to right; **negative** falls.
- **Zero** gradient is a horizontal line ($y = c$) — $y$ never changes.
- A **vertical** line has *undefined* gradient, because the run is 0 and division by zero is undefined. Its equation is $x = k$.
- **Steeper means larger $|m|$**: a gradient of 3 climbs three times as fast as 1.

The key property that makes lines special: **the gradient is the same between any two points on the line.** That constancy *is* what "linear" means, and it is why a line models constant-rate situations and nothing else.

```svg
<svg viewBox="0 0 400 200" role="img" aria-label="Line showing rise over run gradient" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="170" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="170" x2="370" y2="170" stroke="#6b7a99" stroke-width="2"/>
  <line x1="70" y1="150" x2="330" y2="40" stroke="#6ee7a8" stroke-width="3"/>
  <line x1="150" y1="116" x2="270" y2="116" stroke="#9aa8c4" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="270" y1="116" x2="270" y2="64" stroke="#9aa8c4" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="210" y="134" font-size="12" fill="#9aa8c4" text-anchor="middle">run</text>
  <text x="286" y="94" font-size="12" fill="#9aa8c4">rise</text>
  <text x="150" y="36" font-size="12" fill="#e6ecff">gradient m = rise / run</text>
  <circle cx="70" cy="150" r="4" fill="#6366f1"/>
  <text x="52" y="188" font-size="11" fill="#9aa8c4">c (y-intercept at x = 0)</text>
</svg>
```

```formula Key formulas
m = (y₂ − y₁)/(x₂ − x₁) = rise/run
Horizontal line: m = 0, equation y = c
Vertical line: m undefined, equation x = k
A line has the SAME gradient between any two of its points
```

## 3. y = mx + c: reading a line as a sentence

Every non-vertical line can be written

$$y = mx + c$$

where $m$ is the gradient and $c$ is the **$y$-intercept** — the value of $y$ when $x = 0$, i.e. where the line crosses the vertical axis.

Read it as a sentence: *"Start at $c$; for every 1 you move right, go up by $m$."*

- $y = 2x + 3$: start at 3, climb 2 each step.
- $y = -\tfrac12 x + 4$: start at 4, drop a half each step.
- $y = 5$: start at 5 and never change — a horizontal line with $m = 0$.

**To find the equation from a graph:** read $c$ where the line crosses the $y$-axis, then count rise over run between two clean lattice points. **From two points:** compute $m$ first, then substitute one point into $y = mx + c$ to solve for $c$.

Two lines are **parallel** exactly when their gradients are equal — same rate, different starting point. (Perpendicular lines satisfy $m_1 m_2 = -1$; you will meet that properly in I1 Coordinate Geometry.)

> [!example] **Equation from two points**
>
> **Problem.** Find the equation of the line through (1, 5) and (3, 11).
>
> **Solution.** Gradient: $m = \dfrac{11-5}{3-1} = \dfrac{6}{2} = 3$. Substitute (1, 5) into $y = 3x + c$: $5 = 3 + c$, so $c = 2$. The line is $y = 3x + 2$. Check with the other point: $3(3) + 2 = 11$. ✓
>
> *Always verify with the point you did not use — it catches every arithmetic slip.*

## 4. Modelling with straight lines

Linear models fit any situation with a **fixed starting amount plus a constant rate**, and that pattern is everywhere:

| Situation | Equation | $c$ means | $m$ means |
|---|---|---|---|
| Taxi fare | $C = 15d + 50$ | base charge ₹50 | ₹15 per km |
| Phone plan | $C = 2t + 199$ | monthly rental | cost per minute |
| Distance at steady speed | $d = 60t$ | starts at 0 | 60 km/h |
| Water draining | $V = 500 - 20t$ | initial 500 L | losing 20 L/min |

Notice the last one: a **negative gradient means decrease**, and the model tells you when the tank empties — set $V = 0$ and solve $500 - 20t = 0$, giving $t = 25$ minutes.

Two cautions that separate a model from reality:

- **Interpolation is usually safe; extrapolation is a claim.** The draining model gives $V = -100$ at $t = 30$, which is nonsense — the model stops being valid at $t = 25$. Always ask over what domain the linear relationship actually holds.
- **A straight-looking data set is not necessarily linear.** Real data scatters; drawing a line of best fit is a judgement, and the gradient you read from it is an estimate, not a fact.

> [!example] **Reading a model**
>
> **Problem.** A taxi charges ₹50 plus ₹15 per km. Write the cost equation, and find the distance for a ₹200 fare.
>
> **Solution.** $C = 15d + 50$. Setting $C = 200$: $15d = 150$, so $d = 10$ km. The intercept 50 is what you pay before moving at all; the gradient 15 is the rate.

```formula Key formulas
Point: (x, y) — order matters
Gradient m = (y₂ − y₁)/(x₂ − x₁)
y = mx + c:  m = gradient, c = y-intercept (value at x = 0)
Parallel lines ⇔ equal gradients
Horizontal y = c (m = 0);  vertical x = k (m undefined)
```

## What you should be able to do

- Plot points and lines on the coordinate plane
- Interpret slope as a rate and intercept as a starting value
- Write the equation of a line from a graph

## Summary — the mental toolkit

1. A coordinate pair (x, y) names a point; order and sign fix the quadrant.
2. Gradient = rise/run, and it is a rate — the F1 idea drawn as steepness.
3. A line is exactly a relationship whose gradient is constant everywhere.
4. y = mx + c reads as "start at c, change by m per step across".
5. From two points: find m first, then substitute to get c, then check with the unused point.
6. Parallel means equal gradients; horizontal has m = 0; vertical has m undefined.
7. Linear models = fixed start + constant rate; extrapolating beyond the valid domain is a claim, not a result.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
