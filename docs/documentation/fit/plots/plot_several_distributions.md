# Plot Several Distributions

To plot a histogram with your data and with all the possible [distributions](/documentation/distributions/distributions.md), use the method `.plot_histogram_distributions()` that has the following parameters:

- `n_distributions` (_int_): Number of distributions to consider. Default is `10`.
- `n_distributions_visible` (_int_): Number of distributions visible in the plot. Default is `1`.
- `plot_title` (_str_): Title of the plot. Default is `"HISTOGRAM"`.
- `plot_xaxis_title` (_str_): Title of the X-axis. Default is `"Domain"`.
- `plot_yaxis_title` (_str_): Title of the Y-axis. Default is `"Probability Density/Mass Function"`.
- `plot_legend_title` (_str | None_): Title of the legend. Default is `"DISTRIBUTIONS"`. If `None`, no title is displayed.
- `plot_height` (_int_): Height of the plot in pixels. Default is `400`.
- `plot_width` (_int_): Width of the plot in pixels. Default is `600`.
- `plot_bar_color` (_str_): Color of the bars in RGBA format. Default is `"rgba(128,128,128,1)"` (gray).
- `plot_bargap` (_float_): Spacing between bars (value between `0` and `1`). Default is `0.15`.
- `plotly_plot_renderer` (_"png" | "jpeg" | "svg" | None_): Image format for exporting the plot when using Plotly. If `None`, the default setting is used.
- `plot_engine` (_"plotly" | "matplotlib"_): Plotting engine to use. Default is `"plotly"`.

If you only want to use the basic code, use it as follows:

```python
plot_histogram_distributions
```

![Plot Dist Histogram](/fit/plot_dist_histogram.png)
