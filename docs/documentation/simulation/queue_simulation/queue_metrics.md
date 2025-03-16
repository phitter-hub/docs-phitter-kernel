---
outline: deep
---


# Queue Simulation Metrics

Upon completion of a simulation, various metrics can be retrieved using the `.metrics_summary` method. This method does not accept any parameters. The following metrics are provided:

- **Average Time in System**  
- **Average Time in Queue**  
- **Average Time in Service**  
- **Standard Deviation of Time in System**  
- **Standard Deviation of Time in Queue**  
- **Standard Deviation of Time in Service**  
- **Average Number of Elements in the System**  
- **Average Number of Elements in the Queue**  
- **Probability of Joining the System**  
- **Probability of Finishing After a Specified Time**  
- **Probability of Waiting in the Queue**  
- **Utilization of Each Server**

After the simulation is executed, the metrics can be viewed by calling:

```python
simulation_basic.metrics_summary()
```

The `.metrics_summary` method can be invoked regardless of the queue discipline (FIFO, LIFO, or PBS).
