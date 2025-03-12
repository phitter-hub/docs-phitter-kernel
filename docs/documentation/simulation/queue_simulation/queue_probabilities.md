---
outline: deep
---

# Queue Simulation Metrics

After you run your simulation, you can see the different probabilities for the number of elements using the method `.number_probability_summary` that does not have any parameters. The probabilities that you will see are the likelihood that one of the following things happen:

- Less or equals to the number of elements
- Exact number of elements
- Greater or equals to the number of elements

To calculate this use the following logic:

```python
simulation_basic.number_probability_summary()
```

No matter the **Queue Discipline** that you have selected you have to run the simulation in that way
