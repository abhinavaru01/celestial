# Geometry III: Circles & Formal Proof

> [!intro] **This is the topic where mathematics stops being calculation and becomes argument.** A proof is a chain of statements, each justified by something already established, ending in a conclusion that cannot be doubted. Circle theorems are the training ground — rich enough to be interesting, structured enough that every step has a name. The habit you build here is the same one that makes a correct program, a valid experiment, or a sound argument of any kind.

## 1. What a proof is, and what it is not

A **proof** establishes that a statement is true for **every** case, by deduction from agreed facts. It is not:

- **Measurement.** Measuring five triangles and finding $180°$ each time is *evidence*, not proof. The next one might differ, and diagrams are not to scale.
- **A worked example.** Showing it holds for one circle proves nothing about the others.
- **Assertion.** "It is obvious from the diagram" is where wrong answers live.

The structure is always the same: **statement → reason**, repeated, where each reason is a definition, a previously proved theorem, or a given fact.

A single **counterexample** disproves a general claim outright. "All primes are odd" dies on the number 2 — one case is enough to destroy a universal statement, though no number of cases can establish one.

Two related ideas you must keep separate:

- **Converse** — swap the hypothesis and conclusion. "If a triangle is equilateral then its angles are equal" has converse "if the angles are equal then it is equilateral". Here both happen to be true, but **a converse is not automatically true**: "if it is a square, it is a rectangle" is true; its converse is false.
- **Contradiction** — assume the opposite, derive an impossibility, and conclude the original must hold.

## 2. The circle vocabulary

Precision of language is precision of thought, so fix the terms first.

| Term | Meaning |
|---|---|
| **Radius** | centre to any point on the circle |
| **Chord** | a segment joining two points on the circle |
| **Diameter** | a chord through the centre (the longest chord) |
| **Arc** | part of the circumference (major = longer, minor = shorter) |
| **Sector** | region between two radii and an arc (a "pizza slice") |
| **Segment** | region between a chord and an arc |
| **Tangent** | a line touching the circle at exactly one point |
| **Cyclic quadrilateral** | a quadrilateral with all four vertices on the circle |

Two distinctions cause most confusion: **sector vs segment** (a sector is bounded by two radii; a segment by a chord), and **subtended at the centre vs at the circumference** — an arc "subtends" an angle wherever the two lines from its endpoints meet, and *which* of those you are looking at determines the theorem that applies.

## 3. The circle theorems

Seven results do the work. Learn the standard name of each — the name *is* the reason you quote in a proof.

1. **Angle at the centre is twice the angle at the circumference** (subtended by the same arc). The parent theorem — the next two are corollaries.
2. **Angles in the same segment are equal.** All angles subtended by the same arc at the circumference are equal (each is half the same central angle).
3. **Angle in a semicircle is $90°$.** A diameter subtends a straight angle ($180°$) at the centre, so half of it is $90°$.
4. **Opposite angles of a cyclic quadrilateral sum to $180°$.**
5. **Tangent is perpendicular to the radius** at the point of contact.
6. **Two tangents from an external point are equal in length** (and the line to the centre bisects the angle between them).
7. **Alternate segment theorem:** the angle between a tangent and a chord equals the angle in the alternate segment.

Notice how 3 follows from 1 in one line. **Deriving rather than memorising** is the point of this topic: theorem 2 also follows from 1, since two angles at the circumference on the same arc are each half of the same central angle, hence equal.

Several have useful **converses**: if opposite angles of a quadrilateral sum to $180°$, it *is* cyclic — which is how you prove four points lie on a circle.

