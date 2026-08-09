# Common Mistakes — Exponentials & Logarithms

> Every learner hits these. Read the *why* — that is what stops the mistake coming back.

- **Writing log(x + y) = log x + log y.** **Fix:** the law applies to products only. Test x = y = 1: log 2 ≈ 0.30 versus 0. Logs turn × into +, not + into +.

- **Confusing (log a)/(log b) with log(a/b).** **Fix:** division of logs is the change-of-base pattern; log(a/b) equals log a − log b. They are different quantities.

- **Taking the log of a negative number** and reporting a value. **Fix:** undefined for a positive base — treat it as a signal that the model or the algebra is wrong.

- **Confusing growth factor with growth rate.** For 8% growth, b = 1.08, not 0.08. **Fix:** b is the multiplier; add 1 for growth, subtract from 1 for decay.

- **Modelling proportional growth with a linear function.** **Fix:** check whether the *increase* or the *factor* is constant — constant doubling time means exponential.

- **Forgetting that a log scale is multiplicative.** Reading pH 3 to pH 5 as a small change. **Fix:** each unit is a factor of 10, so two units is ×100.

- **Dividing by the wrong log when solving b^t = k.** **Fix:** t = log k ÷ log b — the base's log goes on the bottom. Sanity-check the answer by substituting back.

- **Rounding log values early.** **Fix:** logs are small numbers whose ratios matter; keep full precision until the final step.

