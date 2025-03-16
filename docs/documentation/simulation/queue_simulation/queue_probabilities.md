---
outline: deep
---

# Number of Elements Probability Summary

After the simulation has been executed, the likelihood of observing a specific number of elements in the system, as well as those less than or equal to or greater than or equal to that number, can be accessed with the `.number_probability_summary` method. This method does not require any parameters and provides three types of probabilities:

-   **Less than or equal to a given number of elements**
-   **Exactly equal to that number of elements**
-   **Greater than or equal to that number of elements**

Below is an example of how to invoke this method:

```python
simulation_basic.number_probability_summary()
```

This procedure is applicable for any queue discipline (FIFO, LIFO, or PBS).
