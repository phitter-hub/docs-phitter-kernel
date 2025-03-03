---
outline: deep
---

# Queue Simulation Metrics

After you run your simulation, you can see the different metrics using the method `.metrics_summary` that does not have any parameters. The metrics that you will find are the following:

- Average Time in System
- Average Time in Queue
- Average Time in Service
- Standard Deviation Time in System
- Standard Deviation Time in Queue
- Standard Deviation Time in Service
- Average Elements in System
- Average Elements in Queue
- Probability to join the System
- Probability to Finish after Time
- Probability to Wait in Line
- Utilization of each Server

To calculate this use the following logic:

```python
simulation_basic.number_probability_summary()
```

No matter the **Queue Discipline** that you have selected you have to run the simulation in that way
