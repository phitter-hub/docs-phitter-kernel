# BURR DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Burr({"A": *, "B": *, "C": *})
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
$$ X\sim\mathrm{Burr}\left(A,B,C\right) $$

**Distribution Domain**
$$ x\in [0,\infty)  $$

**Parameters Domain and Constraints**
$$ A\in\mathbb{R}^{+}, B\in\mathbb{R}, C\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-\left[1+\left(\frac{x}{A}\right)^{B}\right]^{-C} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{BC}{A}\left(\frac{x}{A}\right)^{B-1}\left[1+\left(\frac{x}{A}\right)^{B}\right]^{-C-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=A\left[(1-u)^{-\frac{1}{c}}-1\right]^{\frac{1}{B}} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{k}f_{X}\left(x\right)dx=A^{k}C\times \text{Beta}\left(\frac{BC-k}{B},\frac{B+K}{B}\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=A\left[\left(\frac{1}{2}\right)^{-\frac{1}{c}}-1\right]^{\frac{1}{B}} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=A\left(\frac{B-1}{BC+1}\right)^{\frac{1}{B}} $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/burr)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/burr.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1vhY3l3VAgBj9BQT1yE3meRTmEZP3HXjjm30nxDKCwCI)

<script setup>
const downloadExcelFile = function() {
    const fileId = "burr";
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

    