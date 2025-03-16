# Quick Example

To use a [distribution](/documentation/distributions/continuous_distributions), follow the steps below.

> **Example:** This demonstration utilizes the [Normal](/documentation/distributions/continuous/normal) distribution.

## Creating a Distribution

A distribution can be instantiated by providing the required parameters to the respective function:

```python
distribution = phitter.continuous.Normal({"mu": 5, "sigma": 2})
```

> 💡 Replace `Normal` with the desired distribution and adjust the parameters accordingly.

## Retrieving Distribution Metrics

### Cumulative Distribution Function (CDF)

Computes the probability that a random variable is less than or equal to a specified value:

```python
distribution.cdf(3.56446)
```

### Probability Density Function (PDF)

Evaluates the likelihood of the variable taking a specific value:

```python
distribution.pdf(3.56446)
```

### Percent Point Function (PPF)

Determines the quantile function, which is the inverse of the CDF:

```python
distribution.ppf(0.6344)
```

### Sampling from the Distribution

Generates a sample dataset of the specified size:

```python
data = distribution.sample(1000)
```

## Statistical Properties

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

This example provides a fundamental workflow for utilizing distributions in Phitter. Additional functionalities and customizations can be explored in the full documentation.
