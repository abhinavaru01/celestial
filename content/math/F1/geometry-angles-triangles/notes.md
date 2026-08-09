# Geometry I: Angles, Triangles & Congruence

> [!intro] **Geometry is where mathematics learns to argue.** Up to now you have computed; here you begin to *justify* — every angle you find comes with a reason, and every reason is a named fact. That habit ("claim, then reason") is the same habit that later powers formal proof, physics derivations and debugging code. Angles and triangles are the training ground.

## 1. Angles: turning, not size on the page

An angle measures **turn between two directions**, not the length of the arms drawn. Two angles with short arms and long arms can be identical. A full turn is $360°$, a straight line $180°$, a right angle $90°$.

The names carry information: **acute** ($<90°$), **right** ($=90°$), **obtuse** (between $90°$ and $180°$), **straight** ($180°$), **reflex** ($>180°$).

Four facts do most of the work, and each has a one-line reason:

- **Angles on a straight line sum to $180°$** — half a full turn.
- **Angles around a point sum to $360°$** — one full turn.
- **Vertically opposite angles are equal** — each is $180°$ minus the same adjacent angle.
- **Complementary** angles sum to $90°$; **supplementary** angles sum to $180°$.

The third one is worth deriving once yourself: if two lines cross making angles $a$ and $b$ adjacent, then $a + b = 180°$ on the line, and $b + c = 180°$ on the other line, so $a = c$. That is a proof — two facts and one deduction.

## 2. Parallel lines and the transversal

When a **transversal** cuts two parallel lines, eight angles appear but only two distinct values. Learn the three relationships by their shapes:

- **Corresponding** angles (F-shape) are **equal**.
- **Alternate** angles (Z-shape) are **equal**.
- **Co-interior / allied** angles (C- or U-shape) are **supplementary** — they sum to $180°$.

The essential caution: these hold **only if the lines are genuinely parallel.** In an exam figure, parallelism is given by arrow marks or stated in words — never assumed because it looks that way.

Used in reverse, the same facts *prove* lines are parallel: if a pair of alternate angles is equal, the lines must be parallel. That reversibility (a fact and its converse) is your first taste of the logical structure that dominates I1 geometry.

```svg
<svg viewBox="0 0 380 170" role="img" aria-label="Two parallel lines cut by a transversal showing corresponding angles" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="55" x2="350" y2="55" stroke="#6b7a99" stroke-width="2"/>
  <line x1="30" y1="120" x2="350" y2="120" stroke="#6b7a99" stroke-width="2"/>
  <line x1="90" y1="20" x2="290" y2="155" stroke="#6366f1" stroke-width="2"/>
  <polygon points="180,50 190,55 180,60" fill="#9aa8c4"/>
  <polygon points="180,115 190,120 180,125" fill="#9aa8c4"/>
  <text x="152" y="46" font-size="13" fill="#6ee7a8">a</text>
  <text x="196" y="112" font-size="13" fill="#6ee7a8">a</text>
  <text x="200" y="165" font-size="11" fill="#9aa8c4" text-anchor="middle">corresponding angles (F-shape) are equal</text>
</svg>
```

## 3. The angle sum of a triangle — and why it is 180°

**Every triangle's angles sum to $180°$.** Do not merely accept it; the proof takes one line and uses the parallel facts above.

Draw a line through one vertex parallel to the opposite side. The two outer angles at that vertex equal the two base angles (alternate angles, Z-shape), and together with the vertex angle they form a straight line. Hence the three triangle angles sum to $180°$.

Two immediate consequences:

- **Exterior angle theorem:** an exterior angle equals the sum of the two opposite interior angles. (Because both equal $180°$ minus the adjacent interior angle.) This shortcut saves a step in countless problems.
- A triangle can have **at most one** angle of $90°$ or more — two would already reach $180°$ with nothing left.

Triangles classify two ways, and the classifications interact. By sides: **equilateral** (all equal, so all angles $60°$), **isosceles** (two equal sides, and the angles opposite them are equal), **scalene** (all different). By angles: **acute**, **right**, **obtuse**. The isosceles fact — *equal sides face equal angles* — is the one that appears most often in problems.

