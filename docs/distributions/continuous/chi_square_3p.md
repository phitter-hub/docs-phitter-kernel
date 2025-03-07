# CHI SQUARE 3P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.CHI_SQUARE_3P({"df": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{\chi^{2}_{3P}}\left(\text{df},\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \text{df}\in\mathbb{N}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{\gamma(\frac{\text{df}}{2},\,\frac{z(x)}{2})}{\Gamma(\frac{\text{df}}{2})}=\text{P}\left(\frac{\text{df}}{2},\,\frac{z(x)}{2}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\text{Sc}}\frac{1}{2^{\text{df}/2}\Gamma(\text{df}/2)}\,x^{\text{df}/2-1} e^{-z(x)/2} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=2\text{P}^{-1}\left(\frac{\text{df}}{2},u\right) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\text{df}(\text{df}+2)\cdots(\text{df}+2k-2)=2^k\frac{\Gamma\left(k+\frac{\text{df}}{2}\right)}{\Gamma\left(\frac{\text{df}}{2}\right)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1}=\text{Loc}+\text{Sc}\cdot \text{df} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=2\cdot \text{df}\cdot \text{Sc}^{2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\sqrt{\frac{8}{\text{df}}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3+\frac{12}{\text{df}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{Sc}\times 2\text{P}^{-1}\left(\frac{\text{df}}{2},\frac{1}{2}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\text{Sc}\times \text{max}(\text{df}-2,0) $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{\chi^{2}}\left(\text{df}\right)$
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/chi_square_3p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/chi_square_3p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/15tf3ZKbEgR3JWQRbMT2OaNij3INTGGUuNsR01NCDFJw)
    