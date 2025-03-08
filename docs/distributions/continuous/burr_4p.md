# BURR 4P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Burr4P({"A": *, "B": *, "C": *, "loc": *})
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
$$ X\sim \mathrm{Burr_{4P}}\left( A,B,C,\text{Loc} \right) $$

**Distribution Domain**
$$ x\in [\text{Loc},\infty) $$

**Parameters Domain and Constraints**
$$ A\in \mathbb{R}^{+},  B\in \mathbb{R},  C\in \mathbb{R}^{+},  \text{Loc}\in \mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left( x \right)=1-\left[ 1+\left( \frac{x-\text{Loc}}{A} \right)^{B} \right]^{-C} $$

**Probability Density Function**
$$ f_{X}\left( x \right)=\frac{BC}{A}\left( \frac{x-\text{Loc}}{A} \right)^{B-1}\left[ 1+\left( \frac{x-\text{Loc}}{A} \right)^{B} \right]^{-C-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left( u \right)=\text{Loc}+A\left[ (1-u)^{-\frac{1}{c}}-1 \right]^{\frac{1}{B}} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}=A^{k}C\times \text{Beta}\left( \frac{BC-k}{B},\frac{B+K}{B} \right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X) = \frac{\tilde{\mu}'_{3} - 3\tilde{\mu}'_{2}\tilde{\mu}'_{1} + 2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X) = \frac{\tilde{\mu}'_{4} - 4\tilde{\mu}'_{1}\tilde{\mu}'_{3} + 6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2} - 3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+A\left[\left(\frac{1}{2}\right)^{-\frac{1}{c}}-1 \right]^{\frac{1}{B}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+A\left( \frac{B-1}{BC+1} \right)^{\frac{1}{B}} $$

**Additional Information and Definitions**
- $\tilde{X}\sim \mathrm{Burr}\left( A,B,C \right)$
- $\text{Loc}:\text{Location parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left( x,y \right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/burr_4p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/burr_4p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1tEk3O2yvANj_PlLqACuwvRSqYYGQVRFH1SPMdLGYnz4)
    