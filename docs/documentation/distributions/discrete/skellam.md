# SKELLAM DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.Skellam({"lambda1": *, "lambda2": *})
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
$$ X\sim\mathrm{Skellam}\left(\lambda_{1},\lambda_{2}\right) $$

**Distribution Domain**
$$ x\in\mathbb{Z}\equiv\left\{\dots,-2,-1,0,1,2,\dots\right\} $$

**Parameters Domain and Constraints**
$$ \lambda_{1}\in\mathbb{R}^{+}, \lambda_{2}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\sum_{k=-\infty}^{x}f_{X}\left(k\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=e^{-\left(\lambda_{1}+\lambda_{2}\right)}\left(\frac{\lambda_{1}}{\lambda_{2}}\right)^{x/2}I_{\left|x\right|}\!\left(2\sqrt{\lambda_{1}\lambda_{2}}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\arg\min_{x}\left| F_{X}\left(x\right)-u \right| $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=-\infty}^{\infty}x^{k}f_{X}\left(x\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\lambda_{1}-\lambda_{2} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=\lambda_{1}+\lambda_{2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{\lambda_{1}-\lambda_{2}}{\left(\lambda_{1}+\lambda_{2}\right)^{3/2}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{1}{\lambda_{1}+\lambda_{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(0.5\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{k\in\{\lfloor\lambda_{1}-\lambda_{2}\rfloor,\lceil\lambda_{1}-\lambda_{2}\rceil\}}f_{X}(k) $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function}$ $\text{is not feasible. However, it is possible to calculate the Percentile Point Function by}$ $\text{approximating it to the nearest integer.}$
- $X=N_{1}-N_{2},\;N_{1}\sim\mathrm{Poisson}(\lambda_{1}),\;N_{2}\sim\mathrm{Poisson}(\lambda_{2}),\;N_{1}\perp N_{2}$
- $\lambda_{1}:\text{Rate parameter of }N_{1}$
- $\lambda_{2}:\text{Rate parameter of }N_{2}$
- $u:\text{Uniform[0,1] random varible}$
- $I_{\nu}(x):\text{Modified Bessel function of the first kind of order }\nu$
- $\lfloor{x}\rfloor: \text{Floor function}$
- $\lceil{x}\rceil: \text{Ceiling Function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/skellam)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/discrete/skellam.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/)

<script setup>
const downloadExcelFile = function() {
    const fileId = "skellam";
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
    