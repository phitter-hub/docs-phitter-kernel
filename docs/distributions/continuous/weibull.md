# WEIBULL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.WEIBULL({"alpha": *, "beta": *})
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
$$ X\sim\mathrm{Weibull}\left(\alpha,\beta\right) $$

**Distribution Domain**
$$ x\in [0,\infty) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-e^{-(x/\beta)^\alpha} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\alpha}{\beta}\left(\frac{x}{\beta}\right)^{\alpha-1}e^{-(x/\beta)^\alpha} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\beta(-\ln(1-u))^{1/\alpha} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty }x^{k}f_{X}\left(x\right)dx=\beta^\alpha \Gamma\left(1+\frac{k}{\alpha}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\beta\cdot\Gamma(1+1/\alpha) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\beta^2\left[\Gamma\left(1+2/\alpha\right)-\left(\Gamma\left(1+1/\alpha\right)\right)^2\right] $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\beta(\ln(2))^{1/\alpha} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\left\{\begin{array}{cl} \beta\left(\frac{\alpha-1}{\alpha}\right)^{1/\alpha} & \text{if }\alpha>1\\ 0 & \text{if } \alpha\leq 1 \end{array} \right. $$

**Additional Information and Definitions**
- $\beta:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/weibull)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/weibull.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1DdNwWHmu0PZAhMYf475EMU3scTMXok3wOhzsg7gn8Ek)
    