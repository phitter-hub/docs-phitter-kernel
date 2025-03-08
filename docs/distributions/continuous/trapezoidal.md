# TRAPEZOIDAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Trapezoidal({"a": *, "b": *, "c": *, "d": *})
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
$$ X\sim\mathrm{Trapezoidal}\left(a,b,c,d\right) $$

**Distribution Domain**
$$ x\in\left[a,d\right] $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}, b\in\mathbb{R}, c\in\mathbb{R}, d\in\mathbb{R}, a < b < c, b < c <  d $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left\{\begin{array}{cl}\frac{1}{d+c-a-b}\frac{1}{b-a}(x-a)^2 & \text{if } \ a\leq x < b \\ \frac{1}{d+c-a-b}(2x-a-b) & \text{if } \ b\leq x < c \\ 1-\frac{1}{d+c-a-b}\frac{1}{d-c}(d-x)^2 & \text{if } \ c\leq x \le d \end{array} \right. $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\left\{\begin{array}{cl}\frac{2}{d+c-a-b}\frac{x-a}{b-a} & \text{if } \ a\leq x < b \\ \frac{2}{d+c-a-b} & \text{if } \ b\leq x < c \\ \frac{2}{d+c-a-b}\frac{d-x}{d-c} & \text{if } \ c\leq x \leq d \end{array} \right. $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\{\begin{array}{cl} a+\sqrt{u\times (d+c-a-b)\times (b-a)} & \text{if } u \leq A_{1} \\ (a+b+u\times (d+c-a-b))/2 & \text{if } A_{1} \leq u \leq A_{1}+A_{2} \\ d-\sqrt{(1-u)\times (d+c-a-b)\times (d-c)} & \text{if } A_{1}+A_{2} \leq u \leq A_{1}+A_{2}+A_{3}  \end{array} \right. $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{a}^{b}x^{k}f_{X}\left(x\right)dx=\frac{2}{d+c-b-a}\frac{1}{(k+1)(k+2)}\left(\frac{d^{k+2}-c^{k+2}}{d-c}-\frac{b^{k+2}-a^{k+2}}{b-a}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(1/2\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)\in [b,c] $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $A_{1}=(b-a)/(d+c-a-b)$
- $A_{2}=2(c-b)/(d+c-a-b)$
- $A_{3}=(d-c)/(d+c-a-b)$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/trapezoidal)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/trapezoidal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1Gsk5M_R2q9Or8RTggKtTkqEk-cN6IuDgYqbmhFm5Xlw)
    