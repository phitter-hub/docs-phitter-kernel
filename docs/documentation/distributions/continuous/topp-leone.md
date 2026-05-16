# TOPP-LEONE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ToppLeone({"alpha": *, "min": *, "max": *})
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
$$ X\sim\mathrm{ToppLeone}\left(\alpha,\text{min},\text{max}\right) $$

**Distribution Domain**
$$ x\in\left(\text{min},\text{max}\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \text{min}\in\mathbb{R}, \text{max}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left[z(x)\left(2-z(x)\right)\right]^{\alpha} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{2\alpha}{\text{max}-\text{min}}\left(1-z(x)\right)\left[z(x)\left(2-z(x)\right)\right]^{\alpha-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{min}+\left(\text{max}-\text{min}\right)\left(1-\sqrt{1-u^{1/\alpha}}\right) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^{k}]=\sum_{i=0}^{k}\binom{k}{i}\left(-1\right)^{i}\alpha\,\text{Beta}\!\left(\alpha,1+\tfrac{i}{2}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{min}+\left(\text{max}-\text{min}\right)\times \tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(\text{max}-\text{min}\right)^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{min}+\left(\text{max}-\text{min}\right)\left(1-\sqrt{1-0.5^{1/\alpha}}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{min}+\left(\text{max}-\text{min}\right)\left(1-\sqrt{\tfrac{\alpha-1}{2\alpha-1}}\right) $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{ToppLeone}\left(\alpha,0,1\right)$
- $z\left(x\right)=\left(x-\text{min}\right)/\left(\text{max}-\text{min}\right)$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$
- $\text{Mode formula valid when } \alpha>1,\text{ otherwise }\mathrm{Mode}(X)=\text{min}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/topp_leone)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/topp_leone.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1pGCZ0n2gsJQG3COULFrp9U_AG1HdiffEh46ng3uq0io)

<script setup>
const downloadExcelFile = function() {
    const fileId = "topp_leone";
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
    