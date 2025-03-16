# BERNOULLI DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.Bernoulli({"p": *})
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
$$ X\sim\mathrm{Bernoulli}\left(p\right) $$

**Distribution Domain**
$$ x\in\left\{0,1\right\} $$

**Parameters Domain and Constraints**
$$ p\in\left(0,1\right)\subseteq\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left\{\begin{array}{cl} 1-p & \text{if } \ x=0 \\ 1 & \text{if } \ x=1 \end{array} \right.\\ $$

**Probability Density Function**
$$ f_{X}\left(x\right)=p^x(1-p)^{1-x} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\{\begin{array}{cl} 1 & \text{if } \ u \leq p \\ 0 & \text{if } \ u > p \end{array} \right.\\ $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x=0}^{1}x^{k}f_{X}\left(x\right)=p $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=p $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=p(1-p) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{1-2p}{\sqrt{p(1-p)}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{1 - 6p(1-p)}{p(1-p)} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\left\{\begin{array}{cl} 0 & \text{if } p < 1/2 \\ \left[0, 1\right] & \text{if } p = 1/2\\ 1 & \text{if } p > 1/2 \end{array} \right.\\ $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\left\{\begin{array}{cl} 0 & \text{if } \ p < 1/2 \\ 0, 1 & \text{if } \ p = 1/2\\ 1 & \text{if } \ p > 1/2 \end{array} \right.\\ $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/bernoulli)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/discrete/bernoulli.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1sWJZYZWW8cVLFXYV-fb3Lq4y2YgWzgTGWHfhIJ0zM5c)

<script setup>
const downloadExcelFile = function() {
    const fileId = "bernoulli";
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
    