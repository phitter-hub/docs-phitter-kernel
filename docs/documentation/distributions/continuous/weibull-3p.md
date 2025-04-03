# WEIBULL 3P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Weibull3P({"alpha": *, "loc": *, "beta": *})
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
$$ X\sim\mathrm{Weibull_{3P}}\left(\alpha,\text{Loc},\beta\right) $$

**Distribution Domain**
$$ x\in [\text{Loc},\infty) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-e^{-z(x)^\alpha} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\alpha}{\beta}z(x)^{\alpha-1}e^{-z(x)^\alpha} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\beta(-\ln(1-u))^{1/\alpha} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\beta^\alpha \Gamma\left(1+\frac{k}{\alpha}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\tilde{\mu}'_{1}=\text{Loc}+\beta \ \Gamma(1+1/\alpha) $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}=\beta^2\left[\Gamma\left(1+2/\alpha\right)-\left(\Gamma\left(1+1/\alpha\right)\right)^2\right] $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\beta(\ln(2))^{1/\alpha} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\left\{\begin{array}{cl} \beta\left(\frac{\alpha-1}{\alpha}\right)^{1/\alpha} & \text{if }\alpha>1\\ 0 & \text{if } \alpha\leq 1 \end{array} \right. $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Weibull}\left(\alpha,\beta\right)$
- $\text{Loc}:\text{Location parameter}$
- $\beta:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\beta$
- $u:\text{Uniform[0,1] random varible}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/weibull_3p)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/weibull_3p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1agwpFGpXm62srDxgPOoDQGN8nGd8zaoztXg84Bgedlo)

<script setup>
const downloadExcelFile = function() {
    const fileId = "weibull_3p";
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

    