# FOLDED NORMAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.FoldedNormal({"mu": *, "sigma": *})
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
$$ X\sim\mathrm{FoldedNormal}\left(\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in [0,\infty)  $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{2}\left[\text{erf}\left(\frac{x+\mu}{\sigma\sqrt{2}}\right)+\text{erf}\left(\frac{x-\mu}{\sigma\sqrt{2}}\right)\right] $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\sigma\sqrt{2\pi}} \,e^{ -\frac{(x-\mu)^2}{2\sigma^2} }+\frac{1}{\sigma\sqrt{2\pi}} \,e^{ -\frac{(x+\mu)^2}{2\sigma^2} } $$

**Percent Point Function / Sample**
$$ \text{Sample}_{X}\left(u\right)=\left|\mu+\sigma\Phi^{-1}(u)\right| $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\sigma \sqrt{\tfrac{2}{\pi}} \,e^{(-\mu^2/2\sigma^2)}+\mu\left(1-2\,\Phi(-\tfrac{\mu}{\sigma})\right) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\mu^2+\sigma^2-\mathrm{Mean}(X)^{2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\left|\mu+\sigma\Phi^{-1}\left(1/2\right)\right| $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{x}f_{X}\left(x\right) $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function is not} \\ \text{feasible. Nonetheless, it is possible to generate a random sample from the distribution.}$
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\phi\left(x\right):\text{PDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/folded_normal)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/folded_normal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/17NlSnru_46J8pSjxMPLDlzxoG2fPKWjeFvTh0ydfX4k)

<script setup>
const downloadExcelFile = function() {
    const fileId = "folded_normal";
    const url = `https://raw.githubusercontent.com/phitterio/phitter-files/main/continuous/${fileId}.xlsx`;
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

    