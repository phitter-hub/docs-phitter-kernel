# Quick Fit

A preliminary fit of any dataset can be performed using the following example. This approach automatically attempts to fit the dataset to every supported continuous distribution:

```python
import phitter

# Define the dataset
data: list[int | float] = [...]

# Instantiate the Phitter class and fit
phi = phitter.Phitter(data=data)
phi.fit(n_workers=4)
```

By default, this procedure evaluates all available continuous distributions. Further details and advanced options are provided in subsequent sections of the documentation.