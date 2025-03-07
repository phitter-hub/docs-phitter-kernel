# GAMMA DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GAMMA({"alpha": *, "beta": *})
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
$$ X\sim\mathrm{Gamma}\left(\alpha,\beta\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\text{P}\left(\alpha,\frac{x}{\beta}\right)=\frac{1}{\Gamma(\alpha)} \gamma\left(\alpha,\frac{x}{\beta}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\Gamma(\alpha) \beta^\alpha} x^{\alpha-1} e^{-\frac{x}{\beta}} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\beta \text{P}^{-1}\left(\alpha,u\right) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty }x^{k}f_{X}\left(x\right)dx=\beta^k\frac{\Gamma(k+\alpha)}{\Gamma(\alpha)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\alpha \beta $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\alpha \beta^2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2}{\sqrt{\alpha}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{6}{\alpha} $$

**Parametric Median**
$$ \mathrm{Median}(X)=(\alpha-1)\beta \quad \text{if }\alpha>1 $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\beta \text{P}^{-1}\left(\alpha,\frac{1}{2}\right) $$

**Additional Information and Definitions**
- $\beta:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/gamma)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/gamma.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1HgD3a1zOml7Hy9PMVvFwQwrbmbs8iPbH-zQMowH0LVE)
    