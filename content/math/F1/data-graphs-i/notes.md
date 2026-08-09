# Data & Graphs I

> [!intro] **Every graph is an argument, and some arguments are dishonest.** Learning to draw charts is the easy half; learning to *read* them sceptically — checking whether the axis starts at zero, whether the categories are complete, whether the picture matches the numbers — is the half that protects you for life. This is also your first statistics topic: the vocabulary here returns in F2 Probability & Statistics and in every science practical you will do.

## 1. Data has types, and the type picks the chart

Before choosing a chart, classify the data:

- **Categorical** — labels with no numeric order: favourite subject, blood group, country.
- **Discrete numerical** — countable values: number of siblings, goals scored. You can have 2 or 3, never 2.4.
- **Continuous numerical** — any value in a range: height, mass, time. Limited only by measuring precision.

The type determines the chart, and mismatching them is the commonest presentational error:

| Data | Right chart | Why |
|---|---|---|
| Categorical | bar chart, pictograph | separate bars = separate categories |
| Discrete | bar chart (gaps) | values are isolated points |
| Continuous over time | line graph | the line asserts values *between* the points |
| Parts of one whole | pie chart | angles sum to a full turn |

A line graph between categories is meaningless — there is no "halfway between Physics and Hindi". Conversely, using bars for a continuous time series hides the trend the reader needs.

## 2. Bar charts and pictographs, done properly

A **bar chart** compares category sizes by bar *length*. Non-negotiable rules:

- **The frequency axis must start at zero.** Length is the visual variable; truncating the axis destroys the comparison (see the next section).
- **Bars are equal width, with equal gaps.** Varying width smuggles in area as a second, misleading signal.
- **Label both axes and title the chart.** An unlabelled axis makes the chart unreadable and unciteable.

A **pictograph** uses a symbol to stand for a fixed number of items, declared in a **key** ("🙂 = 10 students"). Its charm is also its danger: partial symbols must be *proportional*, and a missing key makes the chart worthless. If one symbol is drawn twice as tall AND twice as wide to mean "double", the reader sees four times the area — a classic distortion.

> [!example] **Reading a pictograph**
>
> **Problem.** A pictograph uses ★ = 20 books. A row shows 3 full stars and a half star. How many books?
>
> **Solution.** $3 \times 20 + \tfrac12 \times 20 = 60 + 10 = 70$ books.
>
> *Always read the key first — the same row of stars means anything at all without it.*

## 3. Line graphs: the line is a claim

A line graph plots points and joins them. Joining is not decoration — **the line claims the quantity actually passed through those intermediate values.** That claim is fair for temperature through a day, and false for monthly exam scores (you did not hold a score of 62.5 midway through March).

Reading a line graph well means reading its *shape*, not just its points:

- **Steepness = rate of change.** A steeper section means faster change. This is the same "slope = rate" idea that becomes $y = mx + c$ in F2, velocity in Physics F1, and the derivative in I2 — one idea, four appearances.
- **Flat = no change** (not "nothing happening" — a constant value is information).
- **Downward = decrease.** A common misreading is treating a falling line as "negative values"; the *value* can stay positive while the *change* is negative.

**Interpolation** (reading between plotted points) is usually safe; **extrapolation** (continuing beyond the data) is a guess and should be labelled as one.

```svg
<svg viewBox="0 0 400 170" role="img" aria-label="Line graph with a steep segment and a flat segment" xmlns="http://www.w3.org/2000/svg">
  <line x1="45" y1="20" x2="45" y2="130" stroke="#6b7a99" stroke-width="2"/>
  <line x1="45" y1="130" x2="375" y2="130" stroke="#6b7a99" stroke-width="2"/>
  <polyline points="60,120 130,105 200,45 270,45 340,80" fill="none" stroke="#6ee7a8" stroke-width="3"/>
  <g fill="#6ee7a8"><circle cx="60" cy="120" r="4"/><circle cx="130" cy="105" r="4"/><circle cx="200" cy="45" r="4"/><circle cx="270" cy="45" r="4"/><circle cx="340" cy="80" r="4"/></g>
  <text x="165" y="70" font-size="11" fill="#e6ecff">steep = fast change</text>
  <text x="235" y="36" font-size="11" fill="#9aa8c4">flat = no change</text>
  <text x="30" y="18" font-size="11" fill="#9aa8c4">value</text>
  <text x="370" y="148" font-size="11" fill="#9aa8c4" text-anchor="end">time</text>
</svg>
```

