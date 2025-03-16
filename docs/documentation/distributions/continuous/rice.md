# RICE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Rice({"v": *, "sigma": *})
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
$$ X\sim\mathrm{Rice}\left(v,\sigma\right) $$

**Distribution Domain**
$$ x\in [0,\infty) $$

**Parameters Domain and Constraints**
$$ v\in\mathbb{R}^{+}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=1-Q_1\left(\frac{v}{\sigma},\frac{x}{\sigma }\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{x}{\sigma^2}\exp\left(\frac{-(x^2+v^2)}{2\sigma^2}\right)I_0\left(\frac{xv}{\sigma^2}\right) $$

**Percent Point Function / Sample**
$$ \text{Sample}_{X}=\sqrt{\Phi^{-1}(u_{1},v,\sigma)^{2}+\Phi^{-1}(u_{2},0,\sigma)^{2}} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty }^{\infty }x^{k}f_{X}\left(x\right)dx=\sigma^k2^{k/2}\,\Gamma(1+k/2)\,L_{k/2}(-v^2/2\sigma^2) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(\frac{1}{2}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\arg\max_{x}f_{X}\left(x\right) $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function is not} \\ \text{feasible. Nonetheless, it is possible to generate a random sample from the distribution.}$
- $\Phi^{-1}\left(u,mean,variance\right):\text{Inverse of cumulative function from normal distribution}$
- $L_{r}\left(x\right): \text{Laguerre polynomials of order }r\in\mathbb{R}$
- $L_{\frac{1}{2}}\left(x\right)=e^{x/2} (x) I_{1}\left(\frac{x}{2}\right)-e^{x/2} (x-1) I_{0}\left(\frac{x}{2}\right)$
- $L_{\frac{3}{2}}\left(x\right)=\frac{1}{3} e^{x/2} (2 x^2-6 x+3) I_0(x/2)-\frac{2}{3} e^{x/2} (x-2) x I_1(x/2)$
- $I_{\alpha}\left(x\right): \text{Modified Bessel function of the first kind of order }\alpha\in\mathbb{N}$
- $Q_{k}(a,b): \text{Marcum Q-function of order k }\in\mathbb{N}$
- $u_{1}:\text{Uniform[0,1] random varible}$
- $u_{2}:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/rice)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/rice.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1hGVFWbF0w7D0l54t_p0vUId0rO2s61BRdrgslDYTnWc)

<script setup>
const downloadExcelFile = function() {
    const fileId = "rice";
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

    