# GENERALIZED GAMMA 4P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GENERALIZED_GAMMA_4P({"a": *, "d": *, "p": *, "loc": *})
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
$$ X\sim\mathrm{GeneralizedGamma_{4P}}\left(a,d,p,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, d\in\mathbb{R}^{+}, p\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\text{P}(d/p,((x-\text{Loc})/a)^p)=\frac{\gamma(d/p,((x-\text{Loc})/a)^p)}{\Gamma(d/p)} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{p/a^d}{\Gamma(d/p)} (x-\text{Loc})^{d-1}e^{-((x-\text{Loc})/a)^p} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+a\text{P}^{-1}\left(\frac{d}{p},u\right)^{\frac{1}{p}} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=a^k\frac{\Gamma (\frac{d+k}{p})}{\Gamma(\frac{d}{p})} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+a\text{P}^{-1}\left(\frac{d}{p},\frac{1}{2}\right)^{\frac{1}{p}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+a\left(\frac{d-1}{p}\right)^{\frac{1}{p}} \quad \text{if } d>1 $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{GeneralizedGamma}\left(a,d,p\right)$
- $\text{Loc}:\text{Location parameter}$
- $a:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/generalized_gamma_4p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/generalized_gamma_4p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1TN72MSkZ2bRyoNy29h4VIxFudXAroSi1PnmFijPvO0M)
    