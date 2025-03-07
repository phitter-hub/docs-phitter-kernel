# MOYAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.MOYAL({"mu": *, "sigma": *})
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
$$ X\sim\mathrm{Moyal}\left(\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-\text{P}\left(\frac{1}{2},\frac{e^{-z(x)}}{2}\right)=1-\mathrm{erf}\left(\frac{\exp\left(-0.5z(x)\right)}{\sqrt{2}}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\sqrt{2\pi}}\exp\left(-\frac{1}{2}\left(z(x)+e^{-z(x)}\right)\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu+\sigma\ln\left[\Phi^{-1}\left(\left(\frac{1-u}{2}\right)^{2}\right)\right]=\mu+\sigma\ln\left[2\text{P}^{-1}\left(\frac{1}{2},1-u\right)\right] $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\mu+\sigma(\ln(2)+\gamma) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\sigma^{2}\left(\frac{\pi^{2}}{2}\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{28\sqrt{2}\zeta(3)}{\pi^{3}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=7 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu+\sigma\ln\left[2\text{P}^{-1}\left(\frac{1}{2},\frac{1}{2}\right)\right] $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$
- $\mathrm{erf}(x):\text{Error function}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$
- $\gamma:\text{Euler-Mascheroni constant}=0.5772156649$
- $\zeta(3):\text{ApÃ©ry's constant}=1.2020569031$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/moyal)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/moyal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1_58zWuk_-wSEesJbCc2FTHxv4HO5WouGwlStIZitt1I)
    