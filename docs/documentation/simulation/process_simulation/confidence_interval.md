---
outline: deep
---

# Confidence Interval for your Metrics and Simulation

To have a confidence interval for the Metrics that you need to calculate, you should use the `.run_confidence_interval` method.

- `confidence_level (float, optional)`: Confidence required of the interval. Defaults to 0.95 (95%).
- `number_of_simulations (int, optional)`: Number of simulations that are going to be run in each replication. Defaults to 1.
- `replications (int, optional)`: Number of samples needed. Defaults to 30.

You can run that method as follows:

```python
# Confidence interval for Simulation metrics
simulation.run_confidence_interval(
    confidence_level=0.99,
    number_of_simulations=100,
    replications=40,
)
```

When you review the result you will see the following columns

|          Metrics           | LB - Value | AVG - Value | UB - Value |
| :------------------------: | :--------: | :---------: | :--------: |
| Avg. Total Simulation Time |   78.08    |    78.52    |   79.04    |
|            ...             |    ...     |     ...     |    ...     |

Acronyms means:

- **LB**: Lower Boundary
- **Average**: Average Value
- **UB**: Upper Boundary
