# GENERALIZED PARETO DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GENERALIZED_PARETO({"c": *, "mu": *, "sigma": *})
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
$$ X\sim\mathrm{GeneralizedPareto}\left(c,\mu,\sigma\right) $$

**Distribution Domain**
$$ \text{if }c\geqslant 0:\ x\in\left(\mu,\infty\right),\quad \text{if }c<0:\ x\in\left(-\infty,\mu-\frac{\sigma}{c}\right) $$

**Parameters Domain and Constraints**
$$ c\in\mathbb{R}, \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-(1+c z(x))^{-1/c} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\sigma}(1+c z(x))^{-(1/c +1)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu+\frac{\sigma (u^{-c}-1)}{c} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty}^{\infty}x^{k}f_{X}\left(x\right)dx=\frac{\left(-1\right)^{k}}{c^{k}}\sum_{i=0}^{k}\binom{k}{i}\frac{\left(-1\right)^{i}}{1-ci}\quad \text{if }<\frac{1}{k} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu+\sigma\mu'_{1}=\mu+\frac{\sigma}{1-c} \quad \text{if } c<1 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\sigma^2(\mu'_{2}-\mu'^{2}_{1})=\frac{\sigma^2}{(1-c)^2(1-2c)} \quad \text{if } c<1/2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2(1+c)\sqrt{1-2c}}{(1-3c)} \quad \text{if } c<1/3 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{3(1-2c)(2c^2+c+3)}{(1-3c)(1-4c)} \quad \text{if } c<1/4 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu+\frac{\sigma( 2^{c} -1)}{c} $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/generalized_pareto)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/generalized_pareto.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1E28WYhX4Ba9Nj-JNxqAm-Gh7o1EOOIOwXIdCFl1PXI0)
    