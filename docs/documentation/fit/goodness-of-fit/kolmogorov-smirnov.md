# Kolmogorov-Smirnov Goodness-of-Fit Test

The Kolmogorov-Smirnov (K-S) test is a non-parametric statistical test designed to assess whether a dataset follows a specified continuous probability distribution. It compares the empirical distribution function (EDF) of a sample to the cumulative distribution function (CDF) of the hypothesized distribution.

## Test Procedure

The Kolmogorov-Smirnov test statistic is defined as:

$$
D = \max_{1 \leq i \leq N} |F_n(x_i) - F(x_i)|
$$

where:

-   $F_n(x)$ is the empirical cumulative distribution function calculated from the data.
-   $F(x)$ is the cumulative distribution function of the specified theoretical distribution.
-   $N$ is the sample size.

## Hypothesis Testing

The hypotheses tested by the Kolmogorov-Smirnov test are:

-   **Null hypothesis $H_0$**: The dataset follows the specified distribution.
-   **Alternative hypothesis $H_a$**: The dataset does not follow the specified distribution.

The decision rule for the Kolmogorov-Smirnov test is as follows:

1. **Critical value approach**: Reject $H_0$ if the test statistic $D$ is greater than the critical value derived from the K-S distribution at the given significance level (typically $\alpha = 0.05$).

2. **p-value approach**: Reject $H_0$ if the calculated p-value is less than the chosen significance level ($\alpha$).

## Interpretation

-   **Rejected (True)**: There is a significant difference between the empirical and theoretical distributions; the null hypothesis is rejected.
-   **Not Rejected (False)**: The empirical distribution does not significantly differ from the theoretical distribution; the null hypothesis is accepted.

## Implementation in Phitter

In the Phitter library, the Kolmogorov-Smirnov test is implemented through the method:

```python
phi.get_test_kolmogorov_smirnov(id_distribution: str) -> dict
```

## Returned values:

-   `test_statistic`: The Kolmogorov-Smirnov test statistic.
-   `critical_value`: The critical value corresponding to the Kolmogorov-Smirnov distribution at the specified significance level.
-   `p_value`: The p-value associated with the computed test statistic.
-   `rejected`: Boolean indicating whether the null hypothesis is rejected (`True`) or not (`False`).

## Example Usage

```python
import phitter

# Define dataset
data = [...]

# Fit distributions
phi = phitter.Phitter(data)
phi.fit()

# Kolmogorov-Smirnov test for a specific distribution, e.g., "normal"
ks_results = phi.get_test_kolmogorov_smirnov("normal")
print(ks_results)
```

This will return a dictionary containing the Kolmogorov-Smirnov test statistic, critical value, p-value, and the rejection status of the null hypothesis.

**Output:**

```python
{
    "test_statistic": 4.621,
    "critical_value": 11.070,
    "p_value": 0.795,
    "rejected": False
}
```

## Apply Kolmogorov Smirnov test to single distribution

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
ks_results = phitter.continuous.evaluate_continuous_test_kolmogorov_smirnov(distribution_inst, continuous_measures)
```


### Discrete case
```python
import phitter

# Define dataset
data = [...]

# Discrete measures
discrete_measures = phitter.discrete.DiscreteMeasures(data)

# Define distribution instance
distribution_inst = phitter.discrete.Binomial(discrete_measures=discrete_measures)

# Get test result
ks_results = phitter.discrete.evaluate_discrete_test_kolmogorov_smirnov(distribution_inst, discrete_measures)
```