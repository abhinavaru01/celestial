# Trigonometry I

> [!intro] **Trigonometry exists because of similarity.** All right triangles with the same acute angle are similar, so their side *ratios* depend only on that angle — never on size. Those fixed ratios get names (sine, cosine, tangent), and suddenly you can find distances you cannot measure: the height of a tower, the width of a river, the resolved components of a force in physics.

## 1. Why the ratios are well-defined

Take any right triangle with an acute angle $\theta$. Any other right triangle with the same $\theta$ has the same three angles, so by **AA** the two are similar (F2 Geometry II), and corresponding sides are in proportion.

Therefore the ratio $\dfrac{\text{opposite}}{\text{hypotenuse}}$ is **the same for every** right triangle containing that angle. It depends on $\theta$ alone — so it deserves a name, and it is called $\sin\theta$.

Relative to the chosen angle $\theta$:

- **Opposite** — the side facing $\theta$.
- **Adjacent** — the side touching $\theta$ that is not the hypotenuse.
- **Hypotenuse** — opposite the right angle; always the longest, and never changes role.

$$\sin\theta = \frac{O}{H}, \qquad \cos\theta = \frac{A}{H}, \qquad \tan\theta = \frac{O}{A}$$

remembered as **SOH-CAH-TOA**.

**Opposite and adjacent swap when you change reference angle** — this is the single biggest source of error. The hypotenuse is fixed by the right angle, but the other two labels depend entirely on which acute angle you are working from. Label the triangle *after* choosing $\theta$, every time.

Two immediate consequences: since $O < H$ and $A < H$, both $\sin\theta$ and $\cos\theta$ are **always less than 1** for an acute angle. An answer of $\sin\theta = 1.4$ is impossible — a reliable error detector. $\tan\theta$, however, has no such bound.

```svg
<svg viewBox="0 0 400 170" role="img" aria-label="Right triangle labelled opposite adjacent hypotenuse" xmlns="http://www.w3.org/2000/svg">
  <polygon points="70,140 320,140 320,40" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>
  <rect x="303" y="123" width="17" height="17" fill="none" stroke="#9aa8c4" stroke-width="2"/>
  <path d="M110 140 A 40 40 0 0 0 100 118" fill="none" stroke="#6366f1" stroke-width="2"/>
  <text x="112" y="128" font-size="13" fill="#6366f1">θ</text>
  <text x="180" y="158" font-size="12" fill="#9aa8c4">adjacent</text>
  <text x="330" y="95" font-size="12" fill="#9aa8c4">opposite</text>
  <text x="160" y="80" font-size="12" fill="#9aa8c4">hypotenuse</text>
  <text x="70" y="24" font-size="11" fill="#e6ecff">labels depend on which angle is θ</text>
</svg>
```

## 2. Using the ratios: find a side, find an angle

**To find a side**, pick the ratio containing the side you want and the side you know.

A ladder makes $60°$ with the ground and reaches 4 m up a wall. How long is the ladder? Here the 4 m is *opposite* the $60°$ and the ladder is the *hypotenuse*, so use sine:

$$\sin 60° = \frac{4}{L} \Rightarrow L = \frac{4}{\sin 60°} \approx \frac{4}{0.866} \approx 4.6 \text{ m}$$

**To find an angle**, use the inverse functions $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ (also written arcsin, etc.). If the opposite is 3 and the adjacent 4:

$$\tan\theta = \tfrac34 \Rightarrow \theta = \tan^{-1}(0.75) \approx 36.9°$$

Two mechanical cautions that cause more lost marks than any concept here:

- **$\sin^{-1}$ is not $\dfrac{1}{\sin}$.** It is the inverse *function* — "which angle has this ratio?" The reciprocal $\tfrac{1}{\sin\theta}$ is a different thing entirely (called cosec).
- **Check the calculator is in degrees.** A calculator in radian mode gives confidently wrong answers with no warning. Verify by computing $\sin 30°$: it must be exactly 0.5.

**Choosing which ratio to use:** label the three sides relative to your angle, mark which two are involved (one known, one wanted), and the pair names the ratio. Only one of SOH, CAH, TOA will fit.

> [!example] **Angle of elevation**
>
> **Problem.** From 50 m away, the angle of elevation to the top of a tower is 32°. How tall is the tower?
>
> **Solution.** The 50 m is *adjacent* to the angle and the height is *opposite*, so use tangent: $\tan 32° = \dfrac{h}{50}$, giving $h = 50\tan 32° \approx 50 \times 0.625 \approx 31.2$ m.
>
> *Angle of elevation is measured up from the horizontal; angle of depression is measured down from it — and the two are equal between the same pair of points (alternate angles).*

## 3. The exact values, and where they come from

Three angles have exact ratios you should know without a calculator, and they come from two simple triangles.

