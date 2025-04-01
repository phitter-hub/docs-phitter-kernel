# Anderson-Darling Goodness-of-Fit Test

The Anderson-Darling (A-D) test is a statistical method designed to evaluate whether a given sample of data follows a specified continuous probability distribution. It is especially sensitive to deviations in the tails of the distribution, making it effective for distributions with extreme values.

## Test Procedure

The Anderson-Darling test statistic $A^2$ is calculated using the following formula:

$$
A^2 = -N - \sum_{i=1}^{N} \frac{(2i - 1)}{N} [\ln(F(x_i)) + \ln(1 - F(x_{N+1 - i}))]
$$

where:

-   $N$ is the number of observations in the dataset.
-   $x_i$ represents the sorted observations in ascending order.
-   $F(x_i)$ is the cumulative distribution function (CDF) of the hypothesized distribution evaluated at $x_i$.

## Hypothesis Testing

The hypotheses for the Anderson-Darling test are defined as:

-   **Null hypothesis $H_0$**: The data follows the specified probability distribution.
-   **Alternative hypothesis $H_a$**: The data does not follow the specified probability distribution.

To determine the outcome, compare the calculated Anderson-Darling statistic to the critical value or p-value:

1. **Critical value approach**: If the test statistic $A^2$ exceeds the critical value from the A-D distribution tables at the significance level $\alpha$ (usually 0.05), the null hypothesis is rejected.

2. **p-value approach**: Reject the null hypothesis if the calculated p-value is less than the chosen significance level.

## Interpretation

-   **Rejected (True)**: The dataset significantly deviates from the hypothesized distribution; reject the null hypothesis.
-   **Not Rejected (False)**: The dataset is consistent with the hypothesized distribution; accept the null hypothesis.

## Implementation in Phitter

In the Phitter library, the Anderson-Darling test is implemented through the method:

```python
phi.get_test_anderson_darling(id_distribution: str) -> dict
```

## Returned values:

-   `test_statistic`: The Anderson-Darling test statistic.
-   `critical_value`: The critical value from the Anderson-Darling distribution tables corresponding to the significance level.
-   `p_value`: The p-value associated with the test statistic.
-   `rejected`: Boolean indicating whether the null hypothesis is rejected (`True`) or not (`False`).

## Example Usage

```python
import phitter

# Define dataset
data = [...]

# Fit distributions
phi = phitter.Phitter(data)
phi.fit()

# Anderson-Darling test for a specific distribution, e.g., "normal"
ad_results = phi.get_test_anderson_darling("normal")
print(ad_results)
```

This returns a dictionary containing the Anderson-Darling test statistic, critical value, p-value, and whether the null hypothesis is rejected.

**Output:**

```python
{
    "test_statistic": 4.621,
    "critical_value": 11.070,
    "p_value": 0.795,
    "rejected": False
}
```

## Apply Anderson Darling test to single distribution

### Continous case

```python
import phitter

# Define dataset
data = [...]

# Continous measures
continuous_measures = phitter.continuous.ContinuousMeasures(data)

# Define distribution instance
distribution_inst = phitter.continuous.Normal(continuous_measures=continuous_measures)

# Get test result
ad_results = phitter.continuous.evaluate_continuous_test_anderson_darling(distribution_inst, continuous_measures)
```

## Additional Section: Insights from _Evaluating the Anderson-Darling Distribution_ (Marsaglia & Marsaglia)

In their paper _Evaluating the Anderson-Darling Distribution_, George Marsaglia and John C. W. Marsaglia present methods for accurately determining the distribution of the Anderson-Darling (A–D) test statistic—both in the limiting case as the sample size $n \to \infty$ and for finite $n$. While the Anderson-Darling test is often introduced in the context of checking for uniformity in $[0,1]$ (i.e., testing whether sorted samples $x_1 < x_2 < \cdots < x_n$ are drawn from a uniform distribution), their results also underpin more general uses, including tests for other continuous distributions by transforming data appropriately.

Below is a concise overview of the key ideas and the most relevant mathematical expressions from their work.

---

### 1. Limiting Distribution $A_{\infty}$

The Anderson-Darling statistic $A_n$ for $n$ ordered uniform samples has a limiting distribution as $n \to \infty$. This limit is often denoted:

$$
A_{\infty} \;=\;\lim_{n \to \infty} A_n.
$$

Marsaglia & Marsaglia denote the cumulative distribution function (CDF) of $A_{\infty}$ by

$$
\text{AD}_{\infty}(z) \;=\; \lim_{n \to \infty} \Pr(A_n < z).
$$

They show that $\text{AD}_{\infty}(z)$ can be computed by expanding a complicated series directly and then using two-term recursions to achieve very high precision. Concretely, their presentation re-derives the asymptotic form given by Anderson & Darling and provides a practical numerical scheme to evaluate it.

#### 1.1. Asymptotic Formula

