---
outline: deep
---

# Create a Process Simulation

This section explains how to create processes within a simulation context, including details regarding mandatory fields, optional fields, and examples demonstrating different process configurations.

## Fields Explanation

### Mandatory Fields

-   **`prob_distribution` (Probability Distribution):** Corresponds to a probability distribution from the Phitter distribution list.
-   **`parameters` (Distribution Parameters):** Provides the numerical parameters that define the selected probability distribution.
-   **`process_id` (Process Identifier):** Establishes a unique name or label for the process.

::: info
Any suitable name can be assigned to `process_id`.
:::

#### Conditional Fields

Depending on the simulation structure, either `new_branch` or `previous_ids` is used:

-   **`new_branch`:** Indicates that this process starts a new branch in the simulation, implying no preceding processes.
-   **`previous_ids`:** Lists one or more processes that precede the current process in the simulation. If at least one process exists before the current one, specify it (or them) here.

### Optional Fields

-   **`number_of_products`:** Defaults to 1. Specifies how many products or items are handled in this process.
-   **`number_of_servers`:** Defaults to 1. Defines how many servers or parallel channels are available to process items.

## Creating Different Processes

Processes can be added either as new branches (with no preceding process) or as continuations of one or more existing processes.

### Process Without a Preceding Process

A process that initiates a new branch and does not depend on any prior processes can be added by setting `new_branch=True`. For example:

```python
simulation_example.add_process(
    prob_distribution="normal",
    parameters={"mu": 5, "sigma": 2},
    process_id="first_process",
    new_branch=True,
)
```

In this example, `new_branch` is enabled to indicate that no preceding process is referenced. Additional options, such as adjusting the number of products and servers, may also be included:

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

### Process With a Preceding Process

A process that follows one or more existing processes is added by listing those previous process identifiers in `previous_ids`. For instance:

```python
simulation_example.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4},
    process_id="second_process",
    previous_ids=["first_process"],
)
```

Here, `previous_ids` is employed to specify that this new process follows `first_process`. Any number of preceding processes may be referenced if needed:

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

::: tip
Any number of `previous_ids` can be included to link processes that must finish before this one begins.
:::

## Complete Process Example

The sequence of calls to `add_process` determines how processes connect. In the following example, a complete simulation is constructed by adding several processes, each either starting a new branch or referencing one or more preceding processes:

::: warning
The order in which processes are added is significant; each new process must reference identifiers already defined if it depends on them.
:::

```python
# Create a simulation process instance
simulation = simulation.ProcessSimulation()

# Add a new process without a preceding process
simulation.add_process(
    prob_distribution="normal",
    parameters={"mu": 5, "sigma": 2},
    process_id="first_process",
    number_of_products=10,
    number_of_servers=3,
    new_branch=True,
)

# Add a new process with a preceding process
simulation.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4},
    process_id="second_process",
    previous_ids=["first_process"],
)

# Add another process with a preceding process
simulation.add_process(
    prob_distribution="gamma",
    parameters={"alpha": 15, "beta": 3},
    process_id="third_process",
    previous_ids=["first_process"],
)

# Add a new process that starts another branch
simulation.add_process(
    prob_distribution="exponential",
    parameters={"lambda": 4.3},
    process_id="fourth_process",
    new_branch=True,
)

# Add a process with multiple preceding processes
simulation.add_process(
    prob_distribution="beta",
    parameters={"alpha": 1, "beta": 1, "A": 2, "B": 3},
    process_id="fifth_process",
    previous_ids=["second_process", "fourth_process"],
)

# Add a final process with multiple preceding processes
simulation.add_process(
    prob_distribution="normal",
    parameters={"mu": 15, "sigma": 2},
    process_id="sixth_process",
    previous_ids=["third_process", "fifth_process"],
)
```

Once all processes have been defined, the simulation is ready to run and evaluate the overall process flow.
