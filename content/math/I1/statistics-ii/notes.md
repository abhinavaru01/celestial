# Statistics II

> [!intro] **Statistics II is where you learn to distrust a number properly.** An average alone is nearly useless; what matters is how the data is *spread*, whether a comparison is fair, and whether the sample can support the claim being made. These are the tools that let you read a medical study, a poll or a performance report without being led by whoever drew the chart.

## 1. Grouped data: what you gain and what you lose

Large data sets are usually presented in **class intervals** (0–10, 10–20, …). Grouping makes the shape visible but **loses the individual values**, so every statistic computed from grouped data is an *estimate*.

To estimate the mean, assume every value sits at its class **midpoint**:

$$\bar{x} \approx \frac{\sum f x_m}{\sum f}$$

where $x_m$ is the midpoint and $f$ the frequency. For the interval 10–20 the midpoint is 15.

Two structural points matter:

- **The modal class** is the interval with the highest frequency — but only if the classes are of *equal width*. With unequal widths you must compare frequency *density* (frequency ÷ class width), which is exactly what a histogram plots on its vertical axis.
- **A histogram is not a bar chart.** Bars touch (the scale is continuous), and it is the **area** that represents frequency. That is why the vertical axis is frequency density whenever widths vary — drawing raw frequency with unequal widths misrepresents the data.

You can also read the **median class** from a cumulative-frequency curve: go up to half the total frequency, across to the curve, and down to the value.

```formula Key formulas
Grouped mean ≈ Σ(f × midpoint) ÷ Σf
Midpoint = (lower bound + upper bound) ÷ 2
Frequency density = frequency ÷ class width
Histogram: AREA represents frequency; bars touch
```

## 2. Measuring spread properly

Two data sets can share a mean and be nothing alike. Spread is what distinguishes them.

- **Range** = max − min. Uses only two values, so a single outlier destroys it.
- **Interquartile range** IQR = $Q_3 - Q_1$ — the spread of the middle 50%, **resistant** to outliers.
- **Standard deviation** $\sigma$ — the typical distance of a value from the mean. Uses every value, so it is informative but **sensitive** to outliers.

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$$

Read the formula as a procedure rather than a symbol: take each deviation from the mean, **square** it (so that positives and negatives do not cancel — their plain sum is always zero), average the squares, then square-root to return to the original units. That final root is why $\sigma$ is measured in the same units as the data, whereas the variance $\sigma^2$ is not.

**Pair your statistics correctly:** median with IQR (both resistant), mean with standard deviation (both use every value). Quoting a median alongside a standard deviation mixes philosophies and misleads.

**Outliers** are conventionally values below $Q_1 - 1.5\times\mathrm{IQR}$ or above $Q_3 + 1.5\times\mathrm{IQR}$. Identifying one is the start of an investigation, not permission to delete it — an outlier may be a measurement error, or it may be the most important observation in the set.

> [!example] **Why spread decides the answer**
>
> **Problem.** Two machines fill bottles with a mean of 500 ml. Machine A has σ = 2 ml; machine B has σ = 20 ml. Which is better?
>
> **Solution.** Machine A. Identical means, but A's output clusters within a few ml of target while B's varies by tens of ml, so B will produce many bottles well under or over 500 ml.
>
> *For quality control the spread, not the average, is the whole story.*

## 3. Comparing distributions, and the box plot

A **five-number summary** — minimum, $Q_1$, median, $Q_3$, maximum — captures a distribution compactly, and a **box plot** draws it: a box from $Q_1$ to $Q_3$ with the median marked, and whiskers to the extremes.

Box plots exist to be **compared side by side**, and reading them well means commenting on three things, always:

1. **Centre** — which median is higher?
2. **Spread** — which box (IQR) is wider?
3. **Shape/skew** — is the median off-centre in its box, or one whisker much longer?

**Skew** is worth naming. If the right whisker is long, the distribution is *positively skewed* (a tail of high values) and the mean is pulled above the median. If the left tail is long, it is negatively skewed and the mean sits below the median. So **comparing the mean with the median is itself a skew test** — an equality suggests symmetry.

A full comparison sounds like: *"Class B has a higher median (68 vs 61) but a much wider IQR (24 vs 9), so it performed better on average but far less consistently."* Two sentences covering centre and spread — that is what a complete answer looks like.

> [!example] **Reading a five-number summary**
>
> **Problem.** A data set has min 12, Q₁ = 20, median 24, Q₃ = 32, max 70. Are there outliers?
>
> **Solution.** IQR $= 32 - 20 = 12$, so $1.5\times\mathrm{IQR} = 18$. The fences are $20 - 18 = 2$ and $32 + 18 = 50$. The maximum, 70, lies above 50 and is therefore an outlier; the minimum, 12, is inside the lower fence and is not.
>
> *The long upper tail also tells you the distribution is positively skewed — expect the mean to exceed the median of 24.*

## 4. Reading real studies critically

The statistics are usually the easy part; the judgement is where studies succeed or fail.

**Sampling.** A conclusion applies only to the population actually sampled. A **biased** sample — a survey of canteen queuers, an online poll answered by the motivated, a study of volunteers — systematically excludes people, and no sample size repairs it. **Random** sampling is what licenses generalisation; **stratified** sampling (proportional representation of known subgroups) improves it further.

**Correlation is not causation.** Ice-cream sales correlate with drowning deaths, but neither causes the other — hot weather causes both. That third variable is a **confounder**, and it is the standard reason a real correlation misleads. The only reliable route from correlation to causation is a **controlled experiment** with random allocation.

**Questions that hide the trick.** Watch for:

- **Loaded wording:** "Do you agree that this unfair tax should be scrapped?"
- **Survivorship bias:** studying only the companies that survived, or the students who finished.
- **Selective ranges:** quoting the years that support the claim.
- **Missing base rates:** "cases doubled" from 2 to 4 is very different from 2000 to 4000.
- **Unstated sample size:** "80% preferred it" is meaningless if the sample was five people.

The habit to build: for any statistical claim, ask **who was measured, how were they chosen, what exactly was measured, and compared with what?**

```formula Key formulas
Grouped mean ≈ Σ(f·midpoint)/Σf (an estimate — raw values are lost)
Frequency density = frequency ÷ class width; histogram area = frequency
IQR = Q₃ − Q₁;  outlier fences at Q₁ − 1.5·IQR and Q₃ + 1.5·IQR
σ = √(Σ(x − x̄)²/n);  variance = σ²
Median pairs with IQR; mean pairs with standard deviation
Mean > median ⇒ positive skew;  mean < median ⇒ negative skew
```

## What you should be able to do

- Compute mean/median for grouped data
- Measure spread with variance and standard deviation (intro)
- Interpret data from real studies

## Summary — the mental toolkit

1. Grouped data gives estimates: use class midpoints, and remember the raw values are gone.
2. Histograms show frequency by AREA, so unequal widths require frequency density.
3. Range uses two values; IQR resists outliers; standard deviation uses all values and does not.
4. Squaring in the standard deviation stops deviations cancelling; the root restores the units.
5. Pair median with IQR and mean with standard deviation — never mix the two philosophies.
6. Compare distributions on centre, spread and skew; comparing mean with median detects skew.
7. Bias, confounders and missing base rates defeat any amount of correct arithmetic.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
