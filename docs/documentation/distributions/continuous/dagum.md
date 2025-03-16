# DAGUM DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Dagum({"a": *, "b": *, "p": *})
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
$$ X\sim\mathrm{Dagum}\left(a,b,p\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, b\in\mathbb{R}^{+}, p\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)={\left(1+{\left(\frac{x}{b}\right)}^{-a}\right)}^{-p} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{a p}{x}\left(\frac{(\tfrac{x}{b})^{a p}}{\left((\tfrac{x}{b})^a+1\right)^{p+1}}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=b(u^{-1/p}-1)^{-1/a} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{k}f_{X}\left(x\right)dx=pb^{k}\cdot \text{Beta}\left(\frac{ap+k}{a},\frac{a-k}{a}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=b{\left(-1+2^{\tfrac{1}{p}}\right)}^{-\tfrac{1}{a}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=b{\left(\frac{ap-1}{a+1}\right)}^{\tfrac{1}{a}} $$

**Additional Information and Definitions**
- $b:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/dagum)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/dagum.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1qct7LByxY_z2-Rl-pWFG1LQsUxW8VQaCgLizn93YPxk)

<script setup>
const downloadExcelFile = function() {
    const fileId = "dagum";
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

    