**The $45°$ triangle:** take a unit square and cut along the diagonal. Both legs are 1 and the hypotenuse is $\sqrt2$, so $\sin45° = \cos45° = \tfrac{1}{\sqrt2}$ and $\tan45° = 1$.

**The $30°$–$60°$ triangle:** take an equilateral triangle of side 2 and drop a perpendicular. It splits into two right triangles with hypotenuse 2, short side 1 and (by Pythagoras) long side $\sqrt3$.

| $\theta$ | $\sin$ | $\cos$ | $\tan$ |
|---|---|---|---|
| $0°$ | 0 | 1 | 0 |
| $30°$ | $\tfrac12$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{1}{\sqrt3}$ |
| $45°$ | $\tfrac{1}{\sqrt2}$ | $\tfrac{1}{\sqrt2}$ | 1 |
| $60°$ | $\tfrac{\sqrt3}{2}$ | $\tfrac12$ | $\sqrt3$ |
| $90°$ | 1 | 0 | undefined |

Read the pattern rather than memorising 15 numbers: **sine increases from 0 to 1 as the angle grows; cosine decreases from 1 to 0**; and the $30°$ and $60°$ values are each other's swapped. That reflects the identity $\sin\theta = \cos(90°-\theta)$ — the two acute angles in a right triangle are complementary, and one's opposite is the other's adjacent.

$\tan 90°$ is undefined because the adjacent side shrinks to zero, and division by zero is undefined — the same reason a vertical line has no gradient.

```formula Key formulas
sin θ = O/H,  cos θ = A/H,  tan θ = O/A  (SOH-CAH-TOA)
tan θ = sin θ / cos θ
sin²θ + cos²θ = 1  (Pythagoras, in ratio form)
sin θ = cos(90° − θ)
For acute θ: 0 < sin θ < 1 and 0 < cos θ < 1
```

## 4. The unit circle and the first identity

Place a right triangle with hypotenuse 1 inside a circle of radius 1, with $\theta$ at the origin. Then the horizontal leg is $\cos\theta$ and the vertical leg is $\sin\theta$ — so the point on the circle is exactly $(\cos\theta, \sin\theta)$.

Applying Pythagoras to that triangle gives the most important identity in trigonometry:

$$\sin^2\theta + \cos^2\theta = 1$$

(The notation $\sin^2\theta$ means $(\sin\theta)^2$, not $\sin(\theta^2)$.) This is not a new fact — it *is* Pythagoras, written with ratios instead of lengths.

It is immediately useful: given $\sin\theta = \tfrac35$ for an acute angle, $\cos^2\theta = 1 - \tfrac{9}{25} = \tfrac{16}{25}$, so $\cos\theta = \tfrac45$, and then $\tan\theta = \tfrac{\sin\theta}{\cos\theta} = \tfrac34$. One ratio determines the other two.

The unit circle also explains what happens **beyond $90°$**, where "opposite over hypotenuse" no longer makes sense: the coordinates keep going, so $\sin$ and $\cos$ are defined for any angle, taking negative values in the appropriate quadrants. That extension — and the wave shape it produces — is the subject of Trigonometry II, and it is why sine describes oscillations in physics.

> [!example] **One ratio gives the rest**
>
> **Problem.** For an acute angle, $\sin\theta = \tfrac35$. Find $\cos\theta$ and $\tan\theta$.
>
> **Solution.** From $\sin^2\theta+\cos^2\theta=1$: $\cos^2\theta = 1-\tfrac{9}{25} = \tfrac{16}{25}$, so $\cos\theta = \tfrac45$ (positive, since $\theta$ is acute). Then $\tan\theta = \tfrac{3/5}{4/5} = \tfrac34$.
>
> *This is the 3-4-5 triangle — recognising Pythagorean triples makes trigonometry questions instant.*

```formula Key formulas
SOH-CAH-TOA: sin = O/H, cos = A/H, tan = O/A
Inverse functions sin⁻¹, cos⁻¹, tan⁻¹ find the ANGLE (not a reciprocal)
sin²θ + cos²θ = 1;  tan θ = sin θ / cos θ
Exact: sin30 = ½, cos60 = ½, sin45 = cos45 = 1/√2, tan45 = 1, tan60 = √3
sin θ = cos(90° − θ)
```

## What you should be able to do

- Use sin, cos and tan in right triangles
- Solve for unknown sides and angles
- Understand the unit-circle picture

## Summary — the mental toolkit

1. The ratios are well-defined because all right triangles with a given acute angle are similar.
2. Opposite and adjacent depend on the chosen angle; only the hypotenuse is fixed.
3. For acute angles sin and cos are always below 1 — a built-in error check.
4. Pick the ratio from the two sides involved: one known, one wanted.
5. Inverse functions find angles; sin⁻¹ is not 1/sin, and the calculator must be in degrees.
6. The 45° and 30°–60° triangles generate all the exact values worth memorising.
7. sin²θ + cos²θ = 1 is Pythagoras in ratio form, and one ratio determines the other two.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
