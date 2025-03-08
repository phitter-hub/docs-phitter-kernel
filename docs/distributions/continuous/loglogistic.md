# LOGLOGISTIC DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.LogLogistic({"alpha": *, "beta": *})
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
$$ X\sim\mathrm{LogLogistic}\left(\alpha,\beta\right) $$

**Distribution Domain**
$$ x\in [0,\infty) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{1+(x/\alpha)^{-\beta}} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{ (\beta/\alpha)(x/\alpha)^{\beta-1} }{ \left (1+(x/\alpha)^{\beta}\right)^2  } $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\alpha\left(\frac{u}{1-u}\right)^{1/\beta} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{k}f_{X}\left(x\right)dx=\alpha^k \text{Beta}(1-k/\beta,1+k/\beta)=\alpha^k\,\frac{k\pi/\beta}{\sin(k\pi/\beta)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\alpha $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\alpha\left(\frac{\beta-1}{\beta+1}\right)^{1/\beta} $$

**Additional Information and Definitions**
- $\alpha:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/loglogistic)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/loglogistic.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1WWXRuI6AP9n_n47ikOHWUjkfCYUOQgzhDjRsKBKEHXA)
    