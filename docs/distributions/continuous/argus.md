# ARGUS DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ARGUS({"chi": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{Argus}\left(\chi,\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\text{Loc}+\text{Sc}\right) $$

**Parameters Domain and Constraints**
$$ \chi\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-\frac{\Psi\left(\chi\sqrt{1-z(x)^2}\right)}{\Psi(\chi)} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\text{Sc}}\cdot\frac{\chi^3}{\sqrt{2\pi}\,\Psi(\chi)}\cdot z(x)\sqrt{1-z(x)^2}\exp\left(-\frac12 \chi^2\Big(1-z(x)^2\Big)\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\text{Sc}\sqrt{1-\frac{2\text{P}^{-1}(\frac{3}{2},(1-u)\text{P}(\frac{3}{2},\frac{\chi^{2}}{2}))}{\chi^{2}}} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{\text{Loc}}^{\text{Loc}+\text{Sc}}x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\text{Loc}+\text{Sc}\sqrt{\pi/8}\,\frac{\chi e^{-\frac{\chi^2}{4}} I_1(\tfrac{\chi^2}{4})}{\Psi(\chi)} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\text{Sc}^2\cdot\left(1-\frac{3}{\chi^2}+\frac{\chi\phi(\chi)}{\Psi(\chi)}\right)-(\mu-\text{Loc})^2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{Sc}\sqrt{1-\frac{2\text{P}^{-1}(\frac{3}{2},\frac{1}{2}\text{P}(\frac{3}{2},\frac{\chi^{2}}{2}))}{\chi^{2}}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\frac{\text{Sc}}{\sqrt2\chi}\sqrt{(\chi^2-2)+\sqrt{\chi^4+4}} $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z(x)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\Psi(\chi)=\Phi(\chi)- \chi \phi( \chi )-\tfrac{1}{2}$
- $\Phi(x):\text{CDF normal standard distribution}$
- $\phi(x):\text{PDF normal standard distribution}$
- $I_{\alpha}\left(x\right):\text{Modified Bessel function of the first kind of order }\alpha\in\mathbb{N}$
- $\text{P}(a,x)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}(a,y):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma(a,x):\text{Lower incomplete gamma function}$
- $\Gamma(x):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/argus)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/argus.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1u2x7IFUSB7rEyhs7s6-C2btT1Bk5aCr4WiUYEML-8xs)
    