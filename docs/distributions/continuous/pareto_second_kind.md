# PARETO SECOND KIND DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ParetoSecondKind({"xm": *, "alpha": *, "loc": *})
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
$$ X\sim\mathrm{ParetoSecondKind}\left(x_\mathrm{m},\alpha,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ x_\mathrm{m}\in\mathbb{R}^{+}, \alpha\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-\left[{1+\frac{x-\text{Loc}}{x_\mathrm{m}}}\right]^{-\alpha} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\alpha}{x_\mathrm{m}} \left[{1+\frac{x-\text{Loc}}{x_\mathrm{m}}}\right]^{-(\alpha+1)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+x_\mathrm{m} \left[\left(1-p\right)^{-\frac{1}{\alpha}} -1\right] $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{x_\mathrm{m}^k \Gamma(\alpha-k)\Gamma(1+k)}{\Gamma(\alpha)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\tilde{\mu}'_{1}=\frac{x_\mathrm{m}}{{\alpha -1}}  \quad \text{if }\alpha>1 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}=\frac{x_\mathrm{m}^2 \alpha}{(\alpha-1)^2(\alpha-2)} \quad \text{if }\alpha>2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{2(1+\alpha)}{\alpha-3}\,\sqrt{\frac{\alpha-2}{\alpha}} \quad \text{if }\alpha>3 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=\frac{6(\alpha^3+\alpha^2-6\alpha-2)}{\alpha(\alpha-3)(\alpha-4)} \quad \text{if }\alpha>4 $$

**Parametric Median**
$$ \mathrm{Median}(X)=x_\mathrm{m}\left(\sqrt[\alpha]{2}-1\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=0 $$

**Additional Information and Definitions**
- $X\sim\mathrm{ParetoSecondKind}\left(x_\mathrm{m},\alpha,0\right)$
- $x_\mathrm{m}:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/pareto_second_kind)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/pareto_second_kind.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1hnBOqkbcRNuyRxaLP8eHei5MRwUFDb1bgdcZYkpYKio)
    