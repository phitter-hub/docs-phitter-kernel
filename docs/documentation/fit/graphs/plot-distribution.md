# Plot a certain Distribution

If you want to plot a histogram with your data and with _a certain_ [distributions](/documentation/distributions/distributions.md), use the method `.plot_distribution()` that has the following parameters:

- `id_distribution` (_str_): Identifier of the distribution being plotted. Refer to [Distributions](/documentation/distributions/distributions.md) to see all the possible distribution that Phitter has.
- `plot_title` (_str_): Title of the plot. Default is `"HISTOGRAM"`.
- `plot_xaxis_title` (_str_): Title of the X-axis. Default is `"Domain"`.
- `plot_yaxis_title` (_str_): Title of the Y-axis. Default is `"Probability Density/Mass Function"`.
- `plot_legend_title` (_str | None_): Title of the legend. If `None`, no title is displayed.
- `plot_height` (_int_): Height of the plot in pixels. Default is `400`.
- `plot_width` (_int_): Width of the plot in pixels. Default is `600`.
- `plot_bar_color` (_str_): Color of the bars in RGBA format. Default is `"rgba(128,128,128,1)"` (gray).
- `plot_bargap` (_float_): Spacing between bars (value between `0` and `1`). Default is `0.15`.
- `plot_line_color` (_str_): Color of the distribution line in RGBA format. Default is `"rgba(255,0,0,1)"` (red).
- `plot_line_width` (_int_): Thickness of the distribution line. Default is `3`.
- `plotly_plot_renderer` (_"png" | "jpeg" | "svg" | None_): Image format for exporting the plot when using Plotly. If `None`, the default setting is used.
- `plot_engine` (_"plotly" | "matplotlib"_): Plotting engine to use. Default is `"plotly"`.

If you only want to use the basic code, use it as follows:

```python
phi.plot_distribution(id_distribution="weibull")
```

> 💡 Remember to change `weibull` with the distribution that you need

![PLot a Distribution](/static/fit/plot-one-distribution.png)
