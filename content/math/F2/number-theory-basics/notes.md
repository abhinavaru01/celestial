# Integer Number Theory Basics

> [!intro] Divisibility, primes, factors, HCF and LCM — foundations that also serve computer science.

## Primes and factorisation

Every whole number breaks uniquely into a product of primes — its "atoms". This factorisation is the tool behind HCF, LCM and much of cryptography and algorithms.

## HCF and LCM

The highest common factor is the largest number dividing two values; the lowest common multiple is the smallest number both divide into. Prime factorisation makes both quick to compute.

```formula Key formulas
HCF = product of common prime factors
LCM = product of all primes to highest power
HCF(a,b) × LCM(a,b) = a × b
```

> [!example] **Worked example**
> **Problem.** Find HCF and LCM of 12 and 18.
> >
> > **Solution.** 12 = 2²·3, 18 = 2·3². HCF = 2·3 = 6. LCM = 2²·3² = 36. Check: 6×36 = 216 = 12×18. ✓

## What you should be able to do

- Test divisibility and identify primes
- Find HCF and LCM
- Use prime factorisation

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
