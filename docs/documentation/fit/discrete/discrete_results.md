# Discrete Fit Results

After running your fit, you can use other methods to review the results.

## Best Distribution

To see the best distribution for your data, use `.best_distribution`

```python
phi.best_distribution -> {"id": ..., "parameters": {...}}
```

## Summarize

To review the best `k` distributions for your data, use `.summarize()` that has the following parameters:

`k (int)`: Number of distributions to show. Defaults 20.

```python
phi.summarize() -> pd.DataFrame
```

## Sorted Distributions by SSE

To identify the best `n` distributions according to the SSE, use `.df_sorted_distributions_sse.head()` that has the following parameters:

`n (int)`: Number of distributions to show

```python
phi.df_sorted_distributions_sse.head(n=10) -> pd.DataFrame
```

## Getting information from the distributions

### Get parameters by `id_distribution`

To have the parameters of your distribution use the method `.get_parameters()` that has the following parameters:

`id_distribution (str)`: Name of the distribution that you need.

```python
phi.get_parameters(id_distribution="binomial") -> dict
```

> 💡 Remember to change `binomial` with the distribution that you need

### Get sum squared error by `id_distribution`

To have the sum squared error (SSE) of your distribution use the method `.get_sse()` that has the following parameters:

`id_distribution (str)`: Name of the distribution that you need.

```python
phi.get_sse(id_distribution="binomial") -> dict
```

> 💡 Remember to change `binomial` with the distribution that you need

### Get results of the kolmogorov smirnov by `id_distribution`

To have the results of the kolmogorov smirnov of your distribution use the method `.get_test_kolmogorov_smirnov()` that has the following parameters:

`id_distribution (str)`: Name of the distribution that you need.

```python
phi.get_test_kolmogorov_smirnov(id_distribution="binomial") -> dict
```

> 💡 Remember to change `binomial` with the distribution that you need
