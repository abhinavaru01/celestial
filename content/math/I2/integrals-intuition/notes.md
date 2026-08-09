# Calculus Intuition: Integrals

> [!intro] **If differentiation asks "how fast?", integration asks "how much in total?"** Accumulate a rate over time and you get the amount: accumulate speed and you get distance; accumulate flow and you get volume. Geometrically that accumulation is the **area under a curve**, and the astonishing discovery — the Fundamental Theorem of Calculus — is that this area problem and the tangent problem are inverses of each other.

## 1. Area as accumulated rate

Travel at a constant 60 km/h for 2 hours and you cover 120 km. On a speed–time graph that is a rectangle of height 60 and width 2 — the **area** under the graph.

That is not a coincidence of the rectangular case. Whenever a rate is plotted against time, **the area under the graph is the accumulated total**, because area = height × width = rate × interval. The units confirm it: (km/h) × h = km.

When the rate varies, the region is no longer a rectangle, so approximate it with many thin ones. Divide $[a,b]$ into $n$ strips of width $\Delta x$ and sum:

$$\text{Area} \approx \sum f(x_i)\,\Delta x$$

Each strip is a small rectangle: its height is the function value, its width the interval. As the strips get thinner the approximation improves, and the **definite integral** is the limit:

$$\int_a^b f(x)\,dx = \lim_{\Delta x \to 0}\sum f(x_i)\,\Delta x$$

The notation records exactly this: $\int$ is an elongated S for "sum", $f(x)$ is the height, and $dx$ is the infinitesimal width. Reading the symbols as "sum of height × width" makes them meaningful rather than decorative.

```svg
<svg viewBox="0 0 400 170" role="img" aria-label="Rectangles approximating the area under a curve" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="140" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="140" x2="370" y2="140" stroke="#6b7a99" stroke-width="2"/>
  <g fill="#6366f1" fill-opacity="0.45" stroke="#6366f1">
    <rect x="70" y="118" width="38" height="22"/>
    <rect x="108" y="102" width="38" height="38"/>
    <rect x="146" y="86" width="38" height="54"/>
    <rect x="184" y="72" width="38" height="68"/>
    <rect x="222" y="60" width="38" height="80"/>
    <rect x="260" y="50" width="38" height="90"/>
  </g>
  <path d="M70 126 Q 200 92 300 44" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>
  <text x="200" y="163" font-size="11" fill="#9aa8c4" text-anchor="middle">thinner strips → the integral</text>
</svg>
```

## 2. Integration undoes differentiation

The **Fundamental Theorem of Calculus** links the two halves of the subject: differentiation and integration are inverse operations. So to integrate, reverse the power rule.

Differentiating multiplies by the power and lowers it; integrating therefore **raises the power and divides by the new one**:

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \qquad (n \ne -1)$$

Check it by differentiating back: $\dfrac{d}{dx}\left(\dfrac{x^3}{3}\right) = x^2$ ✓. **Every integral is self-checking this way**, which means you never need to be uncertain.

The **$+C$** is not a decoration. Since every constant differentiates to zero, infinitely many functions share a derivative: $x^2$, $x^2+7$ and $x^2-3$ all differentiate to $2x$. The indefinite integral therefore describes a *family* of curves, all vertical shifts of one another. Omitting $C$ claims you know which member, and you do not — unless the problem gives an extra condition (an initial value) that pins it down.

The exclusion $n \ne -1$ exists because $n+1$ would be zero, and division by zero is undefined. That case, $\int \tfrac1x dx = \ln|x| + C$, is exactly where the natural logarithm enters calculus.

```formula Key formulas
∫xⁿ dx = xⁿ⁺¹/(n+1) + C,  n ≠ −1
∫k dx = kx + C
Integration is the inverse of differentiation — check by differentiating back
+C because every constant differentiates to 0
∫(1/x) dx = ln|x| + C
```

## 3. Definite integrals: evaluating an area

A **definite** integral has limits and produces a number, not a family. Find any antiderivative $F$ and subtract:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

The constant $C$ cancels in the subtraction, which is why definite integrals need no $+C$.

$$\int_0^3 x^2\,dx = \left[\frac{x^3}{3}\right]_0^3 = 9 - 0 = 9$$

Two subtleties matter for interpretation:

- **Area below the axis counts as negative.** $\int_0^{2\pi}\sin x\,dx = 0$, because the positive and negative halves cancel exactly. If a problem asks for *total area* rather than the net integral, split at the crossing points and add the absolute values.
- **Order of limits matters:** $\int_b^a = -\int_a^b$. Swapping the limits reverses the sign.

In applied contexts the sign is meaningful rather than a nuisance: for a velocity that changes direction, the definite integral gives **displacement** (net change in position) while the total area gives **distance travelled**. That is precisely the displacement-versus-distance distinction from Physics F1, now computable for any velocity function.

> [!example] **Displacement versus distance**
>
> **Problem.** A particle has velocity $v = t - 3$ m/s for $0 \le t \le 5$. Find its displacement and the distance it travels.
>
> **Solution.** Displacement: $\int_0^5 (t-3)dt = \left[\tfrac{t^2}{2}-3t\right]_0^5 = 12.5 - 15 = -2.5$ m. The velocity changes sign at $t=3$, so for distance split there: $\left|\int_0^3\right| = |4.5-9| = 4.5$ and $\int_3^5 = (12.5-15)-(4.5-9) = 2$. Total distance $= 6.5$ m.
>
> *The integral gives net displacement; total distance needs the sign changes handled separately.*

## 4. What integration is actually used for

Any time you know a **rate** and want a **total**, integration is the tool.

| Rate known | Integral gives |
|---|---|
| velocity $v(t)$ | displacement |
| acceleration $a(t)$ | change in velocity |
| flow rate (L/s) | volume delivered |
| power (W) | energy used (J) |
| population growth rate | change in population |
| force over distance | work done |

The reverse chain in kinematics is worth seeing whole: integrate acceleration to get velocity, integrate again for displacement — the exact inverse of differentiating displacement twice to get acceleration.

*Example.* A tank fills at $r(t) = 4t$ litres per minute. How much enters during the first 3 minutes?

$$\int_0^3 4t\,dt = \left[2t^2\right]_0^3 = 18 \text{ litres}$$

Sanity-check it: the rate rises linearly from 0 to 12 L/min, averaging 6 L/min over 3 minutes, which gives 18 L ✓. For a linear rate the region is a triangle, so $\tfrac12 \times 3 \times 12 = 18$ confirms it geometrically as well.

Integration also recovers **areas and volumes** that no elementary formula covers — the area between two curves, or a volume of revolution — which is the subject of A1 Integration Techniques.

```formula Key formulas
∫ₐᵇ f(x)dx = F(b) − F(a), where F′ = f
∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)
Area below the axis is negative; ∫ᵦᵃ = −∫ₐᵇ
Definite integrals need no +C — it cancels in the subtraction
Integrate a rate to get the total accumulated
```

## What you should be able to do

- Interpret an integral as accumulated area
- Integrate simple powers
- Relate integration and differentiation

## Summary — the mental toolkit

1. The area under a rate–time graph is the accumulated total, because height × width = rate × interval.
2. The definite integral is the limit of a sum of thin rectangles — the notation says "sum of height × width".
3. Integration reverses differentiation: raise the power, divide by the new one.
4. The +C exists because every constant differentiates to zero; an initial condition pins it down.
5. A definite integral is F(b) − F(a), and C cancels.
6. Area below the axis is negative — net displacement versus total distance.
7. Any "rate known, total wanted" problem is an integration problem.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
