---
outline: deep
---

# Confidence Interval for Metrics and Simulation

This section describes how to generate a confidence interval for simulation metrics using the `run_confidence_interval` method. This method performs multiple replications of a simulation, computes relevant metrics for each replication, and then derives the corresponding confidence interval.

-   **`confidence_level (float, optional)`**: Specifies the desired confidence level (for instance, 0.95 for 95%). The default value is 0.95.
-   **`number_of_simulations (int, optional)`**: Indicates how many simulations are executed in each replication. The default value is 1.
-   **`replications (int, optional)`**: Determines how many times the entire simulation process is replicated. The default value is 30.

Below is an example of how to call the method:

```python
# Generating a confidence interval for simulation metrics
simulation.run_confidence_interval(
    confidence_level=0.99,
    number_of_simulations=100,
    replications=40,
)
```

The resulting table provides several columns for each metric, including a lower boundary (LB), an average (AVG), and an upper boundary (UB). For example:

|          Metrics           | LB - Value | AVG - Value | UB - Value |
| :------------------------: | :--------: | :---------: | :--------: |
| Avg. Total Simulation Time |   78.08    |    78.52    |   79.04    |
|            ...             |    ...     |     ...     |    ...     |

In this context:

-   **LB** refers to the lower boundary of the confidence interval.
-   **AVG** refers to the mean value calculated across all replications.
-   **UB** refers to the upper boundary of the confidence interval.
