# BRADFORD DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Bradford({"c": *, "min": *, "max": *})
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
$$ X\sim\mathrm{Bradford}\left(c,\text{min},\text{max}\right) $$

**Distribution Domain**
$$ x\in\left(\text{min},\text{max}\right) $$

**Parameters Domain and Constraints**
$$ c\in\mathbb{R}^{+}, \text{min}\in\mathbb{R}, \text{max}\in\mathbb{R}, \text{min} < \text{max} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{\ln\left(1+c\cdot z(x)\right)}{k} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{c}{k\left(1+c\cdot z(x)\right)\left(\text{max}-\text{min}\right)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{min}+(\text{max}-\text{min})\times \frac{\left(1+c\right)^{u}-1}{c} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{1}x^{k}f_{\tilde{X}}\left(x\right)dx $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{min}+\left(\text{max}-\text{min}\right)\cdot\tilde{\mu}'_{1}=\text{min}+\left(\text{max}-\text{min}\right)\cdot\frac{c-k}{ck} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\left(\text{max}-\text{min}\right)^{2}\cdot(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\left(\text{max}-\text{min}\right)^{2}\cdot\frac{\left(c+2\right)k-2c}{2ck^{2}} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{\sqrt{2}\left(12c^{2}-9kc\left(c+2\right)+2k^{2}\left(c\left(c+3\right)+3\right)\right)}{\sqrt{c\left(c\left(k-2\right)+2k\right)}\left(3c\left(k-2\right)+6k\right)} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}}=3+\frac{c^{3}\left(k-3\right)\left(k\left(3k-16\right)+24\right)+12kc^{2}\left(k-4\right)\left(k-3\right)+6ck^{2}\left(3k-14\right)+12k^{3}}{3c\left(c\left(k-2\right)+2k\right)^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{min}+(\text{max}-\text{min})\cdot\frac{\left(1+c\right)^{frac{1}{2}}-1}{c} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{min} $$

**Additional Information and Definitions**
- $\tilde{X}\sim\mathrm{Bradford}\left(c,0,1\right)$
- $k=\ln(1+c)$
- $z\left(x\right)=\left(x-\text{min}\right)/\left(\text{max}-\text{min}\right)$
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/bradford)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/bradford.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1kI8b05IXur3I9SUJdrbYIdv7zMdzVxVGPWx6sK6YmuU)
    