---
outline: deep
---

# Graph your Process Simulation

In order to review if you have added your process in the correct path, you would like to graph your process.

To create graph your process before simulate, you only need to use the `.process_graph` method:

```python
# Graph your process
simulation.process_graph()
```

After you run that line of code you will see the following graph (according to the example mentioned in [Create Process Simulation](/documentation/simulation/process-simulation/create-process.md#complete-process-example))

![Graph Image](/static/simulation/process-simulation.png)

## simulate.process_graph()

If you want to use additional features that `.process_graph` has you should see its arguments

- `graph_direction (str, optional)`: You can show the graph in two ways: 'LR' left to right OR 'TB' top to bottom. Defaults to 'LR'.
- `save_graph_pdf (bool, optional)`: You can save the process graph in a PDF file. Defaults to False.
