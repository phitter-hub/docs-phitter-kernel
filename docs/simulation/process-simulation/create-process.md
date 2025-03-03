---
outline: deep
---

# Create a Process Simulation

## Fields Explanation

### _Mandatory Information to add_

- `Probability Distribution (prob_distribution)`: According to the phitter distribution list.
- `Distribution Parameters (parameters)`: Needed Parameters.
- `Process Id (process_id)`: Unique name to that process

::: info
You can name your process (`Process Id`) as you want
:::

#### Mandatory but depending on what you need

You can select **_new_brach_** or **_previous_ids_** depending on the context.

- `New Branch (new_branch)`: If that process does not have any preceding process
- `Previus ids (previous_id)`: At least one process preceed that process

### _Optional Fields_

- `Number of Products (number_of_products)`: Defaults 1. You can add as many as you need
- `Number of Servers (number_of_servers)`: Defaults 1. You can add as many as you need

## Create diferent process

### _Process without preceding process_

If you want to create a process that **does not** have preceding process you have to do the following:

```python
simulation_example.add_process(
    prob_distribution="normal",
    parameters={"mu": 5, "sigma": 2},
    process_id="first_process",
    new_branch=True,
)
```

As you can see we are using `new_branch` as it is `the first process of that branch`.

Here is another example but modifying the number of products and servers.

```python
simulation_example.add_process(
    prob_distribution="normal",
    parameters={"mu": 5, "sigma": 2},
    process_id="first_process_with_optional",
    number_of_products=10,
    number_of_servers=3,
    new_branch=True,
)
```

### _Process with preceding process_

If you want to create a process that **does** have **preceding** process, you have to do the following:

```python
simulation_example.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4},
    process_id="second_process",
    previous_ids=["first_process"],
)
```

As you can see we are using `previous_ids` as it is `preceed` by one process.

::: tip
Remember that you can add as many `previous_ids` (previous processes) as you need
:::

Here is another example but modifying the number of products and servers and adding more than one process.

```python
simulation_example.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4},
    process_id="second_process_with_optional",
    number_of_products=10,
    number_of_servers=3,
    previous_ids=["first_process", "first_process_with_optional"],
)
```

## Complete Process Example

Let's add all the processes

::: warning
The order in which you add each process matters
:::

```python
# Create a simulation process instance
simulation = simulation.ProcessSimulation()

# Add a new process without preceding process
simulation.add_process(
    prob_distribution="normal",
    parameters={"mu": 5, "sigma": 2},
    process_id="first_process",
    number_of_products=10,
    number_of_servers=3,
    new_branch=True,
)

# Add a new process with preceding process
simulation.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4},
    process_id="second_process",
    previous_ids=["first_process"],
)

# Add a new process with preceding process
simulation.add_process(
    prob_distribution="gamma",
    parameters={"alpha": 15, "beta": 3},
    process_id="third_process",
    previous_ids=["first_process"],
)

# Add a new process without preceding process
simulation.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4.3},
    process_id="fourth_process",
    new_branch=True,
)


# Add a new process with preceding process
simulation.add_process(
    prob_distribution="beta",
    parameters={"alpha": 1, "beta": 1, "A": 2, "B": 3},
    process_id="fifth_process",
    previous_ids=["second_process", "fourth_process"],
)

# Add a new process with preceding process
simulation.add_process(
    prob_distribution="normal",
    parameters={"mu": 15, "sigma": 2},
    process_id="sixth_process",
    previous_ids=["third_process", "fifth_process"],
)
```
