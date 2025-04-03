# LOGNORMAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.LogNormal({"mu": *, "sigma": *})
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
$$ X\sim\mathrm{LogNormal}\left(\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{2}\left[1+\operatorname{erf}\left(\frac{\ln (x)-\mu}{\sigma\sqrt{2}}\right)\right] $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac 1 {x\sigma\sqrt{2\pi}}\ \exp\left(-\frac{\left(\ln\left(x\right) -\mu\right)^2}{2\sigma^2}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\exp(\mu+\sqrt{2\sigma^2}\operatorname{erf}^{-1}(2u-1)) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty}^{\infty}x^{k}f_{X}\left(x\right)dx=e^{k\mu+k^2\sigma^2/2} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=e^{\mu + \frac{\sigma^2}{2}} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=e^{2\mu+\sigma^2}(e^{\sigma^2}-1) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=(e^{\sigma^2}+2)\sqrt{e^{\sigma^2}-1} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=e^{4\sigma^2}+2e^{3\sigma^2}+3e^{2\sigma^2}-3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\exp(\mu) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\exp(\mu-\sigma^2) $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/lognormal)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/lognormal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1lS1cR4C2R45ug0ZyLxBlRBtcXH6hNPE1L-5wP68gUpA)

<script setup>
const downloadExcelFile = function() {
    const fileId = "lognormal";
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

    