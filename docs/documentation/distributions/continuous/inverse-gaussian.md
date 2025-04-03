# INVERSE GAUSSIAN DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.InverseGaussian({"mu": *, "lambda": *})
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
$$ X\sim\mathrm{InverseGaussian}\left(\mu,\lambda\right) $$

**Distribution Domain**
$$ x\in\left(0,\infty\right) $$

**Parameters Domain and Constraints**
$$ \mu\in\mathbb{R}^{+}, \lambda\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\Phi\left(\sqrt{\frac{\lambda}{x}}\left(\frac{x}{\mu}-1\right)\right)+\exp\left(\frac{2 \lambda}{\mu}\right) \Phi\left(-\sqrt{\frac{\lambda}{x}}\left(\frac{x}{\mu}+1\right)\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\sqrt\frac{\lambda}{2 \pi x^3} \exp\left[-\frac{\lambda (x-\mu)^2}{2 \mu^2 x}\right] $$

**Percent Point Function / Sample**
$$ \text{Sample}_{X}=\left\{\begin{array}{cl} x_{0} \quad \text{if } u_{2}\leqslant\frac{\mu}{\mu+x_{0}}\\ \frac{\mu^{2}}{x_{0}} \quad \text{if } u_{2}\geqslant \frac{\mu}{\mu+x_{0}} \end{array} \right. $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty }x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\mu $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{\mu^3}{\lambda} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=3\left(\frac{\mu}{\lambda}\right)^{1/2} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3+\frac{15 \mu}{\lambda} $$

**Parametric Median**
$$ \mathrm{Median}(X)=F^{-1}_{X}\left(\frac{1}{2}\right) $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\mu\left[\left(1+\frac{9 \mu^2}{4 \lambda^2}\right)^\frac{1}{2}-\frac{3 \mu}{2 \lambda}\right] $$

**Additional Information and Definitions**
- $\text{Computing an analytic expression for the inverse of the cumulative distribution function is not} \\ \text{feasible. Nonetheless, it is possible to generate a random sample from the distribution.}$
- $\Phi\left(x\right):\text{CDF normal standard distribution}$
- $\Phi^{-1}\left(x\right):\text{PPF normal standard distribution}$
- $x_{0}=\mu+\frac{\mu^2 [\Phi^{-1}\left(u_{1}\right)]^{2}}{2\lambda}-\frac{\mu}{2\lambda}\sqrt{4\mu \lambda [\Phi^{-1}\left(u_{1}\right)]^{2}+\mu^2 ([\Phi^{-1}\left(u_{1}\right)]^{2})^2}$
- $u_{1}:\text{Uniform[0,1] random varible}$
- $u_{2}:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/inverse_gaussian)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/inverse_gaussian.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/10LaEnmnRxNESViLTlw6FDyt1YSWNbMlBXaWc9t4q5qA)

<script setup>
const downloadExcelFile = function() {
    const fileId = "inverse_gaussian";
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

    