```formula Key formulas
Angles on a straight line: 180°;  around a point: 360°
Vertically opposite angles are equal
Parallel lines: corresponding equal, alternate equal, co-interior sum to 180°
Triangle angle sum = 180°
Exterior angle = sum of the two opposite interior angles
Isosceles: equal sides ⇔ equal opposite angles
```

## 4. Congruence: when are two triangles the same?

Two figures are **congruent** if one can be moved onto the other exactly — same shape, same size. For triangles you never need to check all six measurements (3 sides, 3 angles); four minimal sets suffice:

| Rule | Means | Why it works |
|---|---|---|
| **SSS** | three sides equal | three side lengths lock the shape rigidly |
| **SAS** | two sides and the angle *between* them | the included angle fixes the third side |
| **ASA** (or AAS) | two angles and a corresponding side | third angle follows from the 180° sum |
| **RHS** | right angle, hypotenuse, one side | Pythagoras fixes the remaining side |

Two near-misses matter as much as the rules:

- **AAA is not congruence.** Equal angles give the same *shape* but any size — that is **similarity**, the subject of F2 Geometry II, and it is what makes scale drawings work.
- **SSA is not reliable.** Two sides and a *non-included* angle can produce two genuinely different triangles (the "ambiguous case"). The angle must sit between the two sides.

Congruence matters because it is how you prove things *equal without measuring them* — the first genuinely deductive tool in your kit.

> [!example] **Reasoned angle chase**
>
> **Problem.** In triangle ABC, angle A = 50° and angle B = 60°. The side BC is extended to D. Find angle ACD.
>
> **Solution.** Angle C $= 180° - 50° - 60° = 70°$ (angle sum of a triangle). Angle ACD is exterior at C, so it equals $180° - 70° = 110°$ (angles on a straight line). Check with the exterior-angle theorem: $50° + 60° = 110°$. ✓
>
> *Two routes agreeing is the geometric version of substituting back.*

## 5. Writing a reason for every step

In geometry, an answer without a reason is worth very little — and, more importantly, a reason is what stops you from guessing wrong. Adopt the two-column habit:

| Statement | Reason |
|---|---|
| $\angle ABD = 65°$ | alternate angles, $AB \parallel CD$ |
| $\angle BDC = 65°$ | vertically opposite angles |
| $\angle DBC = 50°$ | angle sum of triangle $BDC$ |

Three rules for the reasoning itself:

1. **Never assume from the picture.** Diagrams are not to scale; lines that look equal or parallel may not be. Use only what is marked or stated.
2. **Mark the diagram as you go** — tick marks for equal sides, arcs for equal angles. Half of geometry is bookkeeping.
3. **Name the fact you used**, in the standard words. "Because it looks right" is not a reason; "co-interior angles, $AB \parallel CD$" is.

```formula Key formulas
Straight line 180°;  point 360°;  triangle 180°;  quadrilateral 360°
Vertically opposite angles equal
Parallel: corresponding =, alternate =, co-interior sum 180°
Exterior angle = sum of opposite interior angles
Congruence: SSS, SAS, ASA/AAS, RHS  (NOT AAA, NOT SSA)
Equilateral ⇒ every angle 60°;  isosceles ⇒ base angles equal
```

## What you should be able to do

- Use angle relationships (on a line, around a point, in a triangle)
- Classify triangles and use the angle-sum property
- Recognise congruent triangles by SSS, SAS, ASA

## Summary — the mental toolkit

1. An angle measures turn; arm length on the page is irrelevant.
2. Line 180°, point 360°, vertically opposite equal — with a reason for each.
3. Parallel lines give corresponding and alternate angles equal, co-interior supplementary — but only when parallelism is given.
4. Triangle angles sum to 180°, provable in one line from the parallel facts.
5. Exterior angle = sum of the two opposite interior angles.
6. Congruence: SSS, SAS, ASA/AAS, RHS. AAA gives similarity, not congruence; SSA is ambiguous.
7. Every step needs a named reason, and nothing may be assumed from the picture.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
