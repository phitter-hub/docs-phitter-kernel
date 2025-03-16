---
outline: deep
---

# Creating a Queue Simulation

A queue simulation can be created with the `.QueueingSimulation` class from the `simulation` module. This class supports several parameters that define how arrivals and services are handled, the number of servers, and various optional features. The mandatory and optional parameters are outlined below.

## Mandatory Parameters

-   **`A`**: Distribution used to model arrivals.
-   **`A Parameters (a_parameters)`**: Parameters of the arrival distribution.
-   **`S`**: Distribution used to model service times.
-   **`S Parameters (s_parameters)`**: Parameters of the service distribution.
-   **`C`**: Number of servers (i.e., service channels).

## Optional Parameters

-   **`K`**: Maximum system capacity. Defaults to infinity.
-   **`N`**: Total population of potential customers. Defaults to infinity.
-   **`D`**: Queue discipline. The default is `FIFO` (First-In-First-Out). Additional disciplines include `Last-In-First-Out (LIFO)` and priority-based service (`PBS`).
-   **`PBS Distribution (pbs_distribution)`**: Discrete distribution used to prioritize customers. This parameter is only available when `d="PBS"`.
-   **`PBS Parameters (pbs_parameters)`**: Parameters for the discrete distribution applied to priority-based service. This parameter is only available when `d="PBS"`.

## FIFO and LIFO Instances

### Example Without Optional Parameters

The following example illustrates how to create a queue simulation with only the mandatory parameters:

```python
from phitter import simulation

# Create a FIFO simulation instance.
# Since FIFO is the default discipline, it is not necessary to specify "d".
simulation_basic = simulation.QueueingSimulation(
    a="exponential",
    a_parameters={"lambda": 5},
    s="exponential",
    s_parameters={"lambda": 20},
    c=3,
)
```

The same configuration can be used for an LIFO system by specifying `d="LIFO"` if needed.

### Example With Optional Parameters

Below is an example that includes certain optional parameters:

```python
from phitter import simulation

# Create a queue simulation instance using the LIFO discipline.
simulation_with_optionals = simulation.QueueingSimulation(
    a="exponential",
    a_parameters={"lambda": 5},
    s="exponential",
    s_parameters={"lambda": 20},
    c=3,
    k=3,
    n=5000,
    d="LIFO",
)
```

While this example demonstrates the LIFO discipline, the same logic applies to FIFO by changing or omitting the `d` parameter.

## Priority-Based Service (PBS) Instance

When creating a queue simulation with `PBS`, two additional parameters become mandatory:

-   **`pbs_distribution`**: A discrete distribution that assigns priority labels.
-   **`pbs_parameters`**: Parameters for this priority distribution.

### Example Without Optional Parameters

```python
from phitter import simulation

# Parameters for the "Own Distribution"
# Lower numeric labels receive higher priority in this distribution.
parameters = {0: 0.5, 1: 0.3, 2: 0.2}

# Create a queue simulation instance using PBS.
simulation_basic_pbs = simulation.QueueingSimulation(
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

### Example With Optional Parameters

```python
from phitter import simulation

# Parameters for the "Own Distribution"
# Lower numeric labels receive higher priority.
parameters = {0: 0.5, 1: 0.3, 2: 0.2}

# Create a queue simulation instance with additional optional parameters using PBS.
simulation_with_optionals_pbs = simulation.QueueingSimulation(
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

This example demonstrates how the `PBS` discipline requires specifying both `pbs_distribution` and `pbs_parameters`. Additional capacity (`k`) and population limits (`n`) are included for illustrative purposes.
