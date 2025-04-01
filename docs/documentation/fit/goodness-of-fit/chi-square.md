# Chi-Square Goodness-of-Fit Test

The Chi-Square ($\chi^2$) test is a statistical method used to determine if observed frequencies significantly deviate from expected frequencies derived from a hypothesized probability distribution. It tests the null hypothesis ($H_0$) that the dataset follows the specified distribution against the alternative hypothesis ($H_a$) that it does not.

## Test Procedure

The Chi-Square statistic is calculated using the formula:

$$
\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}
$$

where:

-   $O_i$ represents the observed frequency for bin $i$.
-   $E_i$ represents the expected frequency for bin $i$, calculated based on the cumulative distribution function (CDF) of the proposed distribution.
-   $k$ represents the number of bins or classes.

## Degrees of Freedom

The test statistic follows a Chi-Square distribution with degrees of freedom calculated as:

$$
\text{degrees of freedom} = k - 1 - p
$$

where:

-   $k$ is the number of bins.
-   $p$ is the number of parameters estimated from the data for the distribution being tested.

## Hypothesis Testing

The hypothesis test is structured as follows:

-   **Null hypothesis $H_0$**: The data follows the specified probability distribution.
-   **Alternative hypothesis $H_a$**: The data does not follow the specified probability distribution.

To make a decision regarding the hypotheses, two approaches are available:

1. **Critical value approach**: If the calculated $\chi^2$ statistic exceeds the critical value from the Chi-Square distribution table at a given significance level ($\alpha$), the null hypothesis is rejected.

2. **p-value approach**: If the calculated p-value is less than the chosen significance level (typically $\alpha = 0.05$), the null hypothesis is rejected.

## Interpretation

-   **Rejected (True)**: The data significantly deviates from the proposed distribution.
-   **Not Rejected (False)**: The data is consistent with the proposed distribution.

## Implementation in Phitter

In the Phitter library, the Chi-Square test is implemented via the method:

```python
phi.get_test_chi_square(id_distribution: str) -> dict
```

## Returned values:

-   `test_statistic`: The computed Chi-Square statistic.
-   `critical_value`: The Chi-Square distribution critical value at the given significance level.
-   `p_value`: The p-value associated with the Chi-Square statistic.
-   `rejected`: Boolean indicating if the null hypothesis is rejected (`True`) or not (`False`).

## Example Usage

```python
import phitter

# Define dataset
data = [...]

# Fit distributions
phi = phitter.Phitter(data)
phi.fit()

# Chi-Square test for a specific distribution, e.g., "normal"
chi_square_results = phi.get_test_chi_square("normal")
print(chi_square_results)
```

This will output a dictionary containing the Chi-Square test statistic, critical value, p-value, and the rejection status of the null hypothesis.

**Output:**

```python
{
    "test_statistic": 4.621,
    "critical_value": 11.070,
    "p_value": 0.795,
    "rejected": False
}
```

## Apply Chi Square test to single distribution

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
chi_square_results = phitter.continuous.evaluate_continuous_test_chi_square(distribution_inst, continuous_measures)
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
chi_square_results = phitter.discrete.evaluate_discrete_test_chi_square(distribution_inst, discrete_measures)
```
