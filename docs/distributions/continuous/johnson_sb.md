# JOHNSON SB DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.JOHNSON_SB({"xi": *, "lambda": *, "gamma": *, "delta": *})
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
$$ X\sim\mathrm{JohnsonSB}\left(\xi,\lambda,\gamma,\delta\right ) $$

**Distribution Domain**
$$ x\in\left(\xi,\xi+\lambda\right) $$

**Parameters Domain and Constraints**
$$ \xi\in\mathbb{R}, \lambda\in\mathbb{R}^{+}, \gamma\in\mathbb{R}, \delta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\Phi\left(\gamma+\delta\ln\frac{z(x)}{1-z(x)}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\delta}{\lambda\sqrt{2\pi}z(1-z(x))}\exp\left[-\frac{1}{2}\left(\gamma+\delta\ln\frac{z(x)}{1-z(x)}\right)^2\right] $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\frac{\lambda\exp\left(\frac{\Phi^{-1}(u)-\gamma}{\delta}\right)}{1+\exp\left(\frac{\Phi^{-1}(u)-\gamma}{\delta}\right)}+\xi $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{\xi}^{\xi+\lambda }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\frac{\lambda\exp\left(\frac{\Phi^{-1}\left(1/2\right)-\gamma}{\delta}\right)}{1+\exp\left(\frac{\Phi^{-1}\left(1/2\right)-\gamma}{\delta}\right)}+\xi $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{x}f_{X}\left(x\right) $$

**Additional Information and Definitions**
- $\xi:\text{Location parameter}$
- $\lambda:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\xi\right)/\lambda$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/johnson_sb)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/johnson_sb.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1H3bpJd729k0VK3LtvgxvKJiduIdP04UkHhgJoq4ayHQ)
    