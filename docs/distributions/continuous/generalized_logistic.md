# GENERALIZED LOGISTIC DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GENERALIZED_LOGISTIC({"c": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{GeneralizedLogistic}\left(c,\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ c\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{\left(1+\exp\left(-z(x)\right)\right)^{c}} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{c\exp\left(-z(x)\right)}{\text{Sc}\left(1+\exp\left(-z(x)\right)\right)^{c+1}} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}-\text{Sc}\ln\left(u^{-1/c}-1\right) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1}=\text{Loc}+\text{Sc}\left(\gamma+\psi_{0}\left(c\right)\right) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\text{Sc}^{2}\left(\frac{\pi^{2}}{6}+\psi_{1}\left(c\right)\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{\psi_{2}\left(c\right)+2\zeta\left(3\right)}{\left(\frac{\pi^{2}}{6}+\psi_{1}\left(c\right)\right)^{3/2}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{\left(\frac{\pi^{4}}{15}+\psi_{3}\left(c\right)\right)}{\left(\frac{\pi^{2}}{6}+\psi_{1}\left(c\right)\right)^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}-\text{Sc}\ln\left(2^{1/c}-1\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\text{Sc}\ln\left(c\right) $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\gamma:\text{Euler-Mascheroni constant}=0.5772156649$
- $\psi_{0}\left(x\right):\text{Digamma function}$
- $\psi_{n}\left(x\right):\text{Polygamma function of order }n\in\mathbb{N}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/generalized_logistic)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/generalized_logistic.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1vwppGjHbwEA3xd3OtV51sPZhpOWyzmPIOV_Tued-I1Y)
    