# FRECHET DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Frechet({"alpha": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{Frechet}\left(\alpha,\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left[\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=e^{(-z(x))^{-\alpha}} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\alpha}{\text{Sc}} \,\left(z(x)\right)^{-1-\alpha} \,e^{-(z(x))^{-\alpha}} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\text{Sc}\left(-\ln(u)\right)^{-\frac{1}{\alpha}} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{\text{Loc}}^{\infty }x^{k}f_{X}\left(x\right)dx=\Gamma\left(1-\frac{k}{\alpha}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\cdot\tilde{\mu}'_{1} \quad \text{if } \alpha>1 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}) \quad \text{if } \alpha>2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} \quad \text{if } \alpha>3 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} \quad \text{if } \alpha>4 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\frac{\text{Sc}}{\sqrt[\alpha]{\ln(2)}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\text{Sc}\left(\frac{\alpha}{1+\alpha}\right)^{1/\alpha} $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/frechet)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/frechet.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1PNGvHImwOFIragM_hHrQJcTN7OcqCKFoHKXlPq76fnI)

<script setup>
const downloadExcelFile = function() {
    const fileId = "frechet";
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

    