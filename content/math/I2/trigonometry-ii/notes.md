# Trigonometry II

> [!intro] **Trigonometry II frees the ratios from the right triangle.** The unit circle extends sine and cosine to every angle, turning them into the wave functions that describe oscillation, sound, alternating current and light. The sine and cosine rules then handle *any* triangle, so you can finally solve the non-right-angled cases that F2 and I1 could not touch.

## 1. The unit circle: trigonometry beyond 90°

On a circle of radius 1, the point at angle $\theta$ from the positive $x$-axis is exactly $(\cos\theta, \sin\theta)$. This *defines* sine and cosine for every angle, including obtuse, reflex and negative ones, where "opposite over hypotenuse" has no meaning.

The signs follow from the coordinates' signs in each quadrant:

| Quadrant | Angles | Positive |
|---|---|---|
| I | $0°$–$90°$ | **A**ll |
| II | $90°$–$180°$ | **S**ine only |
| III | $180°$–$270°$ | **T**angent only |
| IV | $270°$–$360°$ | **C**osine only |

remembered as **CAST**, read anticlockwise from the fourth quadrant.

Because the point returns to where it started every full turn, the functions are **periodic**: $\sin(\theta + 360°) = \sin\theta$. Sine and cosine oscillate between $-1$ and $1$ forever, giving the wave shape; cosine is simply sine shifted by $90°$. Tangent behaves differently — it is undefined wherever $\cos\theta = 0$ (at $90°$, $270°$, …), which produces its vertical asymptotes.

**Related angles** let you reduce any angle to an acute one: $\sin 150° = \sin 30° = \tfrac12$, and $\cos 210° = -\cos 30°$. Find the acute angle to the horizontal axis, then attach the sign from CAST.

```formula Key formulas
Unit circle: point at angle θ is (cos θ, sin θ)
CAST: All / Sine / Tangent / Cosine positive by quadrant
Period 360° for sin and cos;  180° for tan
−1 ≤ sin θ ≤ 1 and −1 ≤ cos θ ≤ 1 for every angle
tan θ undefined where cos θ = 0
```

## 2. Identities: relationships true for every angle

An **identity** holds for all values, unlike an equation which holds for particular ones. The two foundational identities are:

$$\sin^2\theta + \cos^2\theta = 1, \qquad \tan\theta = \frac{\sin\theta}{\cos\theta}$$

The first is Pythagoras on the unit circle: the point $(\cos\theta, \sin\theta)$ is at distance 1 from the origin.

Rearrangements are what make it useful: $\sin^2\theta = 1 - \cos^2\theta$ lets you convert an equation containing both functions into one containing only one, which is usually the key step in solving.

Two more, worth knowing for A1:

$$\sin(A \pm B) = \sin A\cos B \pm \cos A \sin B$$
$$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$

Note the **swapped sign** in the cosine expansion — a plus inside gives a minus outside. Setting $A = B$ produces the double-angle formulas: $\sin 2A = 2\sin A\cos A$ and $\cos 2A = \cos^2 A - \sin^2 A$.

**Proving an identity** means transforming one side into the other. Work on the more complicated side, convert everything to sines and cosines, and simplify. You may **not** treat it as an equation and do the same thing to both sides — that assumes what you are trying to prove.

## 3. Solving trigonometric equations

Because the functions are periodic, a trigonometric equation has **infinitely many solutions**, and questions therefore specify a range such as $0° \le \theta \le 360°$.

Solve $\sin\theta = 0.5$ in that range:

1. **Principal value:** $\sin^{-1}(0.5) = 30°$.
2. **Find the other solutions in range using symmetry.** Sine is positive in quadrants I and II, so the second solution is $180° - 30° = 150°$.
3. **State all solutions:** $\theta = 30°$ or $150°$.

The calculator gives only the principal value — **it will never tell you about the second solution**, which is why the symmetry step must be done by hand. The rules by function:

- $\sin$: second solution is $180° - \theta$.
- $\cos$: second solution is $360° - \theta$.
- $\tan$: solutions repeat every $180°$.

