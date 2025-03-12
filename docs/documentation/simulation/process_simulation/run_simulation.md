---
outline: deep
---

# Run a Process Simulation

To run the process simulation that you have created, you need to use the method `.run` which has the following arguments:

- `number_of_simulations (int, optional)`: Number of simulations of the process that you want to do. Defaults to 1.

Let's continue the process created on [Create Process Simulation](/documentation/simulation/process_simulation/create_process.md#complete-process-example)

```python
# Graph your process
simulation.run(number_of_simulations=100)
```

You will be able to see the results calling the object simulation that you have created
