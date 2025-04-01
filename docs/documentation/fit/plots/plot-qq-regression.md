# Quantile-Quantile Plot with Regression Line

A **Quantile-Quantile (QQ) Plot with Regression Line** is a statistical graphical method for comparing the quantiles of an empirical dataset against those of a theoretical probability distribution. The inclusion of a regression line facilitates the assessment of linearity, providing an additional measure of the goodness-of-fit for the selected distribution.

## Method Overview

The `.qq_plot_regression()` method generates a **QQ Plot** enhanced by a regression line, allowing for a more detailed visual evaluation of how well the theoretical distribution models the given dataset.

### Mathematical Formulation

In a QQ plot, empirical quantiles $Q_{\text{empirical}}$ are plotted against theoretical quantiles $Q_{\text{theoretical}}$:

$$
Q_{\text{theoretical}}(p) = F^{-1}(p)
$$

$$
Q_{\text{empirical}}(p) = X_{i}
$$

where:

-   $F^{-1}(p)$ is the inverse cumulative distribution function (quantile function) of the theoretical distribution.
-   $X_{i}$ is the $i$-th order statistic of the sample.
-   $p_i$ is defined as:

$$
p_i = \frac{i - 0.5}{n}
$$

where $n$ is the number of observations.

### Regression Line

To assess the linear relationship between empirical and theoretical quantiles, a simple linear regression is applied:

$$
Q_{\text{empirical}} = \beta_0 + \beta_1 Q_{\text{theoretical}} + \varepsilon
$$

where:

-   $\beta_0$ (intercept) and $\beta_1$ (slope) are estimated using least squares regression.
-   $\varepsilon$ represents the residual error.

If the dataset follows the theoretical distribution, the regression line should have a slope $\beta_1$ close to 1 and an intercept $\beta_0$ close to 0.

### Interpretation of Deviations

-   **Points closely following the regression line**: The empirical data follows the theoretical distribution.
-   **Deviations from linearity**: Indicate skewness, heavy/light tails, or mismatches in distributional assumptions.
-   **Steeper or flatter slopes $\beta_1 \neq 1$**: Suggest different variability between empirical and theoretical distributions.

---

## Parameters

### General Parameters

-   **`id_distribution`** (_str_):  
    Identifier of the theoretical probability distribution under evaluation. The list of supported distributions is available in the [Distributions Documentation](/documentation/distributions/continuous-distributions).

-   **`plot_title`** (_str, optional_):  
    The title of the generated plot. _(Default: `"QQ Plot - Regression"`)_

-   **`plot_xaxis_title`** (_str, optional_):  
    The label for the horizontal axis. _(Default: `"Theoretical Quantiles"`)_

-   **`plot_yaxis_title`** (_str, optional_):  
    The label for the vertical axis. _(Default: `"Sample Quantiles"`)_

-   **`plot_legend_title`** (_str | None, optional_):  
    The title for the legend. If set to `None`, the legend title is omitted. _(Default: `"Distributions"`)_

-   **`plot_height`** (_int, optional_):  
    The height of the plot in pixels. _(Default: `400`)_

-   **`plot_width`** (_int, optional_):  
    The width of the plot in pixels. _(Default: `600`)_

### QQ Markers Configuration

-   **`qq_marker_name`** (_str, optional_):  
    The label assigned to the quantile markers displayed in the legend. _(Default: `"Markers QQ"`)_

-   **`qq_marker_color`** (_str, optional_):  
    The color of the quantile markers, specified in RGBA format. _(Default: `"rgba(128,128,128,1)"`)_

### Regression Line Configuration

-   **`regression_line_name`** (_str, optional_):  
    The label assigned to the regression line in the legend. _(Default: `"Regression"`)_

-   **`regression_line_color`** (_str, optional_):  
    The color of the regression line, defined in RGBA format. _(Default: `"rgba(255,0,0,1)"`)_

-   **`regression_line_width`** (_int, optional_):  
    The thickness of the regression line. _(Default: `2`)_

### Rendering Options

-   **`plotly_plot_renderer`** (_"png" | "jpeg" | "svg" | None, optional_):  
    The format used for exporting the plot when utilizing the Plotly visualization library. If `None`, the default rendering engine is employed.

-   **`plot_engine`** (_"plotly" | "matplotlib", optional_):  
    Specifies the backend library for generating the plot. _(Default: `"plotly"`)_

---

## Default Usage

The following example illustrates the basic usage of the `.qq_plot_regression()` method with default parameters:

```python
phi.qq_plot_regression(id_distribution="weibull")
```

This command generates a **QQ Plot with Regression Line** for the Weibull distribution. The default visualization settings are applied.

---

## Complete Usage

For greater customization, the following example demonstrates how to configure additional parameters:

```python
phi.qq_plot_regression(
    id_distribution="normal",
    plot_title="QQ Plot for Normal Distribution",
    plot_xaxis_title="Expected Quantiles",
    plot_yaxis_title="Observed Quantiles",
    plot_legend_title="Comparison",
    plot_height=500,
    plot_width=800,
    qq_marker_name="Empirical Data",
    qq_marker_color="rgba(0,0,255,0.8)",
    regression_line_name="Fitted Line",
    regression_line_color="rgba(255,0,0,1)",
    regression_line_width=3,
    plotly_plot_renderer="svg",
    plot_engine="matplotlib"
)
```

This implementation allows full control over the **plot appearance, color schemes, rendering options**, and the **choice of plotting library**.

---

## Example Visualization

Below is an example visualization of a QQ plot with a regression line:

<img src="/fit/plot_qq_regression.png" alt="QQ Plot Regression" width="600"/>

---

## Interpretation

The **alignment of points along the regression line** indicates that the empirical data closely follows the theoretical distribution, suggesting a good model fit. Deviations from the regression line, however, signal potential mismatches:

-   **Upward curvature**: The empirical data has heavier tails than the theoretical distribution.
-   **Downward curvature**: The empirical data has lighter tails than the theoretical distribution.
-   **A steeper slope $\beta_1 > 1$**: The empirical distribution has greater variability than the theoretical model.
-   **A flatter slope $\beta_1 < 1$**: The empirical distribution has lower variability than expected.

If the intercept \(\beta_0\) is significantly different from zero, it may indicate a shift between the empirical and theoretical distributions.
