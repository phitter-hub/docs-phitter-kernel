# BINOMIAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.BINOMIAL({"n": *, "p": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PDF, PPF, PMF receive float or numpy.ndarray. For discrete distributions PMF instead of PDF. Parameters notation are in description of ditribution
distribution.cdf(int | numpy.ndarray) # -> float | numpy.ndarray
distribution.pdf(int | numpy.ndarray) # -> float | numpy.ndarray
distribution.ppf(int | numpy.ndarray) # -> float | numpy.ndarray
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
$$ X\sim\mathrm{Binomial}\left(n,p\right) $$

**Distribution Domain**
$$ x\in\mathbb{N}\equiv \left\{ 0,1,2,\dots \right\} $$

**Parameters Domain and Constraints**
$$ n\in\mathbb{N}, p\in\left(0,1\right)\subseteq\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\sum_{i=0}^{x} \binom{n}{i} p^i(1-p)^{n-i}=I(1-p, n - x, 1 + x) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\binom{n}{x} p^x (1-p)^{n-x} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\arg\min_{x}\left| F_{X}\left(x\right)-u \right| $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=0}^{\infty }x^{k}f_{X}\left(x\right)=\sum_{i=0}^k\tfrac{n!}{(n-i)!}S(k,i)p^{i} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=np $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=np(1-p) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{1-2p}{\sqrt{np(1-p)}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{1-6p(1-p)}{np(1-p)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\lfloor{np}\rfloor \vee \lceil{np}\rceil $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\lfloor (n + 1)p \rfloor \vee \lceil (n + 1)p \rceil - 1 $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function} \\ \text{is not feasible. However, it is possible to calculate the Percentile Point Function by} \\ \text{approximating it to the nearest integer.}$
- $u:\text{Uniform[0,1] random varible}$
- $\lfloor{x}\rfloor: \text{Floor function}$
- $\lceil{x}\rceil: \text{Ceiling Function}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $S(a,b):\text{Stirling numbers of the second kind}=\frac1{b!}\sum_{j=0}^b(-1)^{b-j}\binom {b}{j} j^a$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/binomial)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/binomial.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1bPOiZVUhjLMmbFqVjWMqg1NzTvsZxVIw95fi5hIhkn0)
    