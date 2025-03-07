# LOGARITHMIC DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.LOGARITHMIC({"p": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PDF, PPF, PMF receive float or numpy.ndarray. For discrete distributions PMF instead of PDF. Parameters notation are in description of ditribution
distribution.cdf(int | numpy.ndarray) # -> float | numpy.ndarray
distribution.pdf(int | numpy.ndarray) # -> float | numpy.ndarray
distribution.ppf(int | numpy.ndarray) # -> float | numpy.ndarray
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
$$ X\sim\mathrm{Logarithmic}\left(p\right) $$

**Distribution Domain**
$$ x\in\mathbb{N}_{\geqslant 1}\equiv \left\{1,2,\dots\right\} $$

**Parameters Domain and Constraints**
$$ p\in\left(0,1\right)\subseteq\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\sum_{i=0}^{x}\frac{1}{-\ln(1 - p)} \frac{p^i}{i} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{-\ln(1 - p)} \frac{p^x}{x} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\arg\min_{x}\left| F_{X}\left(x\right)-u \right| $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=0}^{\infty}x^{k}f_{X}\left(x\right)=\frac{(k - 1)!}{-\ln(1 - p)} \left(\frac{p}{1 - p}\right)^k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{1}{-\ln(1 - p)} \frac{p}{1 - p} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=-\frac{p^2 + p\ln(1-p)}{(1-p)^2(\ln(1-p))^2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(0.5\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=1 $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function} \\ \text{is not feasible. However, it is possible to calculate the Percentile Point Function by} \\ \text{approximating it to the nearest integer.}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/logarithmic)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/logarithmic.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1N-YXrSfOYkPKwerL5I1QmfxuwbZzVUzgBWTcKzcmLhE)
    