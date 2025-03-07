# KUMARASWAMY DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.KUMARASWAMY({"alpha": *, "beta": *, "min": *, "max": *})
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
$$ X\sim\mathrm{Kumaraswamy}\left(\alpha,\beta,\text{min},\text{max}\right) $$

**Distribution Domain**
$$ x\in\left(\text{min},\text{max}\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+}, \text{min}\in\mathbb{R}, \text{max}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-(1-z(x)^\alpha)^\beta $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\alpha \beta z(x)^{\alpha-1}(1-z(x)^\alpha)^{\beta-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{min}+\left(\text{max}-\text{min}\right)\times (1-(1-u)^\frac{1}{\beta})^\frac{1}{\alpha} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{1}x^{k}f_{\tilde{X}}\left(x\right)dx=\beta \text{Beta}(1+\frac{k}{\alpha},\beta) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{min}+\left(\text{max}-\text{min}\right)\times \tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(\text{max}-\text{min}\right)^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{min}+\left(\text{max}-\text{min}\right)\times\left(1-2^{-1/b}\right)^{1/a} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{min}+\left(\text{max}-\text{min}\right)\times\left(\frac{a-1}{ab-1}\right)^{1/a} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Kumaraswamy}\left(\alpha,\beta,0,1\right)$
- $z\left(x\right)=\left(x-\text{min}\right)/\left(\text{max}-\text{min}\right)$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/kumaraswamy)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/kumaraswamy.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/10YJUDlAEygfOn07YxHBJxDqiXxygv8jKpJ8WvCZhe84)
    