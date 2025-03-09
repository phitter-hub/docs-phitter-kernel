# HYPERGEOMETRIC DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.Hypergeometric({"N": *, "K": *, "p": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PMF, PPF receive float or numpy.ndarray.
distribution.cdf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.pmf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.ppf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.sample(int) # -> numpy.ndarray

## STATS
distribution.mean # -> float
distribution.variance # -> float
distribution.standard_deviation # -> float
distribution.skewness # -> float
distribution.kurtosis # -> float
distribution.median # -> int
distribution.mode # -> int
```

## Equations

**Distribution Definition**
$$ X\sim\mathrm{Hypergeometric}\left(N,K,n\right) $$

**Distribution Domain**
$$ x\in\left\{\max{(0,n+K-N)}, \min{(n, K )}\right\} $$

**Parameters Domain and Constraints**
$$ N\in\mathbb{N}, K\in\left\{0\dots N\right\}, n\in\left\{0\dots N\right\} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\sum_{i=0}^{x}\binom{K}{i}\binom{N-K}{n-i}\bigg/\binom{N}{n} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\binom{K}{x}\binom{N-K}{n-x}\bigg/\binom{N}{n} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\arg\min_{x}\left| F_{X}\left(x\right)-u \right| $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=\max{(0,n+K-N)}}^{\min{(n, K )}}x^{k}f_{X}\left(x\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{nK}{N} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=n\frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{(N-2K)(N-1)^\frac{1}{2}(N-2n)}{[nK(N-K)(N-n)]^\frac{1}{2}(N-2)} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{1}{n K(N-K)(N-n)(N-2)(N-3)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(0.5\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\left \lfloor \frac{(n+1)(K+1)}{N+2} \right \rfloor $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function} \\ \text{is not feasible. However, it is possible to calculate the Percentile Point Function by} \\ \text{approximating it to the nearest integer.}$
- $u:\text{Uniform[0,1] random varible}$
- $\lfloor{x}\rfloor: \text{Floor function}$
- $\lceil{x}\rceil: \text{Ceiling Function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/hypergeometric)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/hypergeometric.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/10xUqKVoFzUiukuYt6VFwlaetMDTdGulHQPEWl1rJiMA)
    