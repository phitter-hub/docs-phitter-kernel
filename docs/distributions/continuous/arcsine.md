# ARCSINE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ARCSINE({"a": *, "b": *})
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
$$ X\sim\mathrm{Arcsine}\left(a,b\right) $$

**Distribution Domain**
$$ x\in\left(a,b\right) $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}, b\in\mathbb{R}, a < b $$

**Cumulative Distribution Function**
$$ F_{X}(x)=\frac{2}{\pi}\arcsin\left(\sqrt\frac{x-a}{b-a}\right) $$

**Probability Density Function**
$$ f_{X}(x)=\frac{1}{\pi\sqrt{(x-a)(b-x)}} $$

**Percent Point Function / Sample**
$$ F_{X}^{-1}\left(u\right)=a+\left(b-a\right)\times \sin^{2}\left(\frac{\pi}{2}u\right) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{1}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{1}{\pi}\text{Beta}\left(\frac{1}{2},k+\frac{1}{2}\right)=\frac{\left(2k-1\right)!!}{2^{k}k!} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=a+\tilde{\mu}'_{1}\left(b-a\right)= a+\frac{1}{2}\left(b-a\right) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(b-a\right)^{2}\times (\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\frac{\left(b-a\right)^{2}}{8} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3-\frac{3}{2} $$

**Parametric Median**
$$ \mathrm{Median}(X)=a+\left(b-a\right)\times \sin^{2}\left(\frac{\pi}{4}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{undefined} $$

**Additional Information and Definitions**
- $\tilde{X}\sim \mathrm{Arcsine}\left(0,1\right)$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/arcsine)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/arcsine.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1q8SKX4gmSbpGzimRvjopzaZ4KrEV5NY1EPmf1G1T7NQ)
    