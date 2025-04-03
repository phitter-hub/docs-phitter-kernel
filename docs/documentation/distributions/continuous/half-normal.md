# HALF NORMAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.HalfNormal({"mu": *, "sigma": *})
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
$$ X\sim\mathrm{HalfNormal}\left(\mu,\sigma\right) $$

**Distribution Domain**
$$ x\in\left(\mu,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=2\Phi\left(z(x)\right)-1=\operatorname{erf}\left(\frac{z(x)}{\sqrt{2}}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{\sqrt{2}}{\sigma\sqrt{\pi}}\exp\left(-\frac{z(x)^2}{2}\right) $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\mu+\sigma\Phi^{-1}\left(\frac{1+u}{2}\right)=\tilde{\mu}+\sigma\sqrt{2}\operatorname{erf}^{-1}(u) $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{2^{n/2} \Gamma(\frac{n+1}{2})}{\sqrt{\pi}} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\tilde{\mu}+\sigma\tilde{\mu}'_{1}=\tilde{\mu}+\sigma\sqrt{\frac{2}{\pi}} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\sigma^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\sigma^2\left(1-\frac 2 \pi\right) $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{\sqrt{2}(4-\pi)}{(\pi-2)^{3/2}}=0.9952717 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3+\frac{8(\pi-3)}{(\pi-2)^2}= 3.869177 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\mu+\sigma\sqrt{2}\operatorname{erf}^{-1}(1/2) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{HalfNormal}\left(0,1\right)$
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$
- $\mathrm{erf}(x):\text{Error function}$
- $\Gamma\left(x\right):\text{Gamma function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/half_normal)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/half_normal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1HQpNSNIhZPzMQvWWKyShnYNH74d1Bhs_d6k9La52V9M)

<script setup>
const downloadExcelFile = function() {
    const fileId = "half_normal";
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

    