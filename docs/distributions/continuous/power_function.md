# POWER FUNCTION DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.POWER_FUNCTION({"alpha": *, "a": *, "b": *})
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
$$ X\sim\mathrm{PowerFunction}\left(\alpha,a,b\right) $$

**Distribution Domain**
$$ x\in\left[a,b\right] $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, a\in\mathbb{R}, b\in\mathbb{R}, a < b $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left(\frac{x-a}{b-a}\right)^{\alpha} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\alpha(x-a)^{\alpha-1}}{(b-a)^\alpha} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left[a+u(b-a)\right]^{-\alpha} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{a}^{b}x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{a+b\alpha}{\alpha+1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{2a^2+2ab\alpha+b^2\alpha(\alpha+1)}{(\alpha+1)(\alpha+2)}-\mathrm{Mean}(X)^{2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=2\left(1-\alpha\right)\sqrt{\frac{\alpha+2}{\alpha\left(\alpha+3\right)}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{6\left(\alpha^{3}-\alpha^{2}-6\alpha+2\right)}{\alpha\left(\alpha+3\right)\left(\alpha+4\right)}+3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\left[a+\frac{1}{2}(b-a)\right]^{-\alpha} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{undefined} $$

**Additional Information and Definitions**
- $a:\text{Location parameter}$
- $b-a:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/power_function)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/power_function.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1Hbi-XZiCK--JGFnoY-8iDLmNgYclDo5L4LKYKCCxfzw)
    