# Discrete Fit Results

Once the fitting process has been completed with `fit_type="discrete"`, a variety of methods and properties become available for analyzing and comparing the fitted discrete distributions. This section describes each of these resources in detail.

## Global Results

### 1. `phi.best_distribution`

Provides the single best-fitting distribution, determined by two criteria:

1. Highest number of passed statistical tests (among Chi-Square, Kolmogorov-Smirnov, etc. that are applicable).
2. Lowest Sum of Squared Errors (SSE), used as a tiebreaker if multiple distributions pass the same number of tests.

**Type**  
`dict`  
**Structure**

```python
{
  "id": str,
  "parameters": { ... }
}
```

**Usage Example**

```python
best_dist = phi.best_distribution
# best_dist -> {"id": "binomial", "parameters": {"p": 0.38, "n": 10}}
```

### 2. `phi.sorted_distributions_sse`

Yields a dictionary of all fitted distributions, sorted primarily by the number of tests passed (descending), and secondarily by SSE (ascending). This structure contains each distribution’s parameters, SSE, and statistical test outcomes.

**Type**  
`dict[str, dict]`  
**Usage Example**

```python
all_distributions = phi.sorted_distributions_sse
# all_distributions -> {
#   "binomial": {
#       "sse": 0.0123,
#       "parameters": {"p": 0.38, "n": 10},
#       "chi_square": {...},
#       "kolmogorov_smirnov": {...},
#       "n_test_passed": 2,
#       "n_test_null": 0
#   },
#   "geometric": { ... },
#   ...
# }
```

### 3. `phi.not_rejected_distributions`

Provides a dictionary of all distributions that have passed at least one statistical test (i.e., have not been rejected by all tests). This is a subset of `sorted_distributions_sse`.

**Type**  
`dict[str, dict]`  
**Usage Example**

```python
valid_distributions = phi.not_rejected_distributions
# valid_distributions -> {
#   "binomial": {
#       "sse": 0.0123,
#       "parameters": {...},
#       "chi_square": {...},
#       "kolmogorov_smirnov": {...},
#       "n_test_passed": 2,
#       "n_test_null": 0
#   }
# }
```

### 4. `phi.df_sorted_distributions_sse`

Presents the same information as `phi.sorted_distributions_sse`, but in a `pandas.DataFrame` format for easier viewing and manipulation. Columns include distribution name, SSE, parameter strings, and test results.

**Type**  
`pandas.DataFrame`  
**Usage Example**

```python
df_sse = phi.df_sorted_distributions_sse
df_sse.head(n=5)
# Returns a DataFrame with columns for distribution,
# SSE, parameters, and test outcomes.
```

### 5. `phi.df_not_rejected_distributions`

Similarly presents the same information as `phi.not_rejected_distributions`, but in a DataFrame format. Contains only those distributions not rejected by all tests.

**Type**  
`pandas.DataFrame`  
**Usage Example**

```python
df_valid = phi.df_not_rejected_distributions
df_valid
# Shows distributions that passed at least one statistical test.
```

### 6. `phi.summarize(k: int = 20) -> pandas.DataFrame`

Produces a concise table containing a selection of the top-fitting distributions. By default, this method lists up to 20 distributions (or a specified integer `k`), ordered by the library’s internal selection criteria (for instance, SSE and number of tests passed).

**Parameters**

-   **`k (int)`**: The maximum number of distributions to display. Default value is 20.

**Returns**  
`pandas.DataFrame`: A compact summary of distribution names, SSE values, parameter listings, and the pass/fail status for each statistical test.

**Usage Example**

```python
summary_df = phi.summarize(k=10)
summary_df
```

### 7. `phi.summarize_info(k: int = 10) -> pandas.DataFrame`

Provides a slightly more detailed summary of the top-fitting distributions, including more direct information on whether each test has been rejected or not.

**Parameters**

-   **`k (int)`**: The maximum number of distributions to display. Default value is 10.

**Returns**  
`pandas.DataFrame`: A table that lists each distribution’s SSE, parameters, and a boolean indicating rejection or non-rejection for each statistical test.

**Usage Example**

```python
info_df = phi.summarize_info(k=5)
info_df
```

## Results Specific Distribution

