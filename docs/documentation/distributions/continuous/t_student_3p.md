# T STUDENT 3P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.TStudent3P({"df": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{TStudent_{3P}}\left(\text{df},\text{Loc},\text{Sc}\right)\\ $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \text{df}\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+}\\ $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I\left(\frac{z(x)+\sqrt{z(x)^{2}+\text{df}}}{2\sqrt{z(x)^{2}+\text{df}}},\frac{\text{df}}{2},\frac{\text{df}}{2}\right)\\ $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\left(1+z(x)^{2}/\text{df}\right)^{-(1+\text{df})/2}}{\sqrt{\text{df}}\times \text{Beta}\left(\frac{1}{2},\frac{\text{df}}{2}\right)}\\ $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\{\begin{array}{cl} \text{Loc}+\text{Sc} \ \sqrt{\frac{\text{df}(1-I^{-1}\left(u,\text{df}/2,\text{df}/2\right))}{I^{-1}\left(u,\text{df}/2,\text{df}/2\right)}} & \text{if } \ u \geq \frac{1}{2} \\ \text{Loc}-\text{Sc} \ \sqrt{\frac{\text{df}(1-I^{-1}\left(u,\text{df}/2,\text{df}/2\right))}{I^{-1}\left(u,\text{df}/2,\text{df}/2\right)}} & \text{if } \ u < \frac{1}{2} \end{array} \right.\\ $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\left\{\begin{array}{cl} 0 & \text{if } \ k\text{ odd} \ \wedge \ 0 < k < \text{df} \\ \text{df}^{\frac{k}{2}} \,\prod_{i=1}^{k/2}\frac{2i-1}{\text{df}-2i} & \text{if } \ k\text{ even} \ \wedge \ 0 < k < \text{df} \end{array} \right.\\ $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1}=\text{Loc}\\ $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\times (\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\left\{\begin{array}{cl} \text{Sc}^{2} \ \text{df}/(\text{df}+2) & \text{if } \ \text{df} > 2 \\ \text{undefined} & \text{if } \  \text{df} \leq 2 \end{array} \right.\\ $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\left\{\begin{array}{cl} 0 & \text{if } \ \text{df} > 3 \\ \text{undefined} & \text{if } \  \text{df} \leq 3 \end{array} \right.\\ $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=\left\{\begin{array}{cl} 3+6/(\text{df}-4) & \text{if } \ \text{df} > 4 \\ \text{undefined} & \text{if } \ \text{df} \leq 4 \end{array} \right.\\ $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}\\ $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{TStudent}\left(\text{df}\right)$
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/t_student_3p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/t_student_3p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1K8bpbc-0mwe0mvRYXUQmoE8vaTigciJWDS4CPXmJodU)
    