A common form for $\text{AD}_{\infty}(z)$ can be written as:

$$
\text{AD}_{\infty}(z)
\;=\;
\frac{1}{z}
\sum_{j=0}^{\infty}
\binom{-\tfrac12}{j} (4j+1)
\;\; f(z, j),
$$

where $f(z,j)$ involves integrating an exponential series in terms of $(1 + w^2)^{-1}$. Although the exact expression is somewhat intricate, Marsaglia & Marsaglia derive a pair of practical, piecewise approximations that work extremely well (to about 6–7 digits of accuracy or better):

-   For $0 < z < 2$:

    $$
    \text{AD}_{\infty}(z)
    \;\approx\;
    z^{-\tfrac12}
    \exp\!\Bigl(-\tfrac{1.2337141}{z}\Bigr)
    \Bigl(2.00012 + (0.247105 - (0.0649821 - (0.0347962 - (0.0116720 - 0.00168691\,z)\,z)\,z)\,z)\,z\Bigr).
    $$

-   For $z \ge 2$:

    $$
    \text{AD}_{\infty}(z)
    \;\approx\;
    \exp\!\Bigl(
        -\,\exp\!\Bigl(
            1.0776 - (2.30695 - (0.43424 - (0.082433 - (0.008056 - 0.0003146\,z)\,z)\,z)\,z)\,z
        \Bigr)
    \Bigr).
    $$

These two pieces meet smoothly at $z=2$ and give a fast, convenient way to approximate the limiting distribution without resorting to full numerical integration.

---

### 2. Finite-$n$ Correction

Although $\text{AD}_{\infty}(z)$ is a valid limiting form, for finite sample sizes $n$ there can be notable differences—especially around the lower percentiles. Marsaglia & Marsaglia address this by introducing an “error-correction” function, $\text{errfix}(n, x)$, which refines the distribution for finite $n$.

If $Z$ is the Anderson-Darling statistic from $n$ observations (ordered as $x_1 < \dots < x_n$), then its exact finite-$n$ CDF is approximated by:

$$
\Pr(A_n < z)
\;\approx\;
\text{AD}_{\infty}(z)
\;+\;
\text{errfix}\!\bigl(n,\;\text{AD}_{\infty}(z)\bigr),
$$

where $0 < \text{AD}_{\infty}(z) < 1$. Their simulations of size $10^{10}$ show that carefully choosing $\text{errfix}(n,x)$ in a piecewise fashion can match the observed finite-$n$ distributions to near-uniform accuracy.

A simplified version of $\text{errfix}\bigl(n,x\bigr)$ is:

$$
\text{errfix}(n, x)
\;=\;
\begin{cases}
\displaystyle
\bigl(0.0037/n^3 + 0.00078/n^2 + 0.00006/n\bigr)
\,g_{1}\!\Bigl(\tfrac{x}{c(n)}\Bigr),
&
0 \,\le\, x < c(n),
\$$6pt]
\bigl(0.04213/n + 0.01365/n^2\bigr)
\,g_{2}\!\Bigl(\tfrac{x - c(n)}{\,0.8 - c(n)\,}\Bigr),
&
c(n) \,\le\, x < 0.8,
\$$6pt]
\displaystyle
\frac{g_{3}(x)}{n},
&
0.8 \,\le\, x \le 1,
\end{cases}
$$

where $c(n) = 0.01265 + 0.1757/n$, and $g_{1}, g_{2}, g_{3}$ are specific polynomials or piecewise polynomials constructed to fit the simulation data.

---

### 3. Practical Relevance

1. **High Accuracy for P-Values**  
   When using the Anderson-Darling statistic $A_n$ in hypothesis testing, the p-value can be computed as

    $$
    \text{p-value}
    \;=\;
    \text{AD}_{\infty}(A_n)
    \;+\;
    \text{errfix}\bigl(n,\;\text{AD}_{\infty}(A_n)\bigr).
    $$

    This formula yields a near-uniform distribution of p-values under the null hypothesis for sample sizes up to at least $n=128$ (and beyond), thereby improving on simply using the large-$n$ tables or the raw limit.

2. **Better Finite-$n$ Behavior**  
   Marsaglia & Marsaglia show that directly applying the limiting distribution $\text{AD}_{\infty}$ for moderate $n$ can introduce systematic bias in the lower to middle quantiles. The correction $\text{errfix}(n,x)$ mitigates this error.

3. **Algorithmic Simplicity**  
   Although the derivations in the paper involve expansions and two-term recursions, the final “shortcut” formulas for $\text{AD}_{\infty}$ and $\text{errfix}$ are straightforward to implement. This makes them suitable for inclusion in codebases like Phitter where computational speed and simplicity are valuable.

---

### References

-   **Marsaglia, G. and Marsaglia, J. C. W.** (2004). _Evaluating the Anderson-Darling Distribution_.
