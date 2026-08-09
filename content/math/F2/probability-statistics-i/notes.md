# Probability & Statistics I

> [!intro] **Probability is the mathematics of what we do not know — and it is a proportion, not a new kind of number.** "One chance in six" is the fraction $\tfrac16$, and every rule that follows is a fact about counting outcomes. Statistics then summarises data we *do* have. Together they are the most practically used mathematics in existence: medicine, insurance, quality control, machine learning and every claim in a newspaper rests on them.

## 1. Probability as a proportion of outcomes

For outcomes that are **equally likely**,

$$P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$$

Rolling a fair die, $P(\text{even}) = \tfrac36 = \tfrac12$. The whole formula is a ratio — the F1 idea again.

Three consequences follow immediately, and they are your error-detectors:

- **$0 \le P \le 1$ always.** 0 is impossible, 1 is certain. A probability above 1 or below 0 is a bug in your working, not a result.
- **The probabilities of all possible outcomes sum to 1**, because every outcome is somewhere in the list.
- **Complement rule:** $P(\text{not } A) = 1 - P(A)$. This is often far easier than counting directly — "at least one" problems in particular are usually solved as $1 - P(\text{none})$.

The phrase **"equally likely" is doing real work.** It holds for a fair die and fails for a drawing pin, weather, or a biased coin. Where outcomes are not equally likely, probability must come from **experiment**: the *relative frequency* (successes ÷ trials), which approaches the true probability as trials increase. That distinction — theoretical versus experimental probability — is the heart of the topic.

```formula Key formulas
P(event) = favourable outcomes ÷ total outcomes (equally likely only)
0 ≤ P ≤ 1;  all outcomes sum to 1
P(not A) = 1 − P(A)
Experimental probability = successes ÷ trials
```

## 2. Combining events: and, or, and the sample space

For **two events at once**, list the possibilities. The **sample space** for two dice is a $6\times6$ grid of 36 equally likely pairs, and once drawn, most questions become counting.

- $P(\text{total} = 7) = \tfrac{6}{36} = \tfrac16$ — there are six pairs summing to 7.
- $P(\text{total} = 12) = \tfrac{1}{36}$ — only $(6,6)$.

That grid also kills the common intuition that all totals are equally likely: 7 is six times as likely as 12, because more pairs produce it.

**"Or" for mutually exclusive events — add.** If two events cannot happen together, $P(A \text{ or } B) = P(A) + P(B)$. Drawing a king or a queen: $\tfrac{4}{52} + \tfrac{4}{52} = \tfrac{8}{52}$.

**"And" for independent events — multiply.** If one event does not affect the other, $P(A \text{ and } B) = P(A)\times P(B)$. Two heads in a row: $\tfrac12 \times \tfrac12 = \tfrac14$.

The word **independent** must be checked, not assumed. Drawing two cards *without replacement* is not independent — after removing a king, only 3 kings remain among 51 cards, so $P = \tfrac{4}{52}\times\tfrac{3}{51}$. Replacement restores independence.

A caution worth internalising: **coins have no memory.** After five heads, the next toss is still $\tfrac12$. Believing otherwise is the gambler's fallacy, and it costs people real money.

> [!example] **Using the complement**
>
> **Problem.** Two fair dice are rolled. What is the probability of getting at least one six?
>
> **Solution.** Counting directly is fiddly; use the complement. $P(\text{no six on one die}) = \tfrac56$, so $P(\text{no six at all}) = \tfrac56\times\tfrac56 = \tfrac{25}{36}$. Therefore $P(\text{at least one six}) = 1 - \tfrac{25}{36} = \tfrac{11}{36}$.
>
> *"At least one" almost always means "1 minus none".*

## 3. Averages: which one, and why it matters

Three averages, each answering a different question:

- **Mean** $= \dfrac{\sum x}{n}$ — the balance point. Uses every value, so it is the most informative and the most vulnerable to outliers.
- **Median** — the middle value when ordered. **Resistant** to extremes.
- **Mode** — the most frequent value. The only average available for categorical data.

For $3, 4, 4, 5, 24$: mean 8, median 4, mode 4. The single value 24 has dragged the mean above four of the five data points. That is why **"average income" reported as a mean can describe nobody**, and why the choice of average is itself a claim.

**For frequency tables**, the mean is a weighted calculation:

$$\bar{x} = \frac{\sum (x \times f)}{\sum f}$$

Multiply each value by its frequency, sum, then divide by the *total frequency* — not by the number of distinct values. Dividing by the wrong denominator is the standard error here.

## 4. Spread: why the average alone is never enough

Two data sets can share a mean and be completely different:

- $\{49, 50, 51\}$ — mean 50, range 2
- $\{0, 50, 100\}$ — mean 50, range 100

Reporting only "the mean is 50" hides everything that matters. Spread measures how far the data scatters.

- **Range** $=$ largest $-$ smallest. Simple, but determined entirely by the two most extreme values, so one outlier destroys it.
- **Interquartile range (IQR)** $= Q_3 - Q_1$, the spread of the middle 50%. It ignores the tails, so it is **resistant to outliers** — the same virtue the median has.

To find the quartiles, order the data and split it into four equal parts: $Q_1$ is the median of the lower half, $Q_2$ the median, $Q_3$ the median of the upper half.

The pairing to remember is: **median with IQR** (both resistant), **mean with standard deviation** (both use every value — you meet standard deviation properly in I1 Statistics II). Mixing a resistant centre with a non-resistant spread gives a misleading summary.

> [!example] **Same mean, different story**
>
> **Problem.** Class A scores 49, 50, 51; class B scores 0, 50, 100. Compare them.
>
> **Solution.** Both have mean 50, so on that measure they are identical. But class A has range 2 and class B range 100. Class A is consistent; class B has a student who scored nothing and one who scored full marks. Any report giving only the mean conceals the entire difference.
>
> *Always quote a measure of spread alongside an average.*

```formula Key formulas
P = favourable ÷ total (equally likely outcomes)
0 ≤ P ≤ 1;  P(not A) = 1 − P(A)
Mutually exclusive: P(A or B) = P(A) + P(B)
Independent: P(A and B) = P(A) × P(B)
Mean = Σx/n;  from a table, mean = Σ(x·f)/Σf
Range = max − min;  IQR = Q₃ − Q₁
```

## What you should be able to do

- Compute simple probabilities
- Find mean, median and mode
- Describe spread with range

## Summary — the mental toolkit

1. Probability is a proportion of equally likely outcomes, always between 0 and 1.
2. The complement rule turns hard "at least one" questions into easy "none" questions.
3. Draw the sample space for two events — most questions then reduce to counting.
4. Mutually exclusive events add; independent events multiply — and independence must be checked.
5. Without replacement destroys independence; coins and dice have no memory.
6. Mean, median and mode answer different questions; outliers move the mean and not the median.
7. An average without a measure of spread is an incomplete — often misleading — summary.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
