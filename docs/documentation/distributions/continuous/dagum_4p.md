# DAGUM 4P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Dagum4P({"a": *, "b": *, "p": *, "loc": *})
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
$$ X\sim\mathrm{Dagum_{4P}}\left(a,b,p,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, b\in\mathbb{R}^{+}, p\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)={\left(1+{\left(\frac{x-\text{Loc}}{b}\right)}^{-a}\right)}^{-p} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{a p}{x-\text{Loc}}\left(\frac{(\tfrac{x-\text{Loc}}{b})^{a p}}{\left((\tfrac{x-\text{Loc}}{b})^a+1\right)^{p+1}}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+b(u^{-1/p}-1)^{-1/a} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=pb^{k}\cdot \text{Beta}\left(\frac{ap+k}{a},\frac{a-k}{a}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+b{\left(-1+2^{\tfrac{1}{p}}\right)}^{-\tfrac{1}{a}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+b{\left(\frac{ap-1}{a+1}\right)}^{\tfrac{1}{a}} $$

**Additional Information and Definitions**
- $\bar{X}\sim\mathrm{Dagum}\left(a,b,p\right)$
- $\text{Loc}:\text{Location parameter}$
- $b:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/dagum_4p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/dagum_4p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1ZkKqvVdy7CvhvXwK830F6GWJrdNxoXBxJYeFD6XC2DM)
    