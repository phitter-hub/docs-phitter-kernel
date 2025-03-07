# BETA PRIME 4P DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.BETA_PRIME_4P({"alpha": *, "beta": *, "loc": *, "scale": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PDF, PPF, PMF receive float or numpy.ndarray. For discrete distributions PMF instead of PDF. Parameters notation are in description of ditribution
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
$$ X\sim\mathrm{BetaPrime}_{\mathrm{4P}}\left(\alpha,\beta,\text{Loc},\text{Sc}\right) $$

**Distribution Domain**
$$ x\in [\text{Loc},\infty) $$

**Parameters Domain and Constraints**
$$ \alpha\in\mathbb{R}^{+}, \beta\in\mathbb{R}^{+}, \text{Loc}\in\mathbb{R}, \text{Sc}\in\mathbb{R}^{+} $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=I\left(\frac{z(x)}{1+z(x)},\alpha,\beta\right) $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{z(x)^{\alpha-1} (1+z(x))^{-\alpha -\beta}}{\text{Sc}\times \text{Beta}(\alpha,\beta)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\text{Loc}+\text{Sc}\frac{I^{-1}\left(u,\alpha,\beta\right)}{1-I^{-1}\left(u,\alpha,\beta\right)} $$

**Parametric Centered Moments**
$$ \tilde{\mu}'_{k}=E[\tilde{X}^k]=\int_{0}^{\infty}x^{k}f_{\tilde{X}}\left(x\right)dx=\frac{\Gamma\left(k+\alpha\right)\Gamma\left(\beta-k\right)}{\Gamma\left(\alpha\right)\Gamma\left(\beta\right)} \quad \text{if }\beta>k $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\text{Loc}+\text{Sc}\tilde{\mu}'_{1}=\text{Loc}+\text{Sc}\frac{\alpha}{\beta-1} \quad \text{if }\beta>1 $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\text{Sc}^{2}(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})=\text{Sc}^{2}\frac{\alpha(\alpha+\beta-1)}{(\beta-2)(\beta-1)^2} \quad \text{if }\beta>2 $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\tilde{\mu}'_{3}-3\tilde{\mu}'_{2}\tilde{\mu}'_{1}+2\tilde{\mu}'^{3}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{1.5}}=\frac{2(2\alpha+\beta-1)}{\beta-3}\sqrt{\frac{\beta-2}{\alpha(\alpha+\beta-1)}} \quad \text{if }\beta>3 $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\tilde{\mu}'_{4}-4\tilde{\mu}'_{1}\tilde{\mu}'_{3}+6\tilde{\mu}'^{2}_{1}\tilde{\mu}'_{2}-3\tilde{\mu}'^{4}_{1}}{(\tilde{\mu}'_{2}-\tilde{\mu}'^{2}_{1})^{2}} \quad \text{if }\beta>4 $$

**Parametric Median**
$$ \mathrm{Median}(X)=\text{Loc}+\text{Sc}\frac{I^{-1}\left(\frac{1}{2},\alpha,\beta\right)}{1-I^{-1}\left(\frac{1}{2},\alpha,\beta\right)} $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=\text{Loc}+\text{Sc}\frac{\alpha-1}{\beta+1} $$

**Additional Information and Definitions**
- $\tilde{X}\sim \mathrm{BetaPrime}\left( \alpha,\beta \right)$
- $\text{Loc}:\text{Location parameter}$
- $\text{Sc}:\text{Scale parameter}$
- $z\left(x\right)=\left(x-\text{Loc}\right)/\text{Sc}$
- $u:\text{Uniform[0,1] random varible}$
- $I\left(x,a,b\right):\text{Regularized incomplete beta function}$
- $I^{-1}\left(x,a,b\right):\text{Inverse of regularized incomplete beta function}$
- $\Gamma\left(x\right):\text{Gamma function}$
- $\text{Beta}\left(x,y\right):\text{Beta function}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/beta_prime_4p)
-   [Excel file from GitHub repository](https://github.com/phitterio/phitter-files/blob/main/continuous/beta_prime_4p.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1vlaZrj_jX9oNGwjW0o4Z1AUTuUTGE8Z-Akis_wb7Jq4)
    