The following methods extract distribution-specific details from the fit results. Each method requires a string identifier `id_distribution` matching the target distribution (e.g., `"binomial"`, `"geometric"`, etc.). If a distribution identifier is not present in the fitted results, an exception is raised.

### 1. `phi.get_parameters(id_distribution: str) -> dict`

Retrieves the fitted parameters for a specific distribution.

```python
phi.get_parameters("binomial")
# -> {"p": 0.38, "n": 10}
```

### 2. `phi.get_test_chi_square(id_distribution: str) -> dict`

Returns the Chi-Square test results for the specified distribution. The dictionary typically includes:

-   `test_statistic`
-   `critical_value`
-   `p_value`
-   `rejected`

```python
chi_result = phi.get_test_chi_square("binomial")
# chi_result -> {
#   "test_statistic": ...,
#   "critical_value": ...,
#   "p_value": ...,
#   "rejected": False
# }
```

### 3. `phi.get_test_kolmogorov_smirnov(id_distribution: str) -> dict`

Obtains the Kolmogorov-Smirnov test results for the distribution. The returned dictionary follows the same structure as the Chi-Square results (test statistic, critical value, p-value, rejection status).

```python
ks_result = phi.get_test_kolmogorov_smirnov("binomial")
# ks_result -> {
#   "test_statistic": ...,
#   "critical_value": ...,
#   "p_value": ...,
#   "rejected": False
# }
```

### 4. `phi.get_test_anderson_darling(id_distribution: str) -> dict`

Retrieves the Anderson-Darling test results for a given distribution, if applicable. In many discrete-fitting scenarios, this test may not be available or may return a `None`-based structure if not supported in the current implementation.

```python
ad_result = phi.get_test_anderson_darling("binomial")
# ad_result -> {
#   "test_statistic": None,
#   "critical_value": None,
#   "p_value": None,
#   "rejected": None
# }
# (Depending on the distribution and whether the AD test is implemented for discrete fits.)
```

### 5. `phi.get_sse(id_distribution: str) -> float`

Provides the Sum of Squared Errors (SSE) calculated between the empirical frequencies and the distribution’s probability mass function (PMF).

```python
binomial_sse = phi.get_sse("binomial")
# -> 0.0123
```

### 6. `phi.get_n_test_passed(id_distribution: str) -> int`

Indicates how many statistical tests (out of the ones performed) were _not_ rejected for the given distribution.

```python
phi.get_n_test_passed("binomial")
# -> 2  # means 2 tests did not reject the distribution
```

### 7. `phi.get_n_test_null(id_distribution: str) -> int`

Reports how many statistical tests returned a null or indeterminate result for the specified distribution.

```python
phi.get_n_test_null("binomial")
# -> 0  # means 0 tests were inconclusive for that distribution
```

## Additional Notes

-   The default discrete fitting process includes the Chi-Square test and the Kolmogorov-Smirnov test. The Anderson-Darling test is part of the code interface but may be unsupported for certain discrete distributions.
-   If fitting fails or if no distributions pass the set criteria, the outputs for certain methods or properties (such as `df_sorted_distributions_sse` or `best_distribution`) might be empty or raise exceptions.

**Example Usage in a Discrete Setting**

```python
import phitter

# Define the dataset (discrete values)
data = [0, 1, 1, 2, 5, 3, 3, 3, 10, 10]

# Create and fit a discrete Phitter instance
phi = phitter.Phitter(
    data=data,
    fit_type="discrete",
    distributions_to_fit=["binomial", "geometric"],
)
phi.fit(n_workers=2)

# Retrieve the best distribution
best_dist_info = phi.best_distribution

# Summarize top results
summary_table = phi.summarize(k=5)
summary_details = phi.summarize_info(k=5)

# Access methods for a specific distribution
binomial_params = phi.get_parameters("binomial")
binomial_chi = phi.get_test_chi_square("binomial")
binomial_ks = phi.get_test_kolmogorov_smirnov("binomial")
binomial_sse = phi.get_sse("binomial")
```

This concludes the reference for examining **discrete fit results** within Phitter. Each of these methods and properties is designed to facilitate rigorous, academic-style analysis of the fit quality, distribution parameters, and statistical test outcomes.
