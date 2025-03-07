# F DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.F({"df1": *, "df2": *})
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
$$ X\sim\mathrm{F}\left(\text{df}_{1},\text{df}_{2}\right) $$

**Distribution Domain**
$$ x\in [0,\infty)  $$

**Parameters Domain and Constraints**
$$ \text{df}_{1}\in\mathbb{R}^{+}, \text{df}_{2}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I_{\text{df}_{1} x/(\text{df}_{1} x+\text{df}_{2})}\left (\tfrac{\text{df}_{1}}{2},\tfrac{\text{df}_{2}}{2}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\sqrt{\frac{(\text{df}_{1} x)^{\text{df}_{1}} \text{df}_{2}^{\text{df}_{2}}}{(\text{df}_{1} x+\text{df}_{2})^{\text{df}_{1}+\text{df}_{2}}}}}{x\ \times \text{Beta}\left(\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\frac{\text{df}_{2}\times I^{-1}\left(u,\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)}{\text{df}_{1}\times \left(1-I^{-1}\left(u,\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)\right)} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{k }f_{X}\left(x\right)dx=\left(\frac{\text{df}_{2}}{\text{df}_{1}}\right)^k\frac{\Gamma\left(\tfrac{\text{df}_{1}}{2}+k\right) }{\Gamma\left(\tfrac{\text{df}_{1}}{2}\right)}\frac{\Gamma\left(\tfrac{\text{df}_{2}}{2}-k\right) }{\Gamma\left(\tfrac{\text{df}_{2}}{2}\right) } \quad \text{if }\text{df}_{2} > 2k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{\text{df}_{2}}{\text{df}_{2}-2} \quad \text{if }\text{df}_{2} > 2 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{2\,\text{df}_{2}^2\,(\text{df}_{1}+\text{df}_{2}-2)}{\text{df}_{1} (\text{df}_{2}-2)^2 (\text{df}_{2}-4)} \quad \text{if }\text{df}_{2} > 4 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{(2 \text{df}_{1}+\text{df}_{2}-2) \sqrt{8 (\text{df}_{2}-4)}}{(\text{df}_{2}-6) \sqrt{\text{df}_{1} (\text{df}_{1}+\text{df}_{2} -2)}}\quad \text{if }\text{df}_{2} > 6 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{3\left(8+\left(\text{df}_{2}-6\right)\times \mathrm{Skewness}(X)^{2}\right)}{2\text{df}_{2}-16}+3\quad \text{if }\text{df}_{2} > 8 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\frac{\text{df}_{2}\times I^{-1}\left(\frac{1}{2},\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)}{\text{df}_{1}\times \left(1-I^{-1}\left(\frac{1}{2},\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\frac{\text{df}_{2}\left(\text{df}_{1}-2\right)}{\text{df}_{1}\left(\text{df}_{2}+2\right)}  \quad \text{if }\text{df}_{1} > 2 $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/f)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/f.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/137gYI8B6MDnqFoQ4bY1crdpFSKtPzRgaJS564SY_CUY)
    