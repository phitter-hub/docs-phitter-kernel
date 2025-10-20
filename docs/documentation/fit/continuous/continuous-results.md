# Continuous Fit Results

Upon completion of the fitting process, the Phitter instance provides several methods and properties for examining and interpreting the outcome. Each method either returns a specific metric or presents a collection of fitted distributions in tabular form.

## Global Results

### 1. `phi.summarize(k: int) -> pandas.DataFrame`

Generates a concise summary table of the top-\(k\) distributions based on goodness-of-fit evaluations.

-   **k (int, optional)**: Defines how many distributions appear in the output. The default is 20.

```python
phi.summarize(k=20)
# Returns a pandas.DataFrame containing columns such as:
# - distribution
# - sse
# - parameters
# - chi_square
# - kolmogorov_smirnov
# - anderson_darling (continuous case only)
```

| distribution  |    sse | parameters | chi_square | kolmogorov_smirnov | anderson_darling |
| :------------ | -----: | :--------- | :--------- | :----------------- | :--------------- |
| loggamma      | 0.0000 | ...        | ✅         | ✅                 | ✅               |
| johnson_sb    | 0.0000 | ...        | ✅         | ✅                 | ✅               |
| kumaraswamy   | 0.0000 | ...        | ✖️         | ✅                 | ✅               |
| dagum_4p      | 0.0000 | ...        | ✖️         | ✅                 | ✅               |
| beta_prime_4p | 0.0000 | ...        | ✖️         | ✖️                 | ✖️               |

### 2. `phi.summarize_info(k: int) -> pandas.DataFrame`

Generates a more detailed table than `phi.summarize()`, including the raw (True/False) rejection results from each statistical test.

-   **k (int, optional)**: Defines how many distributions appear in the output. The default is 10.

```python
phi.summarize_info(k=10)
# Returns a pandas.DataFrame containing columns such as:
# - distribution
# - sse
# - parameters
# - chi_square
# - kolmogorov_smirnov
# - anderson_darling (continuous case only)
```

### 3. `phi.best_distribution -> dict`

Provides a dictionary representing the distribution that achieved the highest evaluation criteria (primarily the lowest SSE and passing tests).

-   **Return Value**:
    ```python
    {
      "id": "<distribution_name>",
      "parameters": {
          ...
      }
    }
    ```

**Example**:

```python
phi.best_distribution
# -> {
#   "id": "weibull",
#   "parameters": {
#       "alpha": 1.04,
#       "beta": 120.5,
#       ...
#   }
# }
```

### 4. `phi.sorted_distributions -> dict`

Provides a dictionary in which the keys are distribution identifiers and the values are nested dictionaries with metrics such as parameters, SSE, and the results of the statistical tests. The items are sorted primarily by the number of tests passed, then by the sum of squared errors.

```python
phi.sorted_distributions
# -> {
#    "weibull": {
#       "chi_square": {...},
#       "kolmogorov_smirnov": {...},
#       "anderson_darling": {...},
#       "parameters": {...},
#       "sse": float,
#       "n_test_passed": int,
#       "n_test_null": int
#     },
#     "gamma": {
#       ...
#     },
#     ...
# }
```

### 5. `phi.not_rejected_distributions -> dict`

Provides a dictionary structured similarly to `phi.sorted_distributions`, containing only those distributions that have passed at least one statistical test (i.e., were not fully rejected).

```python
phi.not_rejected_distributions
# -> {
#    "weibull": {
#       ... same structure ...
#    },
#    ...
# }
```

### 6. `phi.df_sorted_distributions -> pandas.DataFrame`

Generates a Pandas DataFrame representation of `phi.sorted_distributions`. All distributions that were successfully fitted are included, organized by metrics and test results in a multi-index column structure.

```python
phi.df_sorted_distributions.head(10)
# -> Shows the top 10 distributions based on sum of squared errors (SSE) and test passes
```

### 7. `phi.df_not_rejected_distributions -> pandas.DataFrame`

