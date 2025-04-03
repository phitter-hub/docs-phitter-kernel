# CAUCHY DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Cauchy({"x0": *, "gamma": *})
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
$$ X\sim\mathrm{Cauchy}\left(x0,\gamma\right) $$

**Distribution Domain**
$$ x\in (-\infty,+\infty) $$

**Parameters Domain and Constraints**
$$ x_0\in\mathbb{R}, \gamma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{\pi} \arctan\left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\pi\gamma\,\left[1+\left(\frac{x-x_0}{\gamma}\right)^2\right]} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=x_0+\gamma\,\tan\left[\pi\left(u-\tfrac{1}{2}\right)\right] $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{undefined} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{undefined} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\text{undefined} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\text{undefined} $$

**Parametric Median**
$$ \mathrm{Median}(X)=x_0 $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=x_0 $$

**Additional Information and Definitions**
- $x_0:\text{Location parameter}$
- $\gamma:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/cauchy)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/cauchy.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1xoJJvuSvfg-umC7Ogio9fde1l4TiWuAlR2IxucYK0y8)

<script setup>
const downloadExcelFile = function() {
    const fileId = "cauchy";
    const url = `https://raw.githubusercontent.com/phitter-core/phitter-files/main/continuous/${fileId}.xlsx`;
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

    