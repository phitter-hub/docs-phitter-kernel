# GENERALIZED GAMMA DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GENERALIZED_GAMMA({"a": *, "d": *, "p": *})
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
$$ X\sim\mathrm{GeneralizedGamma}\left(a,d,p\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, d\in\mathbb{R}^{+}, p\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\text{P}(d/p,(x/a)^p)=\frac{\gamma(d/p,(x/a)^p)}{\Gamma(d/p)} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{p/a^d}{\Gamma(d/p)} x^{d-1}e^{-(x/a)^p} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=a\text{P}^{-1}\left(\frac{d}{p},u\right)^{\frac{1}{p}} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{k}f_{X}\left(x\right)dx=a^k\frac{\Gamma (\frac{d+k}{p})}{\Gamma(\frac{d}{p})} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=a\text{P}^{-1}\left(\frac{d}{p},\frac{1}{2}\right)^{\frac{1}{p}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=a\left(\frac{d-1}{p}\right)^{\frac{1}{p}} \quad \text{if } d>1 $$

**Additional Information and Definitions**
- $a:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/generalized_gamma)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/generalized_gamma.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1xx8b_VSG4jznZzaKq2yKumw5VcNX5Wj86YqLO7n4S5A)
    