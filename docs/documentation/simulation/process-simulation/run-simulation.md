---
outline: deep
---

# Running a Process Simulation

The `run` method executes the simulation for a specified number of iterations. Its primary argument is:

-   **`number_of_simulations (int, optional)`**: Specifies how many times the simulation should be repeated. Defaults to `1`.

For instance, continuing the process configuration described in the [Complete Process Example](#complete-process-example), the simulation can be run as follows:

```python
simulation.run(number_of_simulations=100)
```

After calling `run`, the resulting data can be viewed by referencing the `simulation` object directly.
