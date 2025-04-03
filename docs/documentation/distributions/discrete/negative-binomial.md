# NEGATIVE BINOMIAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.NegativeBinomial({"r": *, "p": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PMF, PPF receive float or numpy.ndarray.
distribution.cdf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.pmf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.ppf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.sample(int) # -> numpy.ndarray

## STATS
distribution.mean # -> float
distribution.variance # -> float
distribution.standard_deviation # -> float
distribution.skewness # -> float
distribution.kurtosis # -> float
distribution.median # -> int
distribution.mode # -> int
```

## Equations

**Distribution Definition**
$$ X\sim\mathrm{NegativeBinomial}\left(r,p\right) $$

**Distribution Domain**
$$ x\in\mathbb{N}\equiv \left\{0,1,2,\dots\right\} $$

**Parameters Domain and Constraints**
$$ r\in\mathbb{N}_{\geqslant 1}, p\in\left(0,1\right)\subseteq\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I(p,r,x+1) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\binom{r+x-1}{x}p^r(1-p)^x $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\arg\min_{x}\left| F_{X}\left(x\right)-u \right| $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=0}^{\infty}x^{k}f_{X}\left(x\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{r(1-p)}{p} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=\frac{r(1-p)}{p^2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2-p}{\sqrt{r\,(1-p)}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{6}{r} + \frac{p^2}{r\,(1-p)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(0.5\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\lfloor(r-1)\,(1-p)/p\rfloor $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function} \\ \text{is not feasible. However, it is possible to calculate the Percentile Point Function by} \\ \text{approximating it to the nearest integer.}$
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $\lfloor{x}\rfloor: \text{Floor function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/negative_binomial)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/discrete/negative_binomial.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1xmCWBiswdW5s7SIhwT2nrdQxLFAb6hw73iy52_nvjQE)

<script setup>
const downloadExcelFile = function() {
    const fileId = "negative_binomial";
    const url = `https://raw.githubusercontent.com/phitter-core/phitter-files/main/discrete/${fileId}.xlsx`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileId}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<style module>
a {
  cursor: pointer;
}
</style>
    