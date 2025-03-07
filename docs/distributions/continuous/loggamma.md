# LOGGAMMA DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.LOGGAMMA({"c": *, "mu": *, "sigma": *})
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
$$ X\sim\mathrm{LogGamma}\left(c,\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ c\in\mathbb{R}^{+}, \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{\gamma\left(c,e^{x}\right)}{\Gamma\left(c\right)}=\text{P}\left(c,e^{z(x)}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\exp\left(cz(x)-e^{z(x)}\right)}{\sigma\Gamma\left(c\right)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu+\sigma\ln\left(\text{P}^{-1}\left(u,c\right)\right) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\mu+\sigma\psi_{0} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\alpha^{2}\psi_{1}\left(c\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{\psi_{2}\left(c\right)}{\psi_{1}\left(c\right)} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{\psi_{3}\left(c\right)}{\psi_{1}\left(c\right)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu+\sigma\ln\left(\text{P}^{-1}\left(1/2,c\right)\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu+\sigma\ln(c) $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$
- $\psi_{0}\left(x\right):\text{Digamma function}$
- $\psi_{n}\left(x\right):\text{Polygamma function of order }n\in\mathbb{N}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/loggamma)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/loggamma.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1SXCmxXs7hkajo_W_qL-e0MJQEaUJqTpUno1nYGXxmxI)
    