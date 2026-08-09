# Geometry II: Similarity, Pythagoras & Mensuration

> [!intro] **Similarity is ratio applied to shapes** — the F1 idea, one dimension up. Two figures are similar when one is a scaled copy of the other, and that single notion explains maps, scale models, shadows, magnification, and why a triangle's side ratios depend only on its angles (which is exactly what makes trigonometry possible in I1). Pythagoras then gives you the one length relationship every right triangle obeys.

## 1. Similar versus congruent

Two figures are:

- **Congruent** — same shape *and* same size. One can be placed exactly on the other.
- **Similar** — same shape, possibly different size. One is a scaled copy of the other.

For similar figures, two conditions hold together:

1. **Corresponding angles are equal.**
2. **Corresponding sides are in a constant ratio** — the **scale factor** $k$.

For triangles, either condition alone is enough (which is not true for other polygons): equal angles force proportional sides, and proportional sides force equal angles. Hence the tests **AA** (two angles equal — the third follows automatically), **SSS similarity** (all three side ratios equal) and **SAS similarity** (two ratios equal with the included angles equal).

This is why **AAA proved similarity but not congruence** back in F1 — it fixes shape and leaves size free. A rectangle counterexample shows why triangles are special: all rectangles have four right angles, yet a $1\times2$ and a $1\times5$ rectangle are not similar.

## 2. Scale factor and what it does to length, area and volume

If the scale factor is $k$, then:

$$\text{lengths} \times k, \qquad \text{areas} \times k^2, \qquad \text{volumes} \times k^3$$

The reason is dimensional: area is a product of two lengths, volume of three. Double every length and the area quadruples, the volume grows eightfold.

This is one of the most under-used facts in school mathematics, and one of the most heavily tested:

- A model car at $1:20$ scale has $\tfrac{1}{400}$ of the surface area and $\tfrac{1}{8000}$ of the volume — so it needs far less paint and far less material than intuition suggests.
- If two similar triangles have areas in the ratio $9:25$, the **length** ratio is $3:5$ — take the square root.

Watch the direction of the operation: going from lengths to areas you *square*; from areas back to lengths you *square-root*.

```svg
<svg viewBox="0 0 400 150" role="img" aria-label="Two similar triangles with scale factor 2" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,120 100,120 40,80" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>
  <text x="60" y="138" font-size="11" fill="#9aa8c4">3</text>
  <text x="24" y="102" font-size="11" fill="#9aa8c4">2</text>
  <polygon points="180,120 300,120 180,40" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <text x="234" y="138" font-size="11" fill="#9aa8c4">6</text>
  <text x="164" y="84" font-size="11" fill="#9aa8c4">4</text>
  <text x="200" y="30" font-size="12" fill="#e6ecff">k = 2 → area × 4</text>
</svg>
```

```formula Key formulas
Scale factor k:  lengths × k,  areas × k²,  volumes × k³
Area ratio a²:b² ⇒ length ratio a:b (take the square root)
Similar triangle tests: AA, SSS (ratios), SAS (ratio–angle–ratio)
```

## 3. Pythagoras: the right-triangle law

In a right-angled triangle with legs $a$, $b$ and **hypotenuse** $c$ (the side opposite the right angle, always the longest):

$$a^2 + b^2 = c^2$$

Identifying the hypotenuse correctly is most of the work. It is *not* "the bottom" or "the slanted one" — it is the side facing the right angle.

Use it in two directions:

- **Finding the hypotenuse:** add the squares, then square-root. Legs 3 and 4 give $c = \sqrt{9+16} = 5$.
- **Finding a leg:** *subtract*. With $c = 13$ and $a = 5$: $b = \sqrt{169 - 25} = 12$. Adding here is the single commonest Pythagoras error, and it is caught instantly by noticing that a leg came out longer than the hypotenuse.

The **converse** is equally useful and often forgotten: if $a^2 + b^2 = c^2$ then the triangle *is* right-angled. That is how you prove a corner is square — the 3-4-5 method builders use.

