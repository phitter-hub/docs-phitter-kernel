# RAYLEIGH DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Rayleigh({"gamma": *, "sigma": *})
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
$$ X\sim\mathrm{Rayleigh}\left(\gamma,\sigma\right) $$

**Distribution Domain**
$$ x\in\left[\gamma,\infty\right) $$

**Parameters Domain and Constraints**
$$ \gamma\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-e^{-z(x)^{2}/2} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=z(x)\times e^{-z(x)^{2}/2}/\sigma $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\gamma+\sigma\sqrt{-2\log\left(1-u\right)} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\sqrt{2^{k}}\Gamma\left(\frac{k}{2}+1\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\gamma+\sigma\cdot\mu'_{1}=\gamma+\sigma\sqrt{\frac{\pi}{2}} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\sigma^{2}(\mu'_{2}-\mu'^{2}_{1})=\sigma^{2}\frac{4-\pi}{2} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2\left(\pi-3\right)\sqrt{\pi}}{\left(4-\pi\right)^{3/2}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{24\pi-6\pi^{2}-16}{\left(4-\pi\right)^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\gamma+\sigma\sqrt{-2\log\left(\frac{1}{2}\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\gamma+\sigma $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Rayleigh}\left(0,1\right)$
- $\gamma:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\gamma\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/rayleigh)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/rayleigh.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1UWtjOwokob4x43OcMLLFbNTYUqOo5dJWqSTfWbS-yyw)

<script setup>
const downloadExcelFile = function() {
    const fileId = "rayleigh";
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

    