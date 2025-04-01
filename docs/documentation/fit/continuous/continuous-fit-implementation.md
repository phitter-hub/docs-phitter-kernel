# Continuous Fit Implementation

A continuous fit can be performed by instantiating the `Phitter` class from the Phitter library. This class provides several parameters, each of which is summarized below:

-   **`data`** (`list[int | float]` or `numpy.ndarray`):  
    The dataset on which distributions are to be fitted.

-   **`fit_type`** (`str`, optional; default: `"continuous"`):  
    Indicates the type of distribution fitting. For continuous datasets, this parameter should be set to `"continuous"`.

-   **`num_bins`** (`int`, optional):  
    Specifies the number of bins to be used for histogram creation. If not defined, Phitter automatically determines the optimal bin count by applying Doane’s rule.

-   **`confidence_level`** (`float`, optional; default: `0.95`):  
    Denotes the confidence level for statistical tests designed to assess goodness-of-fit.

-   **`minimum_sse`** (`float`, optional; default: `numpy.inf`):  
    Establishes a threshold for the minimum sum of squared errors (SSE). Any distribution whose SSE surpasses this value is excluded from consideration.

-   **`subsample_size`** (`int`, optional; default: `None`):  
    Specifies the size of a randomly drawn subset of the dataset, if subsampling is necessary for distribution fitting.

-   **`subsample_estimation_size`** (`int`, optional; default: `None`):  
    Determines the size of a random subset used exclusively to estimate parameters for each distribution, if parameter estimation subsampling is required.

-   **`distributions_to_fit`** (`list[str]` or `"all"`, optional; default: `"all"`):  
    Identifies which distributions are evaluated during fitting. Accepts either a list of specific distributions (see [distributions documentation](/documentation/distributions/continuous-distributions)) or the string `"all"` to fit every available distribution.

-   **`exclude_distributions`** (`list[str]` or `str`, optional; default: `"any"`):  
    Specifies distributions that must be explicitly excluded from fitting. If set to `"any"`, no distributions are excluded.

**Example of a basic continuous fit**  
When no additional parameters are specified, the following code performs a simple continuous fit:

```python
import phitter

# Define the dataset
data: list[int | float] = [...]

# Perform a continuous fit using default settings
phi = phitter.Phitter(data=data)
phi.fit(n_workers=4)
```

**Example of a more comprehensive continuous fit**  
The code snippet below demonstrates how to configure additional parameters, such as the confidence level or minimum SSE threshold:

```python
import phitter

# Define the dataset
data: list[int | float] = [...]

# Execute a continuous fit with specified parameters
phi = phitter.Phitter(
    data=data,
    fit_type="continuous",
    num_bins=15,
    confidence_level=0.95,
    minimum_sse=1e-2,
    distributions_to_fit=["beta", "normal", "fatigue_life", "triangular"]
)
phi.fit(n_workers=4)
```

After creating and initializing the `Phitter` class with the chosen parameters, the fitting procedure is started by invoking the `.fit()` method. This method systematically evaluates each specified distribution, computes various goodness-of-fit measures, and then ranks the fitted distributions according to the sum of squared errors and test rejections.
