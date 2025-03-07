# BETA DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.BETA({"alpha": *, "beta": *, "A": *, "B": *})
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
$$ X\sim\mathrm{Beta}\left(\alpha,\beta,A,B\right) $$

**Distribution Domain**
$$ x\in\left(A,B\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+}, A\in\mathbb{R}, B\in\mathbb{R}, A < B $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I\left(z(x),\alpha,\beta\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{z(x)^{\alpha-1}\left(1-z(x)\right)^{\beta-1}}{\text{Beta}(\alpha,\beta)(B-A)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=A+(B-A)\times I^{-1}\left(u,\alpha,\beta\right) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{1}x^{k}f_{\tilde{X}}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=A+\left(B-A\right)\cdot\tilde{\mu}'_{1}=A+\frac{\alpha\left(B-A\right)}{\alpha+\beta} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(B-A\right)^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\frac{\alpha\beta\left(B-A\right)^{2}}{(\alpha+\beta)^2(\alpha+\beta+1)} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{2\,(\beta-\alpha)\sqrt{\alpha+\beta+1}}{(\alpha+\beta+2)\sqrt{\alpha\beta}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3+\frac{6[(\alpha-\beta)^2 (\alpha +\beta+1)-\alpha \beta (\alpha+\beta+2)]}{\alpha \beta (\alpha+\beta+2) (\alpha+\beta+3)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=A+(B-A)\times I^{-1}\left(\frac{1}{2},\alpha,\beta\right) \quad \text{if }\alpha,\beta>1 $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=A+(B-A)\frac{\alpha-1}{\alpha+\beta-2} \quad \text{if }\alpha,\beta>1 $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Beta}\left(\alpha,\beta,0,1\right)$
- $z\left(x\right)=\left(x-A\right)/\left(B-A\right)$
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/beta)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/beta.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1P7NDy-9toV3dv64gabnr8l2NjB1xt_Ani5IVMTx3gyU)
    