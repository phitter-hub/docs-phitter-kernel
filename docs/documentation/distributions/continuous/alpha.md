# ALPHA DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Alpha({"alpha": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{Alpha}\left(\alpha,\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{\Phi\left(\alpha-\frac{1}{z(x)}\right)}{\Phi\left(\alpha\right)} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\text{Sc}\cdot z(x)^{2}\cdot \Phi\left(\alpha\right)\cdot\sqrt{2\pi}}\exp\left(-\frac{1}{2}\left(\alpha-\frac{1}{z(x)}\right)^{2}\right) $$

**Percent Point Function / Sample**
$$ F_{X}^{-1}\left(u\right)=\text{Loc}+\text{Sc}\times \frac{1}{\alpha-\Phi^{-1}\left(u\Phi\left(\alpha\right)\right)} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\frac{\text{Sc}}{\alpha-\Phi^{-1}\left(\frac{1}{2}\Phi\left(\alpha\right)\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\text{Sc}\frac{(\sqrt{\alpha^{2}+8}-\alpha)}{4} $$

**Additional Information and Definitions**
- $\tilde{X}\sim \mathrm{Alpha}\left(\alpha,0,1\right)$
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z(x)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/alpha)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/alpha.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1yRovxx1YbqgEul65DjjXetysc_4qgX2a_2NQQA1AxCA)
    