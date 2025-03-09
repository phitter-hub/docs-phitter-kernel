# Quick Example

If you want to use a [distribution](/documentation/distributions/distributions) you can do the following:

> For this example we will use [Normal](/documentation/distributions/continuous/folded_normal) distribution

## Create a Distribution

You just need to add the parameters to the needed function

```python
distribution = phitter.continuous.Normal({"mu": 5, "sigma": 2})
```

> 💡 Remember to change `Normal` with the distribution and parameters that you need

## Get different metrics from the distribution

### Generate Cumulative Distribution

```python
distribution.cdf(3.56446)
```

### Probability density function

```python
distribution.pdf(3.56446)
```

### Percent point function

```python
distribution.ppf(0.6344)
```

### Sample Data

```python
data = distribution.sample(1000)
```

## Get Stats

### Mean

```python
distribution.mean
```

### Variance

```python
distribution.variance
```

### Skewness

```python
distribution.skewness
```

### Kurtosis

```python
distribution.kurtosis
```

### Median

```python
distribution.median
```

### Mode

```python
distribution.mode
```
