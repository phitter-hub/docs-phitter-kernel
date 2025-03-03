---
outline: deep
---

# Create your Own Distribution

If you want to simulate the generation of custom labels along with their probability of appearing, you can use the `OwnDistribution()` class. The parameters of that method are showed below

- `parameters (dict)`: Here you will need to add the different labels (keys) and its probability to happen (value)

::: info
All keys should be numbers greater or equal than zero
:::

You should run the following line of code if you need to use your own distribution

```python
from phitter import simulation

# Parameters
parameters = {0: 0.1, 1: 0.2, 3: 0.7}
# Create an instance "Own simulation"
simulation_own_distribution = simulation.OwnDistributions(parameters=parameters)
```

# Simulate Label

Afte you create the Own Distribution according to your dictionary. If you wanna simulate your label you should use the method `.ppf`

- `probability (float)`: Probability that you want to simulate

Below you can see an example

```python
import random

prob = random.random()
simulation_own_distribution.ppf(probability=prob)
```
