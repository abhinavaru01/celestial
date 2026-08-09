# Combinatorics & Probability II

> [!intro] **Counting sounds trivial until the things being counted are arrangements.** How many ways can 5 people sit in a row? How many 4-digit PINs have no repeated digit? Combinatorics answers these systematically, and it matters because probability is counting: once you can count the favourable outcomes and the total, every probability question becomes arithmetic.

## 1. The multiplication principle

Everything in this topic grows from one rule: **if a task has independent stages, multiply the number of choices at each stage.**

A meal with 3 starters, 4 mains and 2 desserts allows $3 \times 4 \times 2 = 24$ combinations. A 4-digit PIN with digits allowed to repeat allows $10^4 = 10\,000$.

The word **independent** is doing the work. If the choices interact, the counts change at each stage:

- 4-digit PIN, digits **may repeat**: $10\times10\times10\times10 = 10\,000$.
- 4-digit PIN, digits **may not repeat**: $10\times9\times8\times7 = 5040$ — each choice removes one option.

The complementary rule is just as useful: **if the stages are alternatives rather than sequential steps, add.** "Choose a starter *or* a dessert" gives $3 + 2 = 5$. The test is whether the word joining the stages is *and* (multiply) or *or* (add).

Factorial notation compresses the descending product: $n! = n(n-1)(n-2)\cdots1$, so $5! = 120$. By convention $0! = 1$ — there is exactly one way to arrange nothing, and the definition keeps the formulas below consistent.

```formula Key formulas
Multiplication principle: independent stages multiply
Alternatives add ("or"); sequential steps multiply ("and")
n! = n(n−1)…1;  0! = 1
With repetition allowed: nʳ arrangements
```

## 2. Permutations and combinations: does order matter?

This is the single decision the whole topic turns on.

**Permutation — order matters.** Arrangements of $r$ objects chosen from $n$:

$$^nP_r = \frac{n!}{(n-r)!}$$

Choosing a president and a vice-president from 10 people: $^{10}P_2 = 90$, because (Asha, Ben) differs from (Ben, Asha).

**Combination — order does not matter.** Selections of $r$ from $n$:

$$^nC_r = \frac{n!}{r!\,(n-r)!}$$

Choosing a 2-person committee from 10: $^{10}C_2 = 45$ — exactly half of 90, because each pair was counted twice. In general $^nC_r = \dfrac{^nP_r}{r!}$: divide out the $r!$ orderings you do not want to distinguish.

**Deciding which to use.** Ask: *would swapping two of the chosen items give a genuinely different outcome?*

| Situation | Type | Why |
|---|---|---|
| Race positions | permutation | 1st and 2nd are different |
| Committee members | combination | no roles, so order is irrelevant |
| PIN or password | permutation | 1234 ≠ 4321 |
| Lottery numbers | combination | drawn order is irrelevant |
| Seating in a row | permutation | positions differ |

A useful symmetry: $^nC_r = {}^nC_{n-r}$. Choosing 8 from 10 to include is the same as choosing 2 to leave out — and computing $^{10}C_2$ is much less work.

> [!example] **The same numbers, two answers**
>
> **Problem.** From 10 people, how many ways to pick (a) a president and vice-president, (b) a committee of 2?
>
> **Solution.** (a) Order matters, so $^{10}P_2 = 10\times9 = 90$. (b) Order does not, so $^{10}C_2 = \dfrac{90}{2!} = 45$.
>
> *Same selection, halved by the 2! orderings that the committee does not distinguish.*

## 3. Conditional probability

$P(A \mid B)$ is the probability of $A$ **given that $B$ has happened**. Knowing $B$ occurred shrinks the sample space to $B$ alone:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

Rearranged, this gives the general multiplication rule:

$$P(A \cap B) = P(B)\,P(A\mid B)$$

which reduces to the familiar $P(A)P(B)$ **only when the events are independent**, i.e. when $P(A\mid B) = P(A)$ — knowing $B$ tells you nothing about $A$.

