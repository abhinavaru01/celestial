# Common Mistakes — Integer Number Theory Basics

> Every learner hits these. Read the *why* — that is what stops the mistake coming back.

- **Calling 1 prime.** **Why it matters:** unique factorisation would collapse, since you could insert any number of 1s. **Fix:** a prime needs exactly *two distinct* factors; 1 has one.

- **Assuming all primes are odd** and so skipping 2. **Fix:** 2 is prime — it is the only even one, precisely because every other even number has 2 as a spare factor.

- **Swapping HCF and LCM.** **Fix:** HCF is *Highest* but *smaller* than the numbers; LCM is *Lowest* but *larger*. Read the story: sharing into groups = HCF, meeting again = LCM.

- **Trial-dividing past √n when testing primality.** Wasted effort, and it invites arithmetic slips. **Fix:** stop at √n — a factor above it forces a partner below it.

- **Using the "test 2 and 4" shortcut for 8.** 12 passes both yet is not divisible by 8. **Fix:** the combined test only works for *coprime* factors, as with 6 = 2 × 3.

- **Taking the highest powers for HCF.** **Fix:** HCF takes the *lowest* power of only the *shared* primes; anything more would not divide both.

- **Listing multiples one by one to find a large LCM.** Slow and error-prone. **Fix:** factorise, or use LCM = ab ÷ HCF.

