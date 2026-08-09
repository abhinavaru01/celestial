# Common Mistakes — Probability & Statistics I

> Every learner hits these. Read the *why* — that is what stops the mistake coming back.

- **Giving a probability above 1** (or as a raw count like "4 out of 52 = 4"). **Fix:** probability is a fraction of the total; check that your answer lies in [0, 1].

- **Assuming outcomes are equally likely when they are not** — a drawing pin, a biased spinner, tomorrow's weather. **Fix:** the counting formula needs fairness; otherwise use experimental relative frequency.

- **The gambler's fallacy:** believing a head is "due" after five tails. **Fix:** independent trials have no memory; P stays ½ every toss.

- **Multiplying probabilities for events that are not independent.** Drawing two kings without replacement is (4/52)×(3/51), not (4/52)². **Fix:** ask whether the first event changes the second's conditions.

- **Adding probabilities for events that can occur together.** P(king or heart) is not 4/52 + 13/52, because the king of hearts is counted twice. **Fix:** addition needs mutually exclusive events.

- **Dividing by the number of rows rather than the total frequency** when finding a mean from a table. **Fix:** mean = Σ(x·f) ÷ Σf.

- **Reporting a mean for skewed data** and calling it typical. **Fix:** compare mean and median; if they differ substantially, report the median and say why.

- **Quoting an average with no measure of spread.** **Fix:** pair median with IQR, or mean with range/standard deviation.

