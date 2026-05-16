# DISCRETE LAPLACE DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.discrete.DiscreteLaplace({"a": *, "loc": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PMF, PPF receive float or numpy.ndarray.
distribution.cdf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.pmf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.ppf(int | numpy.ndarray[int]) # -> float | numpy.ndarray
distribution.sample(int) # -> numpy.ndarray

## STATS
distribution.mean # -> float
distribution.variance # -> float
distribution.standard_deviation # -> float
distribution.skewness # -> float
distribution.kurtosis # -> float
distribution.median # -> int
distribution.mode # -> int
```

## Equations

**Distribution Definition**
$$ X\sim\mathrm{DiscreteLaplace}\left(a,\text{Loc}\right) $$

**Distribution Domain**
$$ x\in\text{Loc}+\mathbb{Z}\equiv\left\{\dots,\text{Loc}-1,\text{Loc},\text{Loc}+1,\dots\right\} $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{Z} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\left\{\begin{array}{cl}\dfrac{e^{a\left(x-\text{Loc}+1\right)}}{1+e^{a}} & \text{if } x < \text{Loc} \\[6pt] 1-\dfrac{e^{-a\left(x-\text{Loc}\right)}}{1+e^{a}} & \text{if } x \geq \text{Loc} \end{array}\right. $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\tanh\!\left(\frac{a}{2}\right)e^{-a\left|x-\text{Loc}\right|} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\left\{\begin{array}{cl}\left\lceil\dfrac{\ln\!\left(u\left(1+e^{a}\right)\right)}{a}-1\right\rceil & \text{if } u < \tfrac{1}{2} \\[6pt] \left\lceil-\dfrac{\ln\!\left(\left(1-u\right)\left(1+e^{a}\right)\right)}{a}\right\rceil & \text{if } u \geq \tfrac{1}{2} \end{array}\right. $$

**Parametric Centered Moments**
$$ E[X^k]=\mu'_{k}=\sum_{x\in\text{Loc}+\mathbb{Z}}x^{k}f_{X}\left(x\right) $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1}=\text{Loc} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=(\mu'_{2}-\mu'^{2}_{1})=\dfrac{2e^{-a}}{\left(1-e^{-a}\right)^{2}} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}}=0 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}}=5+\cosh(a) $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc} $$

**Additional Information and Definitions**
- $a:\text{Shape parameter, controls how rapidly the PMF decays from }\text{Loc}$
- $\text{Loc}:\text{Integer location parameter (peak of the distribution)}$
- $u:\text{Uniform[0,1] random varible}$
- $\tanh\!\left(\tfrac{a}{2}\right)=\dfrac{1-e^{-a}}{1+e^{-a}}$
- $\cosh(a)=\tfrac{1}{2}\!\left(e^{a}+e^{-a}\right)$
- $\lfloor{x}\rfloor: \text{Floor function}$
- $\lceil{x}\rceil: \text{Ceiling Function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/discrete/discrete_laplace)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/discrete/discrete_laplace.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1xYW2rLJh82oLC3h6t2YX_WO1hHwr5Q-AqTTHgCnmzq8)

<script setup>
const downloadExcelFile = function() {
    const fileId = "discrete_laplace";
    const url = `https://raw.githubusercontent.com/phitter-core/phitter-files/main/discrete/${fileId}.xlsx`;
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
    