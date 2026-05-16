# BATES DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Bates({"n": *, "min": *, "max": *})
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
$$ X\sim\mathrm{Bates}\left(n,\text{min},\text{max}\right) $$

**Distribution Domain**
$$ x\in\left(\text{min},\text{max}\right) $$

**Parameters Domain and Constraints**
$$ n\in\mathbb{N}^{+}, \text{min}\in\mathbb{R}, \text{max}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{1}{n!}\sum_{k=0}^{\lfloor y\rfloor}\left(-1\right)^{k}\binom{n}{k}\left(y-k\right)^{n} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{n}{\left(\text{max}-\text{min}\right)(n-1)!}\sum_{k=0}^{\lfloor y\rfloor}\left(-1\right)^{k}\binom{n}{k}\left(y-k\right)^{n-1} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{numerical inversion of }F_{X} $$

**Parametric Centered Moments**
$$ \tilde{\mu}_{k}=E\left[\left(Y-\tfrac{1}{2}\right)^{k}\right] $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\frac{\text{min}+\text{max}}{2} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\frac{\left(\text{max}-\text{min}\right)^{2}}{12n} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=3-\frac{6}{5n} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\frac{\text{min}+\text{max}}{2} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\frac{\text{min}+\text{max}}{2} $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function is not}$ $\text{feasible. Nonetheless, it is possible to generate a random sample from the distribution.}$
- $X=\text{min}+\left(\text{max}-\text{min}\right)\cdot\frac{1}{n}\sum_{i=1}^{n}U_{i}$
- $y=n\cdot\left(x-\text{min}\right)/\left(\text{max}-\text{min}\right)$
- $n:\text{Number of averaged uniforms (Irwin-Hall order)}$
- $\text{min}:\text{Lower bound of the support}$
- $\text{max}:\text{Upper bound of the support}$
- $\binom{n}{k}:\text{Binomial coefficient}$
- $U_{i}:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/bates)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/bates.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1q-t-1HNWtpzRNLlFZHKcQ-QrQaWqSU9kRvfINhgFJ8g)

<script setup>
const downloadExcelFile = function() {
    const fileId = "bates";
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
    