# LAPLACE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Laplace({"mu": *, "b": *})
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
$$ X\sim\mathrm{Laplace}\left(\mu,b\right) $$

**Distribution Domain**
$$ x\in\left(-\infty,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}^{+}, b\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\tfrac{1}{2}+\tfrac{1}{2} \mathrm{sign}(x-\mu)\left(1-\exp\left(-\frac{|x-\mu|}{b} \right ) \right ) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{2b} \exp\left(-\frac{|x-\mu|}{b}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu-b\times \mathrm{sign}\left(u-\frac{1}{2}\right)\,\ln\left(1-2\left|p-\frac{1}{2}\right|\right) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty}^{\infty}x^{k}f_{X}\left(x\right)dx=\bigg({\frac{1}{2}}\bigg) \sum_{k=0}^r \bigg[{\frac{r!}{(r-k)!}} b^k \mu^{(r-k)} \{1+(-1)^k\}\bigg] $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\mu $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=2b^2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=6 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $b:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/laplace)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/laplace.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/110gPFTHOnQqecbXrjq3Wqv52I5Cw93UjL7eoSVC1DIs)

<script setup>
const downloadExcelFile = function() {
    const fileId = "laplace";
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

    