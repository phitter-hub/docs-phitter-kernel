# LEVY DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.LEVY({"mu": *, "c": *})
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
$$ X\sim\mathrm{Levy}\left(\mu,c\right) $$

**Distribution Domain**
$$ x\in [\mu,\infty) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, c\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-\textrm{erf}\left(\sqrt{\frac{c}{2(x-\mu)}}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\sqrt{\frac{c}{2\pi}}~~\frac{e^{-\frac{c}{2(x-\mu)}}}{(x-\mu)^{3/2}} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu+\frac{c}{2\left(\textrm{erf}^{-1}(1-u)\right)^2} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{\mu }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\infty $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\infty $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\text{undefined} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\text{undefined} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu+\frac{c}{2(\textrm{erf}^{-1}(1/2))^2} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu+\frac{c}{3} $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $c:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\mathrm{erf}(x):\text{Error function}$
- $\mathrm{erf}^{-1}(x):\text{Inverse of error function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/levy)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/levy.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1OIA4C6iqhwK0Y17wb_O5ce9YXy4JIBf1yq3TqcmDp3U)
    