---
outline: deep
---

# Running a Queue Simulation

To execute a queue simulation, use the `.run` method on the `QueueingSimulation` instance. The method accepts the following parameter:

-   **`simulation_time`**: The total duration over which the simulation will run.

The procedure for running the simulation is consistent across all queue disciplines (FIFO, LIFO, or PBS). Below is an example of how to run a basic simulation:

```python
# Execute the simulation
simulation_basic.run(simulation_time=2000)
```

In this example, the simulation is performed for 2,000 time units. If no value is provided, the default duration is `float("inf")`.
