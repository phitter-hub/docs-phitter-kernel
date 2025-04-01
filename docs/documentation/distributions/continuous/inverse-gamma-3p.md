# INVERSE GAMMA 3P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.InverseGamma3P({"alpha": *, "loc": *, "beta": *})
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
$$ X\sim\mathrm{InverseGamma_{3P}}\left(\alpha,\text{Loc},\beta\right) $$

**Distribution Domain**
$$ x\in\left(\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-\frac{\gamma(\alpha,\beta/(x-\text{Loc}))}{\Gamma(\alpha)}=1-\text{P}\left(\alpha,\frac{\beta}{x-\text{Loc}}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\beta^\alpha}{\Gamma(\alpha)} (x-\text{Loc})^{-\alpha-1} \exp\left(-\frac{\beta}{x-\text{Loc}}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\frac{\beta}{\text{P}^{-1}\left(\alpha,1-u\right)} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{\Gamma(\alpha-k)}{\Gamma(\alpha)}=\frac{1}{(\alpha-1) \cdots (\alpha-k)}\quad \text{if } \alpha>k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\beta\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\beta^{2}(\mu'_{2}-\mu'^{2}_{1}) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\frac{\beta}{\text{P}^{-1}\left(\alpha,\frac{1}{2}\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\frac{\beta}{\alpha+1} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{InverseGamma_{3P}}\left(\alpha,0,1\right)$
- $\text{Loc}:\text{Location parameter}$
- $\beta:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/inverse_gamma_3p)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/inverse_gamma_3p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/16LCC6j_j1Cm7stc7LEd-C0ObUcZ-agL51ALGYxoZtrI)

<script setup>
const downloadExcelFile = function() {
    const fileId = "inverse_gamma_3p";
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

    