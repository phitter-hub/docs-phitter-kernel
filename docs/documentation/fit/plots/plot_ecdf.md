# Empirical Cumulative Distribution Function

The Empirical Cumulative Distribution Function (ECDF) provides a non-parametric estimation of the cumulative distribution of a given dataset. Unlike parametric approaches, the ECDF does not impose assumptions regarding the underlying distribution, allowing for an unbiased representation of the observed data.

## Properties

-   The ECDF is a non-decreasing function that is bounded within the interval $[0, 1]$.
-   It represents the cumulative probability of observations up to a specified value.
-   It is particularly useful for visualizing data distributions, especially in smaller datasets where individual observations significantly influence the overall distribution.

## Calculation

For a dataset consisting of $n$ observations, the ECDF at a given point $x$ is defined as:

$$
\text{ECDF}(x) = \frac{\text{Number of observations } \leq x}{n}
$$

## ECDF Plotting

The ECDF can be visualized using the `.plot_ecdf()` method. This function offers several customizable parameters.

### Parameters

-   **`plot_title`** (_str, optional_): The title of the plot. Default: _"ECDF"_.
-   **`plot_xaxis_title`** (_str, optional_): The label for the horizontal axis. Default: _"Domain"_.
-   **`plot_yaxis_title`** (_str, optional_): The label for the vertical axis. Default: _"Cumulative Distribution Function"_.
-   **`plot_xaxis_range`** (_tuple[float, float], optional_): The range of values for the horizontal axis. If not specified, the range adjusts automatically to the data.
-   **`plot_xaxis_margin`** (_float, optional_): The margin applied around the data domain. Default: `0.3`.
-   **`plot_legend_title`** (_str or None, optional_): The title of the legend. If `None`, no legend title is displayed.
-   **`plot_height`** (_int, optional_): The height of the plot in pixels. Default: `400`.
-   **`plot_width`** (_int, optional_): The width of the plot in pixels. Default: `400`.
-   **`plot_line_color`** (_str, optional_): The color of the ECDF line, specified in RGBA format.
-   **`plot_line_width`** (_int, optional_): The thickness of the ECDF line. Default: `2`.
-   **`plot_line_name`** (_str, optional_): The label for the ECDF in the plot legend. Default: _"Empirical Distribution"_.
-   **`plotly_plot_renderer`** (_"png" | "jpeg" | "svg" | None, optional_): The output format when using Plotly as the rendering engine. Default: `None`, which uses the default renderer.
-   **`plot_engine`** (_"plotly" | "matplotlib", optional_): Specifies the plotting library to be used. Default: _"plotly"_.

## Default Usage

For a basic implementation without additional customization, the ECDF plot can be generated as follows:

```python
phi.plot_ecdf()
```

## Complete Usage

For a more detailed customization of the ECDF plot, the following implementation demonstrates the use of multiple parameters:

```python
phi.plot_ecdf(
    plot_title="Empirical CDF of Sample Data",
    plot_xaxis_title="Observed Values",
    plot_yaxis_title="Cumulative Probability",
    plot_xaxis_range=(0, 100),
    plot_xaxis_margin=0.2,
    plot_legend_title="ECDF Curve",
    plot_height=600,
    plot_width=800,
    plot_line_color="rgba(255,0,0,0.8)",
    plot_line_width=3,
    plot_line_name="Empirical CDF",
    plotly_plot_renderer="png",
    plot_engine="plotly"
)
```

## Example Visualization

The following figure provides an example of an ECDF plot generated using the `.plot_ecdf()` method.

<img src="/fit/plot_ecdf.png" alt="ECDF Example Plot" width="600"/>

For further details on additional functionalities and extended capabilities, refer to the subsequent sections of this documentation.
