# GENERALIZED NORMAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GeneralizedNormal({"beta": *, "mu": *, "alpha": *})
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
$$ X\sim\mathrm{GeneralizedNormal}\left(\beta,\mu,\alpha\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,+\infty\right) $$

**Parameters Domain and Constraints**
$$ \beta\in\mathbb{R}^{+}, \mu\in\mathbb{R}, \alpha\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{2}+\frac{\text{sign}(x-\mu)}{2\Gamma( 1/\beta ) } \gamma\left(1/\beta,\left|\frac{x-\mu}{\alpha}\right|^\beta\right)=\frac{1}{2}+\frac{\text{sign}(x-\mu)}{2} \text{P}\left(1/\beta,\left|\frac{x-\mu}{\alpha}\right|^\beta\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\beta}{2\alpha\Gamma(1/\beta)}\exp\left(-\left(\frac{|x-\mu|}{\alpha}\right)^\beta\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{sign}(u-\frac{1}{2}) \left[\alpha^\beta \text{P}^{-1}\left(\frac{1}{\beta},2|u-\frac{1}{2}|\right)\right]^{1/\beta}+\mu $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty}^{\infty}x^{k}f_{X}\left(x\right)dx=\left\{\begin{array}{cl}0 & \text{if }k\text{ is odd} \\ \alpha^{k} \Gamma\left(\frac{k+1}{\beta}\right) \Big/ \Gamma\left(\frac{1}{\beta}\right) & \text{if }k\text{ is even}\end{array} \right. $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu+\alpha\mu'_{1}=\mu $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\alpha^2(\mu'_{2}-\mu'^{2}_{1})=\frac{\alpha^2\Gamma(3/\beta)}{\Gamma(1/\beta)} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=\frac{\Gamma(5/\beta)\Gamma(1/\beta)}{\Gamma(3/\beta)^2} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $\alpha:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$
- $\gamma\left(a,x\right):\text{Lower incomplete gamma function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/generalized_normal)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/generalized_normal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1_77JSp0mhHxqvQugVRRWIoQOTa91WdyNqNmOfDNuSfA)

<script setup>
const downloadExcelFile = function() {
    const fileId = "generalized_normal";
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

    