## 4. How graphs mislead — a checklist

Most misleading graphs are not fabricated data; they are honest numbers drawn dishonestly. Learn the five standard tricks so you can spot them.

1. **Truncated axis.** Starting the frequency axis at 90 instead of 0 turns a 2% difference into a visual doubling. *Check: does the vertical axis start at zero? If not, why not?*
2. **Inconsistent scale.** Unequal gaps between axis values (0, 10, 20, 50, 100) bend the shape of the data arbitrarily.
3. **Area distortion.** Scaling a symbol or 3-D shape in both dimensions to show a doubling shows a quadrupling to the eye.
4. **Cherry-picked range.** Showing only the months that support the claim. *Check: what happens just outside this window?*
5. **Missing or unlabelled units.** "Sales up 40" — forty what, over what period, from what base?

Add two questions of substance: **who collected this, and from whom?** A survey of a school canteen queue tells you about people who queue at the canteen, not about the school. That is **sampling bias**, and no amount of careful drawing fixes it.

> [!example] **Spotting the truncated axis**
>
> **Problem.** A chart shows Brand A at 96% satisfaction and Brand B at 92%, with the axis running from 90% to 100%. Brand A's bar looks about three times taller. Is the chart honest?
>
> **Solution.** The numbers are honest; the picture is not. With the axis starting at 90, the drawn lengths are 6 units against 2 — a 3:1 visual ratio for a difference of just 4 percentage points. Redrawn from zero, the bars are 96 and 92, visually near-identical.
>
> *Always read the axis before you read the bars.*

## 5. Summarising a data set: mode, median, mean, range

A chart shows the shape; a summary statistic compresses it to one number. Four to know, with the judgement of when each is right:

- **Mode** — the most frequent value. The only average that works for categorical data (there is no "mean favourite subject").
- **Median** — the middle value once ordered. With an even count, the mean of the middle two. **Resistant to outliers.**
- **Mean** — total ÷ count. Uses every value, so it is the most informative *and* the most easily distorted by one extreme.
- **Range** — largest minus smallest. A crude measure of spread, entirely determined by the two most extreme values.

Choosing between them is the actual skill. For salaries where one director earns a hundred times the rest, the **median** describes a typical worker and the **mean** does not. For symmetric data with no outliers, the mean is best. Reporting an average without saying *which* average is a standard way to mislead.

*Example.* For $3, 4, 4, 5, 24$: mode 4, median 4, mean $\tfrac{40}{5} = 8$, range 21. The mean is larger than every value but one — the outlier 24 has dragged it away from anything typical.

```formula Key formulas
Mean = sum of values ÷ number of values
Median = middle value when ordered (mean of the middle two if the count is even)
Mode = most frequent value (the only average valid for categories)
Range = largest − smallest
Outliers move the mean a lot and the median hardly at all
```

```formula Key formulas
Categorical → bar/pie;  discrete → bar;  continuous over time → line
Bar charts: frequency axis MUST start at zero; equal widths and gaps
Pictograph: always state the key (one symbol = n items)
Line graph: steepness = rate of change; the line claims intermediate values
Mean = total ÷ count;  median = middle;  mode = most frequent;  range = max − min
```

## What you should be able to do

- Read and construct bar charts, pictographs and line graphs
- Compute simple averages from data
- Recognise misleading graphs

## Summary — the mental toolkit

1. Classify the data first — categorical, discrete, continuous — and let that choose the chart.
2. Bar charts compare lengths, so the frequency axis must start at zero.
3. A pictograph is meaningless without its key, and symbols must scale in one dimension only.
4. A line graph asserts the intermediate values; only join points when that claim is true.
5. Steepness is rate of change — the same idea as slope, speed and the derivative later.
6. Check every chart for: truncated axis, uneven scale, area distortion, cherry-picked range, missing units.
7. Mode, median, mean and range summarise differently; outliers move the mean but not the median.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
