# TRIANGULAR DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Triangular({"a": *, "b": *, "c": *})
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
$$ X\sim\mathrm{Triangular}\left(a,b,c\right) $$

**Distribution Domain**
$$ x\in\left[a,b\right] $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}, b\in\mathbb{R}, c\in\mathbb{R}, a < c < b $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left\{\begin{array}{cl}\frac{(x-a)^2}{(b-a)(c-a)} & \text{if } \ a < x \leq c \\ 1-\frac{(b-x)^2}{(b-a)(b-c)} & \text{if } \ c < x < b \\ \end{array} \right. $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\left\{\begin{array}{cl}\frac{2(x-a)}{(b-a)(c-a)} & \text{if } \ a \leq x < c,\\ \frac{2(b-x)}{(b-a)(b-c)} & \text{if } \ c \leq x \leq b,\\ \end{array} \right. $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\left\{\begin{array}{cl} a+\sqrt{U(b-a)(c-a)} & \text{if } \ 0 < U < \frac{c-a}{b-a} \\ b-\sqrt{(1-U)(b-a)(b-c)} & \text{if } \ \frac{c-a}{b-a} \leq U < 1 \end{array} \right. $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{a}^{b}x^{k}f_{X}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\frac{a+b+c}{3} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1}=\frac{a^2+b^2+c^2-ab-ac-bc}{18} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=\frac{\sqrt 2 (a\!+\!b\!-\!2c)(2a\!-\!b\!-\!c)(a\!-\!2b\!+\!c)}{5(a^2\!+\!b^2\!+\!c^2\!-\!ab\!-\!ac\!-\!bc)^\frac{3}{2}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=3-\frac{3}{5} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\left\{\begin{array}{cl} a+\sqrt{\frac{(b-a)(c-a)}{2}} & \text{if } c \ge\frac{a+b}{2} \\ b-\sqrt{\frac{(b-a)(b-c)}{2}} & \text{if } c \le\frac{a+b}{2} \end{array} \right. $$

**Parametric Mode**
$$ \mathrm{Mode}(X)\in [b,c] $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/triangular)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/triangular.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1nirKOt7O7rUf2nlYu61cnNYT91GKSzb6pVlc1-pzzGw)

<script setup>
const downloadExcelFile = function() {
    const fileId = "triangular";
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

    