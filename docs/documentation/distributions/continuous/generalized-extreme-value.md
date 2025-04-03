# GENERALIZED EXTREME VALUE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.GeneralizedExtremeValue({"xi": *, "mu": *, "sigma": *})
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
$$ X\sim\mathrm{GeneralizedExtremeValue}\left(\xi,\mu,\sigma\right) $$

**Distribution Domain**
$$ \text{if }\xi>0:\ x\in\left(z(x),\infty\right),\quad \text{if }\xi=0:\ x\in\left(-\infty,\infty\right),\quad \text{if }\xi<0:\ x\in\left(-\infty,z(x)\right) $$

**Parameters Domain and Constraints**
$$ \xi\in\mathbb{R}, \mu\in\mathbb{R}, \sigma\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left\{\begin{array}{cl} \exp\Bigl(-\exp(-z(x))\Bigr) & \text{if } ~ \xi=0 \\ \exp\Bigl(-(1+\xi z(x))^{-1/\xi}\Bigr) & \text{if } ~ \xi \neq 0\end{array} \right. $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\left\{\begin{array}{cl}\frac{1}{\sigma}\exp(-z(x)) \exp\Bigl(-\exp(-z(x))\Bigr) & \text{if } ~ \xi=0 \\ \frac{1}{\sigma}\Bigl(1+\xi z(x)\Bigr)^{-(1+1/\xi)} \exp\Bigl(-(1+\xi z(x))^{-1/\xi}\Bigr) & \text{if } ~ \xi \neq 0\end{array} \right. $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\{\begin{array}{cl} \mu-\sigma\ln\left(-\ln\left(u\right)\right) & \text{if } ~ \xi=0 \\ \mu+\frac{}{}\frac{\sigma}{\xi}\left(\left(-\ln(u)\,\right)^{-\xi}-1\right) & \text{if } ~ \xi \neq 0\\ \end{array} \right. $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{-\infty}^{\infty}x^{k}f_{X}\left(x\right)dx=\Gamma(1-k\xi) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\left\{\begin{array}{cl}\mu+\sigma(\mu'_{1}-1)/\xi & \text{if}\ \xi\neq 0,\xi<1\\ \mu+\sigma\,\gamma & \text{if}\ \xi=0\end{array} \right. $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left\{\begin{array}{cl}\sigma^2\,(\mu'_{2}-\mu'^{2}_{1})/\xi^2 & \text{if}\ \xi\neq0,\xi<\frac12\\ \sigma^2\,\frac{\pi^2}{6} & \text{if}\ \xi=0\end{array} \right. $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\left\{\begin{array}{cl}\text{sign}(\xi)\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} & \text{if}\ \xi\neq0,\xi<\frac{1}{3} \\ \frac{12 \sqrt{6}\,\zeta(3)}{\pi^3} & \text{if}\ \xi=0\end{array} \right. $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\left\{\begin{array}{cl}3+\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} & \text{if}\ \xi\neq0,\xi<\frac{1}{4}\\ 3+\frac{12}{5} & \text{if}\ \xi=0\end{array} \right. $$

**Parametric Median**
$$ \mathrm{Median}(X)=\left\{\begin{array}{cl}\mu+\sigma\frac{(\ln2)^{-\xi}-1}{\xi} & \text{if }\ \xi\neq0\\ \mu-\sigma \ln\ln2 & \text{if}\ \xi=0\end{array} \right. $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\left\{\begin{array}{cl}\mu+\sigma\frac{(1+\xi)^{-\xi}-1}{\xi} & \text{if }\ \xi\neq0\\ \mu & \text{if }\ \xi=0\end{array} \right. $$

**Additional Information and Definitions**
- $\mu:\text{Location parameter}$
- $\sigma:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\mu\right)/\sigma$
- $u:\text{Uniform[0,1] random varible}$
- $\Gamma\left(x\right):\text{Gamma function}$
- $\gamma:\text{Euler-Mascheroni constant}=0.5772156649$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/generalized_extreme_value)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/generalized_extreme_value.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/19qHvnTJGVVZ7zhi-yhauCOGhu0iAdkYJ5FFgwv1q5OI)

<script setup>
const downloadExcelFile = function() {
    const fileId = "generalized_extreme_value";
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

    