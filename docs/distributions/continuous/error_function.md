# ERROR FUNCTION DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ErrorFunction({"h": *})
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
$$ X\sim\mathrm{ErrorFunction}\left(h\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ h\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\Phi( \sqrt{2}hx ) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{h}{\sqrt{\pi}}e^{-h^{2}x^{2}} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\frac{\Phi^{-1}(u)}{\sqrt{2}h} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=0 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{1}{2h^{2}} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=0 $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=0 $$

**Additional Information and Definitions**
- $h:\text{Inverse of scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/error_function)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/error_function.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1QT1vSgTWVgDmNz4FrH3fhwRGpgvPohgqZSCADHfBXkM)
    