# GEOMETRIC DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.Geometric({"p": *})
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
$$ X\sim\mathrm{Geometric}\left(p\right) $$

**Distribution Domain**
$$ x\in\mathbb{N}^{+}\equiv \left\{1,2,\dots\right\} $$

**Parameters Domain and Constraints**
$$ p\in\left(0,1\right)\subseteq\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-(1 - p)^{\lfloor x\rfloor} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=(1 - p)^{x-1}p $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\lceil{\frac{\ln{(1-u)}}{\ln{(1-p)}}}\right\rceil $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=0}^{\infty}x^{k}f_{X}\left(x\right)=\sum_{x=0}^\infty (1-p)^x p\cdot x^k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{1}{p} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=\frac{1-p}{p^2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2-p}{\sqrt{1-p}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=9+\frac{p^2}{1-p} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\left\lceil \frac{-1}{\log_2(1-p)} \right\rceil $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=1 $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $\lfloor{x}\rfloor: \text{Floor function}$
- $\lceil{x}\rceil: \text{Ceiling Function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/geometric)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/geometric.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1cEU6n8UxpJ_Had6WfFnAXZ2FcaLGYu8g5srQ_iEfjgg)

<script setup>
const downloadExcelFile = function() {
    const fileId = "geometric";
    const url = `https://raw.githubusercontent.com/phitterio/phitter-files/main/discrete/${fileId}.xlsx`;
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
    