Worth memorising, because they recur constantly: the triples **3-4-5**, **5-12-13**, **8-15-17**, **7-24-25**, and every multiple of them (6-8-10, 9-12-15, …).

> [!example] **Both directions, plus a sanity check**
>
> **Problem.** A ladder 13 m long leans against a wall with its foot 5 m from the base. How high does it reach?
>
> **Solution.** The ladder is the hypotenuse, so subtract: $h = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$ m.
>
> *The answer must be less than 13 — the hypotenuse is always the longest side. That check catches the add/subtract error every time.*

## 4. Mensuration: area, surface area and volume

Areas and volumes are worth understanding rather than memorising, because each formula comes from a simple idea.

| Shape | Formula | Where it comes from |
|---|---|---|
| Rectangle | $A = lw$ | rows × columns of unit squares |
| Triangle | $A = \tfrac12 bh$ | half a rectangle of the same base and height |
| Parallelogram | $A = bh$ | cut a triangle off one end, slide it to the other |
| Trapezium | $A = \tfrac12(a+b)h$ | average of the parallel sides × height |
| Circle | $A = \pi r^2$, $C = 2\pi r$ | $\pi$ is defined as circumference ÷ diameter |
| Prism (any) | $V = (\text{cross-section area})\times \text{length}$ | stack identical slices |
| Cylinder | $V = \pi r^2 h$ | a prism with a circular cross-section |
| Cone / pyramid | $V = \tfrac13(\text{base area})h$ | exactly one third of the enclosing prism |
| Sphere | $V = \tfrac43\pi r^3$, $A = 4\pi r^2$ | — |

Two things matter more than the formulas themselves:

**Height must be perpendicular to the base.** In a triangle or parallelogram, the slanted side is not the height. Using it is the most frequent mensuration error, and Pythagoras is often how you find the true height.

**Units follow dimensions.** Lengths in cm, areas in cm², volumes in cm³. Converting is therefore not linear: $1\text{ m}^2 = 10\,000\text{ cm}^2$ (not 100), and $1\text{ m}^3 = 1\,000\,000\text{ cm}^3$. This is the scale-factor rule again — $k = 100$, so $k^2$ and $k^3$.

> [!example] **Composite shape with a hidden height**
>
> **Problem.** A parallelogram has base 10 cm and slant side 6 cm, with the slant making the perpendicular height 5 cm. Find its area, and the area of a similar parallelogram twice as long.
>
> **Solution.** Area $= bh = 10 \times 5 = 50$ cm² — the 6 cm slant side is not used. The similar figure has $k = 2$, so its area is $50 \times k^2 = 200$ cm².
>
> *Perpendicular height only; and areas scale by k², never k.*

```formula Key formulas
Similar: equal angles AND sides in ratio k (for triangles either implies the other)
Lengths × k, areas × k², volumes × k³
Pythagoras: a² + b² = c², c the hypotenuse (opposite the right angle)
Converse: if a² + b² = c², the triangle is right-angled
Triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples
Triangle A = ½bh;  circle A = πr², C = 2πr;  prism V = cross-section × length;  cone/pyramid V = ⅓(base)h
1 m² = 10 000 cm²;  1 m³ = 1 000 000 cm³
```

## What you should be able to do

- Use similarity ratios to find missing lengths
- Apply the Pythagorean theorem
- Compute areas and volumes of standard shapes

## Summary — the mental toolkit

1. Congruent = same shape and size; similar = same shape, scaled by factor k.
2. For triangles, AA is enough for similarity — equal angles force proportional sides.
3. Lengths scale by k, areas by k², volumes by k³ — and reverse with a square or cube root.
4. Pythagoras: a² + b² = c², with c the side opposite the right angle.
5. Add to find the hypotenuse, subtract to find a leg; the hypotenuse is always longest.
6. The converse of Pythagoras is how you prove an angle is right.
7. Area and volume formulas follow from simple constructions; height must always be perpendicular.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
