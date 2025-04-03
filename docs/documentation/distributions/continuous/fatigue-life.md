# FATIGUE LIFE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.FatigueLife({"gamma": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{FatigueLife}\left(\gamma,\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \gamma\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\Phi\left(\frac{\sqrt{z(x)}-\sqrt{\frac{1}{z(x)}}}{\gamma}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\sqrt{z(x)}+\sqrt{\frac{1}{z(x)}}}{2\gamma z(x)}\phi\left(\frac{\sqrt{z(x)}-\sqrt{\frac{1}{z(x)}}}{\gamma}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\text{Sc}\frac{1}{4}\left[\gamma\Phi^{-1}(u)+\sqrt{4+\left(\gamma\Phi^{-1}(u)\right)^2}\right]^2 $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1}=\text{Loc}+\text{Sc}\left(1+\frac{\gamma^2}{2}\right) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\text{Sc}^{2}\gamma^{2}\left(1+\frac{5\gamma^{2}}{4}\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{4\gamma(6+11\gamma^2)}{(4+5\gamma^2)^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{ 6 \gamma^2 ( 93 \gamma^2+40 ) }{ ( 5 \gamma^2+4 )^2 } $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{Sc}\frac{1}{4}\left[\gamma\Phi^{-1}\left(1/2\right)+\sqrt{4+\left(\gamma\Phi^{-1}\left(1/2\right)\right)^2}\right]^2 $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{x}f_{X}\left(x\right) $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\phi\left(x\right):\text{PDF normal standard distribution}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/fatigue_life)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/fatigue_life.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1j-U_YMX89VHe2jVq3pazpzqYeA1j1zopW22C9yJcPS0)

<script setup>
const downloadExcelFile = function() {
    const fileId = "fatigue_life";
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

    