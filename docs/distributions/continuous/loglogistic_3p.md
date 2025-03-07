# LOGLOGISTIC 3P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.LOGLOGISTIC_3P({"loc": *, "alpha": *, "beta": *})
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
$$ X\sim\mathrm{LogLogistic_{3P}}\left(\text{Loc},\alpha,\beta\right) $$

**Distribution Domain**
$$ x\in [\text{Loc},\infty) $$

**Parameters Domain and Constraints**
$$ \text{Loc}\in\mathbb{R}, \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{1+((x-\text{Loc})/\alpha)^{-\beta}} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{ (\beta/\alpha)((x-\text{Loc})/\alpha)^{\beta-1} }{ \left (1+((x-\text{Loc})/\alpha)^{\beta}\right)^2  } $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\alpha\left(\frac{u}{1-u}\right)^{1/\beta} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\alpha^k \text{Beta}(1-k/\beta,1+k/\beta)=\alpha^k\,\frac{k\pi/\beta}{\sin(k\pi/\beta)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\alpha $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\alpha\left(\frac{\beta-1}{\beta+1}\right)^{1/\beta} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{LogLogistic}\left(\alpha,\beta\right)$
- $\text{Loc}:\text{Location parameter}$
- $\alpha:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/loglogistic_3p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/loglogistic_3p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1RaLZ5L0rTrv9_fAi6izElf02ucuFy9LwagL_gQn3R0Y)
    