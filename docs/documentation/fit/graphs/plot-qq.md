# Quantile-Quantile (QQ) Plot

A **QQ plot (Quantile-Quantile plot)** is a graphical tool used to compare the distribution of a dataset against a theoretical distribution (e.g., normal distribution) or between two datasets. It helps assess whether a dataset follows a specified distribution.

### **How it Works:**

1. The quantiles (percentiles) of the observed data are plotted against the corresponding quantiles of the theoretical distribution.
2. If the data follows the theoretical distribution, the points in the QQ plot will roughly align along a **45-degree diagonal line**.
3. **Deviations from the line** indicate departures from the expected distribution:
   - **S-shaped curve**: Data has heavier or lighter tails than the theoretical distribution.
   - **Upward or downward bending**: Skewness in the data.

### **Common Uses:**

- Checking **normality** of a dataset before applying statistical tests.
- Comparing the empirical distribution of a dataset with a theoretical one.
- Detecting **outliers** or deviations from assumptions in modeling.

If you want to plot QQ with your data, use the method `.qq_plot()` that has the following parameters:

- `id_distribution` (_str_): Identifier of the [distributions](/documentation/distributions/distributions.md) being analyzed.
- `plot_title` (_str_): Title of the plot. Default is `"QQ PLOT"`.
- `plot_xaxis_title` (_str_): Title of the X-axis. Default is `"Theoretical Quantiles"`.
- `plot_yaxis_title` (_str_): Title of the Y-axis. Default is `"Sample Quantiles"`.
- `plot_legend_title` (_str | None_): Title of the legend. If `None`, no title is displayed.
- `plot_height` (_int_): Height of the plot in pixels. Default is `400`.
- `plot_width` (_int_): Width of the plot in pixels. Default is `600`.

### **QQ Plot Marker Settings**

- `qq_marker_name` (_str_): Label for the QQ plot markers in the legend. Default is `"Markers QQ"`.
- `qq_marker_color` (_str_): Color of the QQ plot markers in RGBA format. Default is `"rgba(128,128,128,1)"` (gray).
- `qq_marker_size` (_int_): Size of the QQ plot markers. Default is `6`.

### **Rendering Options**

- `plotly_plot_renderer` (_"png" | "jpeg" | "svg" | None_): Image format for exporting the plot when using Plotly. If `None`, the default setting is used.
- `plot_engine` (_"plotly" | "matplotlib"_): Plotting engine to use. Default is `"plotly"`.

If you only want to use the basic code, use it as follows:

```python
phi.qq_plot(id_distribution="weibull")
```

> 💡 Remember to change `weibull` with the distribution that you need

![QQ](/static/fit/qq.png)
