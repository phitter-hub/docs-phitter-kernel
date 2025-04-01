# Speeding Up the Fitting Process for Large Datasets

When dealing with extensive datasets, Phitter provides two primary strategies to accelerate the fitting procedure:

-   **Strategy 1**: Specify a subsample size smaller than the original dataset by using the `subsample_size` parameter. A subsample size under 100,000 is recommended. Phitter will randomly select observations up to the specified limit. Detailed usage information is located in the sections [Create Continuous Fit](/documentation/fit/continuous/continuous-fit-implementation) and [Create Discrete Fit](/documentation/fit/discrete/discrete-fit-implementation).

-   **Strategy 2**: Specify a smaller subsample for parameter estimation by using the `subsample_estimation_size` parameter. A subsample size under 10,000 is suggested. In this approach, Phitter will draw a random subsample to estimate distribution parameters. Additional instructions appear in the sections [Create Continuous Fit](/documentation/fit/continuous/continuous-fit-implementation) and [Create Discrete Fit](/documentation/fit/discrete/discrete-fit-implementation).

Either of these strategies—or both in combination—may be implemented to achieve improved performance. For instance:

```python
import phitter

# Defining a dataset
data: list[int | float] = [...]

# Applying both subsample strategies
phi = phitter.Phitter(
    data=data,
    subsample_size=10000,
    subsample_estimation_size=10000,
)
phi.fit(n_workers=4)
```

By specifying these parameters, it is possible to reduce computational overhead significantly, particularly when the original dataset is very large.

## Example

This tutorial shows how to fit a million data points in less than 20 seconds on a Google Colab standard instance.

|             Tutorial             |                                                                                                               Notebooks                                                                                                               |
| :------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Fit Accelerate [Sample>100K]** | <a target="_blank" href="https://colab.research.google.com/github/phitterio/phitter-kernel/blob/main/examples/fit/fit_accelerate.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a> |
