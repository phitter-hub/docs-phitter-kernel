---
outline: deep
---

# Simulation Metrics

Metrics such as the average and standard deviation of simulation times, both per process and for the entire simulation, can be obtained by calling the `simulation_metrics()` method. This method does not require any arguments and outputs a summary of key statistical indicators:

```python
# Obtain and display simulation metrics
simulation.simulation_metrics()
```

The returned summary includes:

-   Average simulation time per process
-   Total average simulation time
-   Standard deviation of simulation times per process
-   Standard deviation of the total simulation time