```svg
<svg viewBox="0 0 400 200" role="img" aria-label="Circle showing angle at centre twice angle at circumference" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="105" r="80" fill="none" stroke="#6b7a99" stroke-width="2"/>
  <circle cx="200" cy="105" r="3" fill="#e6ecff"/>
  <text x="206" y="102" font-size="11" fill="#9aa8c4">O</text>
  <line x1="200" y1="105" x2="137" y2="154" stroke="#6366f1" stroke-width="2"/>
  <line x1="200" y1="105" x2="263" y2="154" stroke="#6366f1" stroke-width="2"/>
  <line x1="200" y1="25" x2="137" y2="154" stroke="#6ee7a8" stroke-width="2"/>
  <line x1="200" y1="25" x2="263" y2="154" stroke="#6ee7a8" stroke-width="2"/>
  <text x="192" y="132" font-size="12" fill="#6366f1">2θ</text>
  <text x="193" y="48" font-size="12" fill="#6ee7a8">θ</text>
  <text x="200" y="192" font-size="11" fill="#9aa8c4" text-anchor="middle">same arc: the centre angle is twice the circumference angle</text>
</svg>
```

```formula Key formulas
Angle at centre = 2 × angle at circumference (same arc)
Angles in the same segment are equal
Angle in a semicircle = 90°
Cyclic quadrilateral: opposite angles sum to 180°
Tangent ⊥ radius at the point of contact
Tangents from an external point are equal
Alternate segment: tangent–chord angle = angle in the alternate segment
```

## 4. Writing a proof that earns full marks

Set the work out in two columns — statement and reason — and quote the theorem by name.

*Prove that the angle in a semicircle is a right angle.*

| Statement | Reason |
|---|---|
| $AB$ is a diameter, $C$ on the circle | given |
| $\angle AOB = 180°$ | $AOB$ is a straight line through the centre |
| $\angle ACB = \tfrac12 \angle AOB$ | angle at the centre is twice the angle at the circumference |
| $\angle ACB = 90°$ | arithmetic |

Four lines, each justified, and the result holds for *every* such circle — that is what a measured example could never give you.

Three rules for writing proofs:

1. **Never assume from the diagram.** Lines that look equal, parallel or concurrent may not be. Use only what is given, marked, or already proved.
2. **Quote the theorem by its standard name.** "Angles in the same segment" is a reason; "because they look the same" is not.
3. **Mark the diagram as you go** — equal angles with matching arcs, equal sides with ticks. The figure becomes your working, and the next deduction usually becomes visible.

When stuck, work **backwards** from what you must prove: ask what would be sufficient, and which theorem produces that kind of conclusion. Angles equal → same segment, or isosceles triangle. A right angle → semicircle, or tangent–radius.

> [!example] **A two-step angle proof**
>
> **Problem.** A, B, C, D lie on a circle in that order. $\angle ABC = 85°$. Find $\angle ADC$, with reasons.
>
> **Solution.** $ABCD$ is a cyclic quadrilateral, since all four vertices lie on the circle. Opposite angles of a cyclic quadrilateral sum to $180°$, so $\angle ADC = 180° - 85° = 95°$.
>
> *Name the configuration first (cyclic quadrilateral), and the applicable theorem follows immediately.*

```formula Key formulas
Proof = statement + reason, repeated, from agreed facts
One counterexample disproves a general claim; no number of examples proves one
A converse is a separate claim and needs its own proof
Centre angle = 2 × circumference angle;  semicircle ⇒ 90°
Cyclic quadrilateral: opposite angles sum to 180° (and the converse proves concyclicity)
Tangent ⊥ radius;  tangents from a point are equal
```

## What you should be able to do

- Apply circle theorems (angles, tangents, chords)
- Construct a deductive proof
- Justify each step with a reason

## Summary — the mental toolkit

1. A proof establishes truth for every case; measurement and examples cannot.
2. Each line is a statement with a named reason — a definition, a given, or a proved theorem.
3. One counterexample destroys a universal claim.
4. A converse is a different statement and may be false even when the original is true.
5. The central-angle theorem is the parent; the semicircle and same-segment results follow from it.
6. Cyclic quadrilaterals, tangent–radius perpendicularity and equal tangents complete the toolkit.
7. Never assume from the diagram; mark it as you deduce, and work backwards when stuck.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
