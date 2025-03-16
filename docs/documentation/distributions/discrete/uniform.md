# UNIFORM DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.Uniform({"min": *, "max": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PMF, PPF receive float or numpy.ndarray.
distribution.cdf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.pmf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.ppf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.sample(int) # -> numpy.ndarray

## STATS
distribution.mean # -> float
distribution.variance # -> float
distribution.standard_deviation # -> float
distribution.skewness # -> float
distribution.kurtosis # -> float
distribution.median # -> int
distribution.mode # -> int
```

## Equations

**Distribution Definition**
$$ X\sim\mathrm{Uniform}\left(a,b\right) $$

**Distribution Domain**
$$ x\in \{a,a+1,\dots,b-1,b\} $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{N}, b\in\mathbb{N}, a < b $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{x -a+1}{b-a+1} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{b-a+1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\lceil u(b-a+1)+a-1 \right\rceil $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=a}^{b}x^{k}f_{X}\left(x\right)=\frac{1}{b-a+1}\sum_{x=a}^{b}x^{k} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{a+b}{2} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=\frac{(b-a+1)^2-1}{12} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3-\frac{6((b-a+1)^2+1)}{5((b-a+1)^2-1)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\frac{a+b}{2} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)\in [a, b] $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $\lceil{x}\rceil: \text{Ceiling Function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/uniform)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/uniform.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1Ahl2ugOKkUCVWzzc_aNHwlA5Af4sHpTwqSiFIyYPsfM)

<script setup>
const downloadExcelFile = function() {
    const fileId = "uniform";
    const url = `https://raw.githubusercontent.com/phitterio/phitter-files/main/discrete/${fileId}.xlsx`;
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
    