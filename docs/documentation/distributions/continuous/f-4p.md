# F 4P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.F4P({"df1": *, "df2": *, "loc": *, "scale": *})
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
$$ X\sim\mathrm{F_{4P}}\left(\text{df}_{1},\text{df}_{2},\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in\left[\text{Loc},\infty\right) $$

**Parameters Domain and Constraints**
$$ \text{df}_{1}\in\mathbb{R}^{+}, \text{df}_{2}\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I_{\text{df}_{1} z(x)/(\text{df}_{1} z(x)+\text{df}_{2})}\left (\tfrac{\text{df}_{1}}{2},\tfrac{\text{df}_{2}}{2}\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{\text{Sc}}\times \frac{\sqrt{\frac{(\text{df}_{1} z(x))^{\text{df}_{1}} \text{df}_{2}^{\text{df}_{2}}}{(\text{df}_{1} z(x)+\text{df}_{2})^{\text{df}_{1}+\text{df}_{2}}}}}{z(x)\,\text{Beta}\left(\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\text{Sc}\frac{\text{df}_{2}\times I^{-1}\left(u,\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)}{\text{df}_{1}\times \left(1-I^{-1}\left(u,\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)\right)} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{\Gamma\left(\tfrac{\text{df}_{1}}{2}+k\right) }{\Gamma\left(\tfrac{\text{df}_{1}}{2}\right)}\frac{\Gamma\left(\tfrac{\text{df}_{2}}{2}-k\right) }{\Gamma\left(\tfrac{\text{df}_{2}}{2}\right) }\left(\frac{\text{df}_{2}}{\text{df}_{1}}\right)^k \quad \text{if }\text{df}_{2} > 2k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\tilde{\mu}'_{1}=\text{Loc}+\text{Sc}\frac{\text{df}_{2}}{\text{df}_{2}-2} \quad \text{if }\text{df}_{2} > 2 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\text{Sc}^{2}\frac{2\,\text{df}_{2}^2\,(\text{df}_{1}+\text{df}_{2}-2)}{\text{df}_{1} (\text{df}_{2}-2)^2 (\text{df}_{2}-4)} \quad \text{if }\text{df}_{2} > 4 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{(2 \text{df}_{1}+\text{df}_{2}-2) \sqrt{8 (\text{df}_{2}-4)}}{(\text{df}_{2}-6) \sqrt{\text{df}_{1} (\text{df}_{1}+\text{df}_{2} -2)}}\quad \text{if }\text{df}_{2} > 6 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=\frac{3\left(8+\left(\text{df}_{2}-6\right)\times \mathrm{Skewness}(X)^{2}\right)}{2\text{df}_{2}-16}+3\quad \text{if }\text{df}_{2} > 8 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{Sc}\frac{\text{df}_{2}\times I^{-1}\left(\frac{1}{2},\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)}{\text{df}_{1}\times \left(1-I^{-1}\left(\frac{1}{2},\frac{\text{df}_{1}}{2},\frac{\text{df}_{2}}{2}\right)\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\text{Sc}\frac{\text{df}_{2}\left(\text{df}_{1}-2\right)}{\text{df}_{1}\left(\text{df}_{2}+2\right)}  \quad \text{if }\text{df}_{1} > 2 $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{F}\left(\text{df}_{1},\text{df}_{2}\right)$
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/f_4p)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/f_4p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/11MgyMqzOyGNtFLdGviRTeNhAQMYBCJ8QRMHGxoPCzwM)

<script setup>
const downloadExcelFile = function() {
    const fileId = "f_4p";
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

    