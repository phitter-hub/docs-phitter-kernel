# MAXWELL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Maxwell({"alpha": *, "loc": *})
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
$$ X\sim\mathrm{Maxwell}\left(\alpha,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\operatorname{erf}\left(\frac{x-\text{Loc}}{\sqrt{2} \alpha}\right) -\sqrt{\frac{2}{\pi}}\frac{(x-\text{Loc}) e^{-(x-\text{Loc})^2/\left(2\alpha^2\right)}}{\alpha} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\sqrt{\frac{2}{\pi}}\frac{(x-\text{Loc})^2 e^{-(x-\text{Loc})^2/\left(2\alpha^2\right)}}{\alpha^3} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\alpha\sqrt{2\text{P}^{-1}\left(1.5,u\right)} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty}^{\infty}x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\text{Loc}+2\alpha \sqrt{\frac{2}{\pi}} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{\alpha^2(3 \pi-8)}{\pi} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2 \sqrt{2} (16 -5 \pi)}{(3 \pi-8)^{3/2}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=4\frac{\left(-96+40\pi-3\pi^2\right)}{(3 \pi-8)^2}+3 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\alpha\sqrt{2\text{P}^{-1}\left(1.5,\frac{1}{2}\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\alpha\sqrt{2} $$

**Additional Information and Definitions**
- $\text{Loc}:\text{Location parameter}$
- $\alpha:\text{Scale parameter}$
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/maxwell)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/maxwell.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/15tPw2RM2_a0vJMjVwNgsJnJUKFk9xbcEALqOf1m5qH0)

<script setup>
const downloadExcelFile = function() {
    const fileId = "maxwell";
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

    