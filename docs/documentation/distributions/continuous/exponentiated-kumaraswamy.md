# EXPONENTIATED KUMARASWAMY DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.ExponentiatedKumaraswamy({"alpha": *, "beta": *, "lambda": *, "min": *, "max": *})
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
$$ X\sim\mathrm{ExponentiatedKumaraswamy}\left(\alpha,\beta,\lambda,\text{min},\text{max}\right) $$

**Distribution Domain**
$$ x\in\left(\text{min},\text{max}\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+}, \lambda\in\mathbb{R}^{+}, \text{min}\in\mathbb{R}, \text{max}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left[1-\left(1-z(x)^{\alpha}\right)^{\beta}\right]^{\lambda} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\alpha\beta\lambda}{\text{max}-\text{min}}\,z(x)^{\alpha-1}\left(1-z(x)^{\alpha}\right)^{\beta-1}\left[1-\left(1-z(x)^{\alpha}\right)^{\beta}\right]^{\lambda-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{min}+\left(\text{max}-\text{min}\right)\left[1-\left(1-u^{1/\lambda}\right)^{1/\beta}\right]^{1/\alpha} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\lambda\sum_{j=0}^{\infty}(-1)^{j}\binom{k/\alpha}{j}\text{Beta}\!\left(\tfrac{j}{\beta}+1,\lambda\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{min}+\left(\text{max}-\text{min}\right)\times \tilde{\mu}'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(\text{max}-\text{min}\right)^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1}) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(0.5\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{x\in(\text{min},\text{max})} f_{X}(x) $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{ExponentiatedKumaraswamy}\left(\alpha,\beta,\lambda,0,1\right)$
- $z\left(x\right)=\left(x-\text{min}\right)/\left(\text{max}-\text{min}\right)$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$
- $\binom{\nu}{j}:\text{Generalized binomial coefficient}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/exponentiated_kumaraswamy)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/exponentiated_kumaraswamy.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1ymy1nMDg8z7i7KiYGG57gY7-dkKRcEfps3CKcKdkLas)

<script setup>
const downloadExcelFile = function() {
    const fileId = "exponentiated_kumaraswamy";
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
    