Generates a Pandas DataFrame representation of `phi.not_rejected_distributions`. This table contains only distributions for which at least one test was not rejected.

```python
phi.df_not_rejected_distributions
# -> pandas.DataFrame with columns for distribution name, SSE, parameters, and test statistics
```

---

## Results Specific Distribution

These methods each require a distribution identifier (`id_distribution`) to inspect specific metrics and results for a particular fitted distribution.

### 1. `phi.get_parameters(id_distribution: str) -> dict`

Retrieves the fitted parameters of the specified distribution.

```python
phi.get_parameters(id_distribution="weibull")
# -> {
#   "alpha": ...,
#   "beta":  ...,
#   ...
# }
```

### 2. `phi.get_test_chi_square(id_distribution: str) -> dict`

Returns the Chi-Square test results as a dictionary containing the test statistic, critical value, p-value, and a boolean indicating whether the distribution is rejected under the given significance level.

```python
phi.get_test_chi_square("weibull")
# -> {
#   "test_statistic": ...,
#   "critical_value": ...,
#   "p_value": ...,
#   "rejected": ...
# }
```

### 3. `phi.get_test_kolmogorov_smirnov(id_distribution: str) -> dict`

Returns the Kolmogorov-Smirnov test results as a dictionary with the same structure as in the Chi-Square test.

```python
phi.get_test_kolmogorov_smirnov("weibull")
# -> {
#   "test_statistic": ...,
#   "critical_value": ...,
#   "p_value": ...,
#   "rejected": ...
# }
```

### 4. `phi.get_test_anderson_darling(id_distribution: str) -> dict`

Provides the Anderson-Darling test results, containing its test statistic, critical value(s), p-value (if applicable), and rejection status.  
(Available for continuous fits only.)

```python
phi.get_test_anderson_darling("weibull")
# -> {
#   "test_statistic": ...,
#   "critical_value": ...,
#   "p_value": ...,
#   "rejected": ...
# }
```

### 5. `phi.get_sse(id_distribution: str) -> float`

Retrieves the sum of squared errors (SSE) for the specified distribution’s probability function when compared to the empirical frequencies of the dataset.

```python
phi.get_sse("weibull")
# -> 0.00215789
```

### 6. `phi.get_n_test_passed(id_distribution: str) -> int`

Indicates how many tests (among Chi-Square, Kolmogorov-Smirnov, and Anderson-Darling) did not reject the specified distribution.

```python
phi.get_n_test_passed("weibull")
# -> 2
```

### 7. `phi.get_n_test_null(id_distribution: str) -> int`

Indicates how many tests were not evaluated or not applicable, leaving the results as `None`. This situation can arise if certain metrics fail or if the distribution does not allow a specific test.

```python
phi.get_n_test_null("weibull")
# -> 0
```

---

## Usage Example

1. **Fitting a Dataset**

    ```python
    import phitter

    data = [ ... ]  # Dataset of numeric values
    phi = phitter.Phitter(data)
    phi.fit(n_workers=2)
    ```

2. **Retrieving the Best Distribution**

    ```python
    best_dist = phi.best_distribution
    # -> {
    #    "id": "weibull",
    #    "parameters": {
    #       ...
    #    }
    # }
    ```

3. **Summarizing Results**
    ```python
    summary_table = phi.summarize(k=10)
    display(summary_table)
    ```
4. **Distribution-Specific Statistics**

    ```python
    parameters = phi.get_parameters("weibull")
    chi_result = phi.get_test_chi_square("weibull")
    kolmo_result = phi.get_test_kolmogorov_smirnov("weibull")
    ```

5. **DataFrame of All Fitted Distributions**
    ```python
    df_all = phi.df_sorted_distributions
    display(df_all.head(10))
    ```

---

By combining these methods and properties, thorough insights into the fitted distributions can be obtained. Both high-level overviews (for example, `.best_distribution` and `.summarize()`) and detailed verification of individual distributions (for example, `get_test_chi_square(...)`, `get_parameters(...)`) are available to facilitate a rigorous analysis of the results.
