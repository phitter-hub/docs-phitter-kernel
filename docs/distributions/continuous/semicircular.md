# SEMICIRCULAR DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.SEMICIRCULAR({"loc": *, "R": *})
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
$$ X\sim\mathrm{Semicircular}\left(\text{Loc},R\right) $$

**Distribution Domain**
$$ x\in\left[\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \text{Loc}\in\mathbb{R}, R\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac12+\frac{z(x)\sqrt{R^2-z(x)^2}}{\pi R^2}+\frac{\arcsin\!\left(\frac{z(x)}{R}\right)}{\pi} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac2{\pi R^2}\,\sqrt{R^2-z(x)^2} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+R\times (2I^{-1}\left(u,1.5,1.5\right)-1) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{\text{Loc}}^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\text{Loc} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{R^2}{4} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=2 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc} $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $R:\text{Scale parameter}$
- $z\left(x\right)= x-\text{Loc}$
- $u:\text{Uniform[0,1] random varible}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/semicircular)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/semicircular.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/195c9VbAKtvEndJKnFp52TrENYK2iytMzIXLMKFAGgx4)
    