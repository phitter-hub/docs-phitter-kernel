# HYPERBOLIC SECANT DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.HYPERBOLIC_SECANT({"mu": *, "sigma": *})
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
$$ X\sim\mathrm{HyperbolicSecant}\left(\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{2}{\pi} \arctan\left[\exp\!\left(\frac{\pi}{2}\,z(x)\right)\right] $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{2\sigma} \operatorname{sech}\!\left(\frac{\pi}{2}\,z(x)\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu+\sigma\frac{2}{\pi}\,\ln\!\left[\tan\left(\frac{\pi}{2}\,u\right)\right] $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{-\infty}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{1+\left(-1\right)^{k}}{2\pi2^{2k}}k!\left[\zeta\left(k+1,\frac{1}{4}\right)-\zeta\left(k+1,\frac{3}{4}\right)\right] $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu+\sigma\tilde{\mu}'_{1}=\mu $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\sigma^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\sigma^{2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{HyperbolicSecant}\left(0,1\right)$
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$
- $\zeta(a,s):\text{Hurwitz zeta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/hyperbolic_secant)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/hyperbolic_secant.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1lTcLlwX0fmgUjhT4ljvKL_dqSReK_lEthsZNBtDxAF8)
    