# Create Discrete Fit

To perform a discrete fit, the `Phitter` class must be instantiated. The class accepts several parameters, described below:

-   **`data`** (`list[int | float]` or `numpy.ndarray`):  
    Dataset to which discrete probability distributions will be fitted.

-   `fit_type` (_str, optional_):  
    Specifies the fitting approach. Use `"discrete"` when dealing with discrete data (default is `"continuous"`).

-   `confidence_level` (_float, optional_):  
    Confidence level employed in the goodness-of-fit tests for evaluating distribution adequacy. Default is `0.95`.

-   `minimum_sse` (_float, optional_):  
    Threshold of minimum sum of squared errors (SSE) for including distributions in the fitting results. Default is `numpy.inf` (no restriction).

-   `subsample_size` (_int, optional_):  
    Size of a randomly drawn subset from the dataset for analysis. Default is `None`, meaning the entire dataset is used.

-   `subsample_estimation_size` (_int, optional_):  
    Size of a random subset utilized specifically for parameter estimation of the distributions. Default is `None`.

-   `distributions_to_fit` (_list[str] or "all", optional_):  
    List specifying discrete distributions to consider in the analysis. Refer to the [Discrete Distributions Documentation](/documentation/distributions/discrete_distributions) for available identifiers. The default value `"all"` fits all available discrete distributions.

-   `exclude_distributions` (_list[str] or "any", optional_):  
    Identifies distributions explicitly excluded from the fitting procedure. Default is `"any"`, indicating no exclusions.

### Basic Discrete Fit Implementation

A basic discrete distribution fit using default parameters is illustrated below:

```python
import phitter

# Define the dataset
data: list[int | float] = [...]

# Instantiate and perform discrete fit
phi = phitter.Phitter(
    data=data,
    fit_type="discrete"
)
phi.fit(n_workers=4)
```

### Extended Parameter Configuration

For a detailed discrete distribution fit specifying particular parameters, the following implementation can be used:

```python
import phitter

# Define the dataset
data: list[int | float] = [...]

# Perform discrete fit with additional settings
phi = phitter.Phitter(
    data=data,
    fit_type="discrete",
    confidence_level=0.95,
    minimum_sse=1e-2,
    distributions_to_fit=["binomial", "geometric"]
)
phi.fit(n_workers=4)
```

Upon completing the fitting process, further evaluation of distribution fitting results can be carried out using methods documented in subsequent sections.
