# EXPONENTIAL 2P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Exponential2P({"lambda": *, "loc": *})
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
$$ X\sim\mathrm{Exponential_{2P}}\left(\lambda,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\left[\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \lambda\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-e^{-\lambda (x-\text{Loc})} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\lambda e^{-\lambda (x-\text{Loc})} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}-\frac{\ln(1-u)}{\lambda} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{k!}{\lambda^{k}} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1}=\text{Loc}+\frac{1}{\lambda} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}=\frac{1}{\lambda^2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=2 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=9 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\frac{\ln 2}{\lambda} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Exponential}\left(\lambda\right)$
- $\text{Loc}:\text{Location parameter}$
- $\lambda:\text{Inverse of scale parameter}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/exponential_2p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/exponential_2p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1XtrdS8iSCM1l33rbaXSz1uWZ3vnQsYPK-07NYE-ZYBs)
    