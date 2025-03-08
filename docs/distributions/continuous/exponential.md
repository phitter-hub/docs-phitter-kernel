# EXPONENTIAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Exponential({"lambda": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PDF, PPF receive float or numpy.ndarray.
distribution.cdf(float | numpy.ndarray) # -> float | numpy.ndarray
distribution.pdf(float | numpy.ndarray) # -> float | numpy.ndarray
distribution.ppf(float | numpy.ndarray) # -> float | numpy.ndarray
distribution.sample(int) # -> numpy.ndarray

## STATS
distribution.mean # -> float
distribution.variance # -> float
distribution.standard_deviation # -> float
distribution.skewness # -> float
distribution.kurtosis # -> float
distribution.median # -> float
distribution.mode # -> float
```

## Equations

**Distribution Definition**
$$ X\sim\mathrm{Exponential}\left(\lambda\right) $$

**Distribution Domain**
$$ x\in [0,\infty)  $$

**Parameters Domain and Constraints**
$$ \lambda\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-e^{-\lambda x} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\lambda e^{-\lambda x} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=-\frac{\ln(1-u)}{\lambda} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{n}f_{X}\left(x\right)dx=\frac{k!}{\lambda^{k}} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{1}{\lambda} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{1}{\lambda^2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=2 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=9 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\frac{\ln 2}{\lambda} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=0 $$

**Additional Information and Definitions**
- $\lambda:\text{Inverse of scale parameter}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/exponential)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/exponential.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1c8aCgHTq3fEyIkVM1Ph3fzebxQMuourz1UkWbH4h3HA)
    