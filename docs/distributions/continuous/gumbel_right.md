# GUMBEL RIGHT DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GumbelRight({"mu": *, "sigma": *})
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
$$ X\sim\mathrm{GumbelRight}\left(\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\exp\left(-e^{-z(x)}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\sigma}\exp\left(-\left(z(x)+e^{-z(x)}\right)\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\tilde{\mu}-\sigma\ln\left(-\ln\left(u\right)\right) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{-\infty}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu+\sigma\tilde{\mu}'_{1}=\mu+\gamma\sigma $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\sigma^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\sigma^{2}\frac{\pi^{2}}{6} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{12\sqrt{6}\zeta(3)}{\pi^{3}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3+\frac{12}{5} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu-\sigma\ln\left(-\ln\left(\frac{1}{2}\right)\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{GumbelRight}\left(0,1\right)$
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$
- $\gamma:\text{Euler-Mascheroni constant}=0.5772156649$
- $\zeta(3):\text{ApÃ©ry's constant}=1.2020569031$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/gumbel_right)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/gumbel_right.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1CpzfSwAdptFrI8DhV3tWRsEFd9cr6h3Jaj7t3gigims)
    