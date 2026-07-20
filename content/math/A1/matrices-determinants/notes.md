# Matrices & Determinants

> [!intro] Matrix operations, determinants, and solving linear systems — with links to CS graphics and data.

## Matrices transform and store

A matrix packages numbers in a grid; matrix multiplication composes linear transformations and is how graphics and data pipelines move information.

## Determinants

The determinant tells whether a matrix is invertible (nonzero) and scales area/volume under the transformation. It is the gatekeeper for unique solutions of linear systems.

```formula Key formulas
2×2 determinant: |a b; c d| = ad − bc
Matrix product: row × column
det = 0 ⇒ no inverse (singular)
AB ≠ BA in general
```

> [!example] **Worked example**
> **Problem.** Find the determinant of [[3, 2],[1, 4]] and say if it is invertible.
> >
> > **Solution.** det = 3·4 − 2·1 = 10 ≠ 0, so the matrix is invertible.

## What you should be able to do

- Add and multiply matrices
- Compute determinants and inverses (2×2, 3×3)
- Solve systems with matrices

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
