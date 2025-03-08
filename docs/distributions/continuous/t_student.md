# T STUDENT DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.TStudent({"df": *})
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
$$ X\sim\mathrm{TStudent}\left(\text{df}\right)\\ $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \text{df}\in\mathbb{R}^{+}\\ $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I\left(\frac{x+\sqrt{x^{2}+\text{df}}}{2\sqrt{x^{2}+\text{df}}},\frac{\text{df}}{2},\frac{\text{df}}{2}\right)\\ $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\left(1+x^{2}/\text{df}\right)^{-(1+\text{df})/2}}{\sqrt{\text{df}}\times \text{Beta}\left(\frac{1}{2},\frac{\text{df}}{2}\right)}\\ $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\{\begin{array}{cl} \sqrt{\frac{\text{df}(1-I^{-1}\left(u,\text{df}/2,\text{df}/2\right))}{I^{-1}\left(u,\text{df}/2,\text{df}/2\right)}} & \text{if } \ u \geq \frac{1}{2} \\ -\sqrt{\frac{\text{df}(1-I^{-1}\left(u,\text{df}/2,\text{df}/2\right))}{I^{-1}\left(u,\text{df}/2,\text{df}/2\right)}} & \text{if } \ u < \frac{1}{2} \end{array} \right.\\ $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx=\left\{\begin{array}{cl} 0 & \text{if } \ k\text{ odd} \ \wedge \ 0 < k < \text{df} \\ \text{df}^{\frac{k}{2}} \,\prod_{i=1}^{k/2}\frac{2i-1}{\text{df}-2i} & \text{if } \ k\text{ even} \ \wedge \ 0 < k < \text{df} \end{array} \right.\\ $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=0\\ $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\left\{\begin{array}{cl} \text{df}/(\text{df}+2) & \text{if } \ \text{df} > 2 \\ \text{undefined} & \text{if } \  \text{df} \leq 2 \end{array} \right.\\ $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\left\{\begin{array}{cl} 0 & \text{if } \ \text{df} > 3 \\ \text{undefined} & \text{if } \  \text{df} \leq 3 \end{array} \right.\\ $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\left\{\begin{array}{cl} 3+6/(\text{df}-4) & \text{if } \ \text{df} > 4 \\ \text{undefined} & \text{if } \ \text{df} \leq 4 \end{array} \right.\\ $$

**Parametric Median**
$$ \mathrm{Median}(X)=0\\ $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=0 $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/t_student)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/t_student.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1fGxJfFL5eXAWk8xNI6HgCX9SQuXi-m5mR83N1dMLJrg)
    