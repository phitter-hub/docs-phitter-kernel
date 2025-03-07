# JOHNSON SU DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.JOHNSON_SU({"xi": *, "lambda": *, "gamma": *, "delta": *})
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
$$ X\sim\mathrm{JohnsonSU}\left(\xi,\lambda,\gamma,\delta\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \xi\in\mathbb{R}, \lambda\in\mathbb{R}^{+}, \gamma\in\mathbb{R}, \delta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\Phi\left(\gamma+\delta\sinh^{-1}(z(x))\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\delta}{\lambda\sqrt{2\pi}\sqrt{z(x)^2+1}}\exp\left[-\frac{1}{2}\left(\gamma+\delta\sinh^{-1}(z(x))\right)^2\right] $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\lambda\sinh\left(\frac{\Phi^{-1}(u)-\gamma}{\delta}\right)+\xi $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\xi-\lambda \exp\frac{\delta^{-2}}{2} \sinh\left(\frac{\gamma}{\delta}\right) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{\lambda^2}{2} (\exp(\delta^{-2})-1)\left(\exp(\delta^{-2}) \cosh\left(\frac{2\gamma}{\delta}\right) +1\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=-\frac{\lambda^{3}\sqrt{e^{\delta^{-2}}}(e^{\delta^{-2}}-1)^{2}(e^{\delta^{-2}})(e^{\delta^{-2}}+2)\sinh(\frac{3\gamma}{\delta})+3\sinh(\frac{2\gamma}{\delta}))}{4\mathrm{Variance}(X)^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{\lambda^{4}(e^{\delta^{-2}}-1)^{2}(K_{1}+K_{2}+K_{3})}{8\mathrm{Variance}(X)^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\xi+\lambda \sinh\left(-\frac{\gamma}{\delta}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{x}f_{X}\left(x\right) $$

**Additional Information and Definitions**
- $\xi:\text{Location parameter}$
- $\lambda:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\xi\right)/\lambda$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$
- $K_{1}=\left(e^{\delta^{-2}}\right)^{2}\left(\left(e^{\delta^{-2}}\right)^{4}+2\left(e^{\delta^{-2}}\right)^{3}+3\left(e^{\delta^{-2}}\right)^{2}-3\right)\cosh\left(\frac{4\gamma}{\delta}\right)$
- $K_{2}=4\left(e^{\delta^{-2}}\right)^{2}\left(\left(e^{\delta^{-2}}\right)+2\right)\cosh\left(\frac{3\gamma}{\delta}\right)$
- $K_{3}=3\left(2\left(e^{\delta^{-2}}\right)+1\right)$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/johnson_su)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/johnson_su.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/15kw_NZr3RFjN9orvF844ITWXroWRsCFkY7Uvq0NZ4K8)
    