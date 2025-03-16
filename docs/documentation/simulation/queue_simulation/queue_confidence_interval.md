# Confidence Intervals for Simulation Metrics and Probabilities

Confidence intervals for a simulation’s metrics and probabilities can be obtained using the `.confidence_interval_metrics` method. This method accepts the following parameters:

-   **`simulation_time (int, optional)`**: The duration of the simulation. The default is `float('inf')`.
-   **`confidence_level (float, optional)`**: The confidence level used for calculating the interval. The default is `0.95`.
-   **`replications (int, optional)`**: The number of simulation samples or replications. The default is `30`.

This method returns two objects:

1. `probabilities` with confidence intervals
2. `metrics` with confidence intervals

The same procedure applies regardless of which queue discipline is selected. Below is an example of how to invoke this method:

```python
# Calculate confidence intervals for metrics and probabilities
probabilities_with_optionals, metrics_with_optionals = simulation_with_optionals.confidence_interval_metrics(
    simulation_time=1000,
    confidence_level=0.99,
    replications=10,
)
```

In this example, the simulation runs for 1000 time units, uses a 99% confidence level, and performs 10 replications to calculate the resulting confidence intervals.
