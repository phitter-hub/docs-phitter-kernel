# Quantile-Quantile (QQ) Plot with Regression Line

A similar explanation is provided in [Quantile-Quantile (QQ) Plot](/documentation/fit/plots/plot_qq.md), with the addition of a **regression line** to further assess normality through quantile comparisons.

To plot QQ with your data and with a regression line, use the method `.qq_plot_regression()` that has the following parameters:

- **`id_distribution`** (_str_): Identifier of the [distributions](/documentation/distributions/distributions.md) being analyzed.
- **`plot_title`** (_str_): Title of the plot. Default is `"QQ PLOT"`.
- **`plot_xaxis_title`** (_str_): Title of the X-axis. Default is `"Theoretical Quantiles"`. _(Note: "Theorical" should be corrected to "Theoretical")_.
- **`plot_yaxis_title`** (_str_): Title of the Y-axis. Default is `"Sample Quantiles"`.
- **`plot_legend_title`** (_str | None_): Title of the legend. If `None`, no title is displayed.
- **`plot_height`** (_int_): Height of the plot in pixels. Default is `400`.
- **`plot_width`** (_int_): Width of the plot in pixels. Default is `600`.

### **QQ Plot Marker Settings**

- **`qq_marker_name`** (_str_): Label for the QQ plot markers in the legend. Default is `"Markers QQ"`.
- **`qq_marker_color`** (_str_): Color of the QQ plot markers in RGBA format. Default is `"rgba(128,128,128,1)"` (gray).
- **`qq_marker_size`** (_int_): Size of the QQ plot markers. Default is `6`.

### **Regression Line Settings**

- **`regression_line_name`** (_str_): Label for the regression line in the legend. Default is `"Regression"`.
- **`regression_line_color`** (_str_): Color of the regression line in RGBA format. Default is `"rgba(255,0,0,1)"` (red).
- **`regression_line_width`** (_int_): Thickness of the regression line. Default is `2`.

### **Rendering Options**

- **`plotly_plot_renderer`** (_"png" | "jpeg" | "svg" | None_): Image format for exporting the plot when using Plotly. If `None`, the default setting is used.
- **`plot_engine`** (_"plotly" | "matplotlib"_): Plotting engine to use. Default is `"plotly"`.

If you only want to use the basic code, use it as follows:

```python
phi.qq_plot_regression(id_distribution="weibull")
```

> 💡 Remember to change `weibull` with the distribution that you need

![PLot a Distribution](/fit/plot_qq_regression.png)
