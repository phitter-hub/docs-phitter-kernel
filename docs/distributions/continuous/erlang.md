# ERLANG DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ERLANG({"k": *, "beta": *})
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
$$ X\sim\mathrm{Erlang}\left(k,\beta\right) $$

**Distribution Domain**
$$ x\in [0,\infty)  $$

**Parameters Domain and Constraints**
$$ k\in\mathbb{N}^{+}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\text{P}(k,\frac{x}{\beta})=\frac{\gamma(k,\frac{x}{\beta})}{(k-1)!} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{x^{k-1} e^{-\frac{x}{\beta}}}{\beta^k(k-1)!} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\beta \text{P}^{-1}\left(k,u\right) $$

**Parametric Centered Moments**
$$ \mu'_{n}=E[X^n]=\int_{0}^{\infty}x^{n}f_{X}\left(x\right)dx=\beta^{n}\frac{\Gamma\left(n+k\right)}{\Gamma(k)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{P}(k,\frac{1}{2\beta}) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\beta\left(k-1\right) $$

**Additional Information and Definitions**
- $\beta:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/erlang)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/erlang.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1uG3Otntnm3cvMSkhkEiBVKuFn1pCLSWmiCxfN01D824)
    