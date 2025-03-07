# PERT DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.PERT({"a": *, "b": *, "c": *})
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
$$ X\sim\mathrm{Pert}\left(a,b,c\right) $$

**Distribution Domain**
$$ x\in\left[a,c\right] $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}, b\in\mathbb{R}, c\in\mathbb{R}, a < b < c $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I(z(x),\alpha_{1},\alpha_{2}) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{(x-a)^{\alpha_{1}-1}(c-x)^{\alpha_{2}-1}} {\text{Beta}(\alpha_{1},\alpha_{2})(c-a)^{\alpha_{1}+\alpha_{2}-1}} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=a+(c-a)\cdot I^{-1}\left(u,\alpha_{1},\alpha_{2}\right) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{a}^{c}x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{a+4b+c}{6} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{(\mathrm{Mean}(X)-a)(c-\mathrm{Mean}(X))}{7} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2\,(\alpha_{2}-\alpha_{1})\sqrt{\alpha_{1}+\alpha_{2}+1}}{(\alpha_{1}+\alpha_{2}+2)\sqrt{\alpha_{1}\alpha_{2}}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{6[(\alpha_{1}-\alpha_{2})^2 (\alpha_{1} +\alpha_{2}+1)-\alpha_{1} \alpha_{2} (\alpha_{1}+\alpha_{2}+2)]}{\alpha_{1} \alpha_{2} (\alpha_{1}+\alpha_{2}+2) (\alpha_{1}+\alpha_{2}+3)}+3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=a+(c-a)\cdot I^{-1}\left(\frac{1}{2},\alpha_{1},\alpha_{2}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=b $$

**Additional Information and Definitions**
- $z\left(x\right)=\left(x-a\right)/\left(c-a\right)$
- $u:\text{Uniform[0,1] random varible}$
- $\alpha_{1}=\frac{4b+c-5a} {c-a},\alpha_{2}=\frac{5c-a-4b} {c-a}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/pert)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/pert.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1NeKJKq4D_BB-ouefgJ35FzcORA7fH1OQwC5dCZKI_38)
    