# BETA PRIME DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.BetaPrime({"alpha": *, "beta": *})
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
$$ X\sim\mathrm{BetaPrime}\left(\alpha,\beta\right) $$

**Distribution Domain**
$$ x\in [0,\infty) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I\left(\frac{x}{1+x},\alpha,\beta\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{x^{\alpha-1} (1+x)^{-\alpha -\beta}}{\text{Beta}(\alpha,\beta)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\frac{I^{-1}\left(u,\alpha,\beta\right)}{1-I^{-1}\left(u,\alpha,\beta\right)} $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{0}^{\infty}x^{k}f_{X}\left(x\right)dx=\frac{\Gamma\left(k+\alpha\right)\Gamma\left(\beta-k\right)}{\Gamma\left(\alpha\right)\Gamma\left(\beta\right)} \quad \text{if }\beta>k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{\alpha}{\beta-1} \quad \text{if }\beta>1 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{\alpha(\alpha+\beta-1)}{(\beta-2)(\beta-1)^2} \quad \text{if }\beta>2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{2(2\alpha+\beta-1)}{\beta-3}\sqrt{\frac{\beta-2}{\alpha(\alpha+\beta-1)}} \quad \text{if }\beta>3 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} \quad \text{if }\beta>4 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\frac{I^{-1}\left(\frac{1}{2},\alpha,\beta\right)}{1-I^{-1}\left(\frac{1}{2},\alpha,\beta\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\frac{\alpha-1}{\beta+1} $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\Gamma\left(x\right):\text{Gamma function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/beta_prime)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/beta_prime.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1-8cKeS9D6YixQE_uLig7UarXcoQoE-341yHDj8sfXA8)

<script setup>
const downloadExcelFile = function() {
    const fileId = "beta_prime";
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

    