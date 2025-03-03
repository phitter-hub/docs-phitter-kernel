# Confidence Interval for Simulation Metrics and Probabilities

If you want to have a Confidence Interval for your **Metrics and Probabilities**, you should use the method `.confidence_interval_metrics` that has the following parameters:

- `simulation_time (int, optional)`: Simulation time. Defaults to float("Inf)
- `confidence_level (int, optional)`: Confidence level for the confidence interval for all the metrics and probabilities. Defaults to 0.95.
- `replications (int, optional)`: Number of samples of simulations to create. Defaults to 30.

This method will return two things: `probabilities` and `metrics` with confidence interval.

If you want to use this method you should do the following:

```python
# Calculate confidence interval for metrics and probabilities
probabilities_with_optionals, metrics_with_optionals = simulation_with_optionals.confidence_interval_metrics(
    simulation_time=1000,
    confidence_level=0.99,
    replications=10,
)
```

No matter the **Queue Discipline** that you have selected you have to run the simulation in that way
