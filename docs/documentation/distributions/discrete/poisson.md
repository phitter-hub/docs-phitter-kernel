# POISSON DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.Poisson({"lambda": *})
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
$$ X\sim\mathrm{Poisson}\left(\lambda\right) $$

**Distribution Domain**
$$ x\in\mathbb{N}\equiv \left\{0,1,2,\dots\right\} $$

**Parameters Domain and Constraints**
$$ \lambda\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=e^{-\lambda} \sum_{i=0}^{x} \frac{\lambda^i}{i!}=1-\frac{\gamma(x+1, \lambda)}{x!}=1-P(x-1,\lambda) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\lambda^x e^{-\lambda}}{x!} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\arg\min_{x}\left| F_{X}\left(x\right)-u \right| $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=0}^{\infty}x^{k}f_{X}\left(x\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\lambda $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=\lambda $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\lambda^{-1/2} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\lambda^{-1} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\lfloor\lambda+1/3-0.02/\lambda\rfloor $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\lfloor\lambda\rfloor $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function} \\ \text{is not feasible. However, it is possible to calculate the Percentile Point Function by} \\ \text{approximating it to the nearest integer.}$
- $u:\text{Uniform[0,1] random varible}$
- $\lfloor{x}\rfloor: \text{Floor function}$
- $P\left(a,x \right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\gamma\left(a,x \right):\text{Lower incomplete Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/poisson)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/poisson.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1fwoe70JH5Ve6sETb7AwBdb4eep_h2DeGlpHIWcHeZA8)
    