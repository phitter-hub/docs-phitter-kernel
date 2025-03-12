# Create Continuous Fit

To create a continuos fit you will need to use the class `.Phitter` that has the following parameters:

- `data (list[int | float] or numpy.ndarray)`: The dataset to fit the distributions to.
- `fit_type (str, optional)`: The type of fit, either "continuous" or "discrete" (default is "continuous").
- `num_bins (int, optional)`: The number of bins to use for the histogram if the fit type is "continuous" (default is calculated using Doane's rule).
- `confidence_level (float, optional)`: The confidence level for the distribution fitting (default is 0.95).
- `minimum_sse (float, optional)`: The minimum sum of squared errors (default is numpy.inf).
- `subsample_size (int, optional)`: The size of the subsample to use for fitting (default is None).
- `subsample_estimation_size (int, optional)`: The size of the subsample used to estimate the parameters of each distribution (default is None).
- `distributions_to_fit (list[str] or str, optional)`: The list of [distributions](/documentation/distributions/distributions.md) to fit or "all" to fit all available distributions (default is "all").
- `exclude_distributions (list[str] or str, optional)`: The list of [distributions](/documentation/distributions/distributions.md) to exclude or "any" to exclude none (default is "any").

To do a basic fit, you should only use `data`

```python
import phitter

## Define your dataset
data: list[int | float] = [...]

## Make a continuous fit using Phitter
phi = phitter.PHITTER(data=data)
```

To use more parameters do it as follows

```python
import phitter

## Define your dataset
data: list[int | float] = [...]

## Make a continuous fit using Phitter
phi = phitter.Phitter(
    data=data,
    fit_type="continuous",
    num_bins=15,
    confidence_level=0.95,
    minimum_sse=1e-2,
    distributions_to_fit=["beta", "normal", "fatigue_life", "triangular"],
)
```
