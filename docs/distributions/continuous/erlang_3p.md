# ERLANG 3P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Erlang3P({"k": *, "beta": *, "loc": *})
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
$$ X\sim\mathrm{Erlang_{3P}}\left(k,\beta,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\left[\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ k\in\mathbb{N}^{+}, \beta\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\text{P}(k,\frac{x-\text{Loc}}{\beta})=\frac{\gamma(k,\frac{x-\text{Loc}}{\beta})}{(k-1)!} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{(x-\text{Loc})^{k-1} e^{-\frac{x-\text{Loc}}{\beta}}}{\beta^k(k-1)!} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\beta \text{P}^{-1}\left(k,u\right) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{n}=E[\tilde{X}^n]=\int_{0}^{\infty}x^{n}f_{\tilde{X}}\left(x\right)dx=\beta^{n}\frac{\Gamma\left(n+k\right)}{\Gamma(k)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{P}(k,\frac{1}{2\beta}) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\beta\cdot\left(k-1\right) $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Erlang}\left(k,\beta\right)$
- $\text{Loc}:\text{Location parameter}$
- $\beta:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/erlang_3p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/erlang_3p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1EvFPyOAL-TPQyNf7sAXfqgHqap8sGynH0XxrLRVP12M)
    