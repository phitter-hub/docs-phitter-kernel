# Plot ECDF vs Specific Distribution

**ECDF (Empirical Cumulative Distribution Function)** is a statistical function that estimates the cumulative distribution of a dataset. It shows the proportion of data points that are less than or equal to a given value.

### Key characteristics:

- Unlike a **histogram**, which groups data into bins, the **ECDF** represents each individual data point.
- The function is **non-decreasing** and ranges from **0 to 1**.
- It provides a more detailed view of the distribution, especially for small datasets.

### How it works:

For a dataset with `n` values, the ECDF at a given point `x` is calculated as:

$$
\text{ECDF(x)} = \frac{\text{Number of values} \leq x}{n}
$$

Each step in the ECDF plot corresponds to an observed data point.

To plot the ECDF of your data against a specific ECDF of other [distributions](/documentation/distributions/distributions.md), use the method `phi.plot_ecdf_distribution()` that has the following parameters:

#### **Descriptive Settings**

- `id_distribution` (_str_): Identifier of the [distributions](/documentation/distributions/distributions.md) being plotted.
- `plot_title` (_str_): Title of the plot. Default is `"ECDF"`.
- `plot_xaxis_title` (_str_): Title of the X-axis. Default is `"Domain"`.
- `plot_yaxis_title` (_str_): Title of the Y-axis. Default is `"Cumulative Distribution Function"`.
- `plot_xaxis_min_offset` (_float_): Offset applied to the minimum value of the X-axis for better visualization. Default is `0.3`.
- `plot_xaxis_max_offset` (_float_): Offset applied to the maximum value of the X-axis for better visualization. Default is `0.3`.
- `plot_legend_title` (_str | None_): Title of the legend. If `None`, no title is displayed.
- `plot_height` (_int_): Height of the plot in pixels. Default is `400`.
- `plot_width` (_int_): Width of the plot in pixels. Default is `600`.

#### **Empirical Distribution Settings**

- `plot_empirical_line_color` (_str_): Color of the empirical distribution line in RGBA format. Default is `"rgba(128,128,128,1)"` (gray).
- `plot_empirical_line_width` (_int_): Thickness of the empirical distribution line. Default is `4`.
- `plot_empirical_line_name` (_str_): Label for the empirical distribution line in the legend. Default is `"Empirical Distribution"`.
- `plot_empirical_bar_color` (_str_): Color of the empirical bars in RGBA format. Default is `"rgba(128,128,128,1)"` (gray).
- `plot_empirical_bargap` (_float_): Spacing between empirical bars (value between `0` and `1`). Default is `0.15`.

#### **Fitted Distribution Settings**

- `plot_distribution_line_color` (_str_): Color of the fitted distribution line in RGBA format. Default is `"rgba(255,0,0,1)"` (red).
- `plot_distribution_line_width` (_int_): Thickness of the fitted distribution line. Default is `2`.

### **Rendering Options**

- `plotly_plot_renderer` (_"png" | "jpeg" | "svg" | None_): Image format for exporting the plot when using Plotly. If `None`, the default setting is used.
- `plot_engine` (_"plotly" | "matplotlib"_): Plotting engine to use. Default is `"plotly"`.

If you only want to use the basic code, use it as follows:

```python
phi.plot_ecdf_distribution(id_distribution="weibull")
```

![ECDF Distribution](/fit/plot_ecdf_distribution.png)
