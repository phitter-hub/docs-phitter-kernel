# MCDONALD DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.McDonald({"a": *, "b": *, "c": *, "min": *, "max": *})
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
$$ X\sim\mathrm{McDonald}\left(a,b,c,\text{min},\text{max}\right) $$

**Distribution Domain**
$$ x\in\left(\text{min},\text{max}\right) $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, b\in\mathbb{R}^{+}, c\in\mathbb{R}^{+}, \text{min}\in\mathbb{R}, \text{max}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I_{z(x)^{c}}\left(a,b\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{c}{\left(\text{max}-\text{min}\right)\text{Beta}(a,b)}\,z(x)^{ac-1}\left(1-z(x)^{c}\right)^{b-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{min}+\left(\text{max}-\text{min}\right)\left[I^{-1}_{u}\left(a,b\right)\right]^{1/c} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^{k}]=\frac{\text{Beta}\!\left(a+\tfrac{k}{c},b\right)}{\text{Beta}(a,b)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{min}+\left(\text{max}-\text{min}\right)\times \tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(\text{max}-\text{min}\right)^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{min}+\left(\text{max}-\text{min}\right)\left[I^{-1}_{0.5}\left(a,b\right)\right]^{1/c} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{min}+\left(\text{max}-\text{min}\right)\left(\frac{ac-1}{ac+bc-c-1}\right)^{1/c} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{McDonald}\left(a,b,c,0,1\right)$
- $\text{If }X^{c}\sim\mathrm{Beta}(a,b)\text{ then }X\sim\mathrm{McDonald}(a,b,c)$
- $z\left(x\right)=\left(x-\text{min}\right)/\left(\text{max}-\text{min}\right)$
- $u:\text{Uniform[0,1] random varible}$
- $I_{x}(a,b):\text{Regularized incomplete beta function}$
- $I^{-1}_{u}(a,b):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}(a,b):\text{Beta function}$
- $\text{Mode formula valid when } ac>1 \text{ and } b>1$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/mcdonald)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/mcdonald.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/15pTIf2o__YKPwC2EgJrGhTukaCtLKRP8EktQuNyLxco)

<script setup>
const downloadExcelFile = function() {
    const fileId = "mcdonald";
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
    