A caution for equations like $\sin 2\theta = 0.5$: solve for $2\theta$ over a **doubled range** ($0°$ to $720°$), then halve every answer. Solving for $\theta$ first loses solutions.

> [!example] **All solutions in range**
>
> **Problem.** Solve $\sin\theta = 0.5$ for $0° \le \theta \le 360°$.
>
> **Solution.** The principal value is $30°$. Sine is also positive in the second quadrant, giving $180° - 30° = 150°$. So $\theta = 30°$ or $150°$. Both check: $\sin 150° = 0.5$ ✓.
>
> *The calculator returns one answer; the symmetry of the unit circle supplies the rest.*

## 4. The sine and cosine rules: any triangle at last

For triangles **without** a right angle, two rules cover every case. Label each side with the lower-case letter of the angle opposite it.

**Sine rule** — use when you have a matching side–angle pair:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Suitable for: two angles and a side (AAS/ASA), or two sides and a non-included angle (SSA).

**Cosine rule** — use when the sine rule cannot start, i.e. no matching pair:

$$a^2 = b^2 + c^2 - 2bc\cos A$$

Suitable for: two sides and the included angle (SAS), or all three sides (SSS, rearranged to find an angle).

Notice that the cosine rule **is Pythagoras with a correction term**: when $A = 90°$, $\cos A = 0$ and it reduces to $a^2 = b^2+c^2$. The term $-2bc\cos A$ measures exactly how far the triangle departs from right-angled.

**The ambiguous case.** With SSA the sine rule can give two valid triangles, because $\sin\theta = \sin(180°-\theta)$ — the acute and obtuse options are both consistent with the data. This is the same SSA ambiguity met in F1 congruence, now quantified. Always check whether the obtuse alternative also fits (the angles must still total less than $180°$).

For area, when you know two sides and the included angle:

$$\text{Area} = \tfrac12 ab\sin C$$

```formula Key formulas
Sine rule: a/sin A = b/sin B = c/sin C  (needs a matching pair)
Cosine rule: a² = b² + c² − 2bc·cos A  (SAS or SSS)
Cosine rule reduces to Pythagoras when A = 90°
Area = ½ab·sin C
SSA is ambiguous: check the obtuse alternative
```

> [!example] **Choosing the right rule**
>
> **Problem.** A triangle has $b = 7$, $c = 9$ and the included angle $A = 60°$. Find $a$.
>
> **Solution.** Two sides and the angle between them, so there is no matching side–angle pair — use the cosine rule. $a^2 = 49 + 81 - 2(7)(9)\cos 60° = 130 - 126(0.5) = 67$, so $a = \sqrt{67} \approx 8.19$.
>
> *Sine rule needs a matching pair; if you do not have one, reach for the cosine rule.*

```formula Key formulas
Unit circle defines sin and cos for all angles; CAST gives the signs
sin²θ + cos²θ = 1;  tan θ = sin θ / cos θ
sin(A±B) = sinA cosB ± cosA sinB;  cos(A±B) = cosA cosB ∓ sinA sinB
sin: second solution 180° − θ;  cos: 360° − θ;  tan: repeats every 180°
Sine rule a/sinA = b/sinB = c/sinC;  cosine rule a² = b² + c² − 2bc cosA
Area = ½ab sin C
```

## What you should be able to do

- Use key trig identities
- Solve trigonometric equations
- Apply the sine and cosine rules

## Summary — the mental toolkit

1. The unit circle defines sine and cosine for every angle, producing periodic wave functions.
2. CAST gives the sign of each function by quadrant; related angles reduce any angle to an acute one.
3. sin²θ + cos²θ = 1 is Pythagoras on the unit circle, and rearranging it is the key solving step.
4. Trig equations have infinitely many solutions; the calculator gives one, symmetry gives the rest.
5. For sin θ = k the partner is 180° − θ; for cos θ = k it is 360° − θ; tan repeats every 180°.
6. Sine rule needs a matching side–angle pair; the cosine rule handles SAS and SSS.
7. The cosine rule is Pythagoras plus a correction, and SSA remains genuinely ambiguous.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
