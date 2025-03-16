# NAKAGAMI DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Nakagami({"m": *, "omega": *})
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
$$ X\sim\mathrm{Nakagami}\left(m,\Omega\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ m\in\mathbb{R}^{+}_{\geqslant \frac{1}{2}}, \Omega\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{\gamma\left(m,\frac{m}{\Omega} x^2\right)}{\Gamma(m)}=\text{P}\left(m,\frac{m}{\Omega} x^2\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{2m^m}{\Gamma(m)\Omega^m} x^{2m-1} \exp\left(-\frac{m}{\Omega}x^2\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\sqrt{\frac{\Omega}{m}\text{P}^{-1}\left(m,u\right)} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)}\left(\frac{\Omega}{m}\right)^{1/2} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\Omega\left(1-\frac{1}{m}\left(\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)}\right)^2\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)\sqrt{m}}\left(1-4m\left(1-\frac{1}{m}\left(\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)}\right)^2\right)\right)}{2m\left(1-\frac{1}{m}\left(\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)}\right)^2\right)^{3/2}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{-6\left(\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)\sqrt{m}}\right)^{4}m+\left(8m-2\right)\left(\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)\sqrt{m}}\right)^{2}-2m+1}{m\left(1-\frac{1}{m}\left(\frac{\Gamma(m+\frac{1}{2})}{\Gamma(m)}\right)^2\right)^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\sqrt{\frac{\Omega}{m}\text{P}^{-1}\left(m,\frac{1}{2}\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\frac{\sqrt{2}}{2}\left(\frac{(2m-1)\Omega}{m}\right)^{1/2} $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $\text{P}\left(a,x\right)=\frac{\gamma(a,x)}{\Gamma(a)}:\text{Regularized lower incomplete gamma function}$
- $\text{P}^{-1}\left(a,u\right):\text{Inverse of regularized lower incomplete gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/nakagami)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/nakagami.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1fY8ID5gz1R6oWFm4w91GFdQMCd0wJ5ZRgfWi-yQtGqs)

<script setup>
const downloadExcelFile = function() {
    const fileId = "nakagami";
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

    