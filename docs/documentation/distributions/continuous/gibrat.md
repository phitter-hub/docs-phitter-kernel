# GIBRAT DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Gibrat({"loc": *, "scale": *})
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
$$ X\sim\mathrm{Gibrat}\left(\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\Phi\left(\ln x\right)=\frac{1}{2}\left(1+\mathrm{erf}\left(\frac{\ln z(x)}{\sqrt{2}}\right)\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\text{Sc}}\frac{1}{x\sqrt{2\pi}}\exp\left(-\frac{1}{2}\left(\ln z(x)\right)^{2}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\text{Sc}\times \exp\left(\Phi^{-1}\left(u\right)\right) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{\text{Loc}}^{\infty}x^{k}f_{X}\left(x\right)dx=\exp\left(\frac{k^{2}}{2}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1}=\text{Loc}+\text{Sc}\cdot\sqrt{e} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\text{Sc}^{2}\left[e{^2}-e\right] $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\sqrt{e-1}\left(2+e\right) $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=e^{4}+2e^{3}+3e^{2}-3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{Sc}\times \exp\left(\Phi^{-1}\left(1/2\right)\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\frac{\text{Sc}}{e} $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$
- $\mathrm{erf}(x):\text{Error function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/gibrat)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/gibrat.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1pM7skBPnH8V3GCJo0iSst46Oc2OzqWdX2qATYBqc_GQ)

<script setup>
const downloadExcelFile = function() {
    const fileId = "gibrat";
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

    