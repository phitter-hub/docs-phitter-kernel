---
outline: deep
---

# Create a Queue Simulation

In order to create a `Queue Simulation` you will need to use the class `.QueueingSimulation` from simulation. The arguments of that class are shown below:

## _Mandatory Parameters to add_

- `A`: Arrivals distribution.
- `A Parameters (a_parameters)`: Parameters of the arrival distribution.
- `S`: Server distribution.
- `S Parameters (s_parameters)`: Parameters of the server distribution.
- `C`: Number of Servers.

## _Optional Parameters_

- `K`: Maximum system capacity. Defaults infinity.
- `N`: Total population of potential customers. Defaults infinity.
- `D`: **Queue Discipline**. Defaults `FIFO`. Common disciplines include `First-In-First-Out ("FIFO")`, `Last-In-First-Out ("LIFO")`, `priority-based service ("PBS")`.
- `PBS Distribution (pbs_distribution)`: Discrete Distribution that will prioritize the different elements. **Only available with `d="PBS"`**
- `PBS Parameters (pbs_parameters)`: Parameters of the PBS distribution. **Only available with `d="PBS"`**

## FIFO and LIFO Instances

If you want to create an object you should follow the following steps:

### Example _without_ Optional Parameters

First we will show an example without Optional Parameters.

```python
from phitter import simulation

# Create a simulation process instance
# As we are running FIFO we don't need to specify it in the "d"
simulation_basic = simulation.QueueingSimulation(
    a="exponential",
    a_parameters={"lambda": 5},
    s="exponential",
    s_parameters={"lambda": 20},
    c=3,
)
```

Although we are using `FIFO` here, remember that the exact same logic applies to `LIFO`.

### Example _with_ Optional Parameters

Now that you understand how to create a basic logic. Take a look of a logic with additional parameters.

```python
from phitter import simulation

# Create a simulation process instance
# Here we are using LIFO, that's why we specify the "d" value
simulation_with_optionals = simulation.QueueingSimulation(
    a="exponential",
    a_parameters={"lambda": 5},
    s="exponential",
    s_parameters={"lambda": 20},
    c=3,
    k=3,
    n=5000,
)
```

Although we are using `LIFO` here, remember that the exact same logic applies to `FIFO`.

## PBS Instance

In order to create an object `.QueueingSimulation` with `PBS`, it is needed to add two additional parameters as **mandatories**. Those parameters are: `PBS Distribution (pbs_distribution)` and `PBS Parameters (pbs_parameters)`

### Example _without_ Optional Parameters

```python
from phitter import simulation

# Parameters of the PBS for the "Own Distribution"
# The most important category in this case is the smallest number
parameters={0: 0.5, 1: 0.3, 2: 0.2}
# Create a simulation process instance
simulation_basic = simulation.QueueingSimulation(
    a="exponential",
    a_parameters={"lambda": 5},
    s="exponential",
    s_parameters={"lambda": 20},
    c=3,
    d="PBS",
    pbs_distribution="own_distribution",
    pbs_parameters=parameters
)
```

### Example _with_ Optional Parameters

```python
from phitter import simulation

# Parameters of the PBS for the "Own Distribution"
# The most important category in this case is the smallest number
parameters={0: 0.5, 1: 0.3, 2: 0.2}
# Create a simulation process instance

simulation_with_optionals = simulation.QueueingSimulation(
    a="exponential",
    a_parameters={"lambda": 5},
    s="exponential",
    s_parameters={"lambda": 20},
    c=3,
    d="PBS",
    pbs_distribution="own_distribution",
    pbs_parameters=parameters,
    k=3,
    n=5000,
)
```