*Example.* Two cards without replacement. $P(\text{both kings}) = \tfrac{4}{52}\times\tfrac{3}{51}$, because after one king is removed the conditional probability of a second changes.

**Tree diagrams** are the reliable tool: branches from each node carry conditional probabilities, each set summing to 1; multiply *along* a path, add *across* paths that satisfy the condition.

The classic trap is **confusing $P(A\mid B)$ with $P(B\mid A)$.** They are usually very different. $P(\text{four legs} \mid \text{dog})$ is about 1; $P(\text{dog} \mid \text{four legs})$ is small. In medical testing this is the base-rate fallacy: a test that is 99% accurate for a disease affecting 1 in 10 000 still produces mostly false positives, because the healthy group is so much larger. Reversing a conditional probability without recomputing is one of the most consequential errors in applied statistics.

```formula Key formulas
P(A|B) = P(A ∩ B)/P(B)
P(A ∩ B) = P(B)·P(A|B)  — general multiplication rule
Independent ⇔ P(A|B) = P(A) ⇔ P(A ∩ B) = P(A)P(B)
Tree diagrams: multiply along branches, add across paths
P(A|B) ≠ P(B|A)
```

> [!example] **Conditional, from a tree**
>
> **Problem.** A bag has 3 red and 2 blue balls. Two are drawn without replacement. Find P(both red).
>
> **Solution.** First draw: $P(\text{red}) = \tfrac35$. Given a red was taken, 2 reds remain of 4 balls, so $P(\text{red}\mid\text{red}) = \tfrac24$. Multiplying along the branch: $\tfrac35 \times \tfrac24 = \tfrac{6}{20} = \tfrac{3}{10}$.
>
> *Without replacement, the second probability is conditional — both the numerator and the denominator change.*

## 4. Putting counting and probability together

With equally likely outcomes, probability is a ratio of two counts:

$$P = \frac{\text{favourable arrangements}}{\text{total arrangements}}$$

so combinatorics supplies both numbers.

*Lottery.* Choosing 6 numbers from 49, order irrelevant: $^{49}C_6 = 13\,983\,816$. One ticket therefore wins with probability $\tfrac{1}{13\,983\,816}$ — about 1 in 14 million, which is the honest way to read "you could be next".

*Committee with a constraint.* From 5 men and 4 women, how many 3-person committees contain exactly 2 women? Choose the women, then the man: $^4C_2 \times {}^5C_1 = 6 \times 5 = 30$. **Choose from each group separately, then multiply** — the multiplication principle again.

*Birthday-style problems* show the power of the complement. The probability that 3 people all have different birthdays is $\tfrac{365}{365}\times\tfrac{364}{365}\times\tfrac{363}{365}$, so the probability that at least two share is 1 minus that. This is why the answer for 23 people exceeds a half — a result that feels wrong until you notice you are counting *pairs*, of which there are 253.

The habit to build: **decide order-matters-or-not first, count the total, count the favourable, then divide** — and sanity-check that the result lies between 0 and 1.

```formula Key formulas
Multiplication principle for independent stages; add for alternatives
ⁿPᵣ = n!/(n−r)!  (order matters)
ⁿCᵣ = n!/(r!(n−r)!)  (order does not) = ⁿPᵣ/r!
ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎
P(A|B) = P(A ∩ B)/P(B);  P(A ∩ B) = P(B)P(A|B)
P = favourable count ÷ total count
```

## What you should be able to do

- Count with permutations and combinations
- Use the multiplication principle
- Compute conditional probability

## Summary — the mental toolkit

1. Everything follows from the multiplication principle: independent stages multiply, alternatives add.
2. Repetition allowed gives nʳ; repetition forbidden gives a descending product.
3. Permutations count arrangements (order matters); combinations count selections (it does not).
4. ⁿCᵣ = ⁿPᵣ/r!, because each selection was counted r! times.
5. Decide "would swapping two chosen items change the outcome?" before choosing a formula.
6. Conditional probability shrinks the sample space; without replacement makes events dependent.
7. P(A|B) and P(B|A) are different — reversing them is the base-rate fallacy.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
