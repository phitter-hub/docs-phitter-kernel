# Quick Fit

To fit a dataset in a **fast** way. You should use the following code.

```python
import phitter

## Define your dataset
data: list[int | float] = [...]

## Make a continuous fit using Phitter
phi = phitter.Phitter(data=data)
phi.fit()
```

In that way you will **fit** your dataset to any **_continuos distribution_**.

To use additional fit features or understanding your data, please continue this documentation.
