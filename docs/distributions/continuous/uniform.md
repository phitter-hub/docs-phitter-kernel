# UNIFORM DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.UNIFORM({"a": *, "b": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PDF, PPF, PMF receive float or numpy.ndarray. For discrete distributions PMF instead of PDF. Parameters notation are in description of ditribution
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
$$ X\sim\mathrm{Uniform}\left(a,b\right) $$

**Distribution Domain**
$$ x\in [a,b] $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}, b\in\mathbb{R}, a < b $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{x-a}{b-a} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{b-a} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=a+u\cdot(b-a) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx=\frac{1}{k+1}\sum_{i=0}^k a^ib^{k-i} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\tfrac{1}{2}(a+b) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3-\frac{6}{5} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\tfrac{1}{2}(a+b) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)\in [a,b] $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/uniform)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/uniform.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1TSaKNHOsVLYUobyKTpHR6qCuCAgfkKmRSETvdeZLcw4)
    