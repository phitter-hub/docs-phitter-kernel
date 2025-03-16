# Workers

The fitting procedure for continuous distributions is performed by invoking the `.fit()` method. This method provides a parameter `n_workers` (int, optional), which designates the number of parallel processes employed during the fitting procedure. By default, this parameter is set to 1. An example usage is illustrated below:

```python
phi.fit(n_workers=4)
```

Although parallelization can reduce overall processing time, the relationship between sample size, number of workers, and execution speed is non-trivial. Excessive parallelization may introduce significant overhead and resource contention, causing longer run times in certain scenarios.

## Benchmarks: Standard Google Colab Instance

### Continuous Fit Time: Sample Size vs. Workers

| Sample Size / Workers |     1     |    2     |    6     |    10    |    20    |
| :-------------------: | :-------: | :------: | :------: | :------: | :------: |
|        **1K**         |  8.2981   |  7.1242  |  8.9667  |  9.9287  | 16.2246  |
|        **10K**        |  20.8711  | 14.2647  | 10.5612  | 11.6004  | 17.8562  |
|       **100K**        | 152.6296  | 97.2359  | 57.7310  | 51.6182  | 53.2313  |
|       **500K**        | 914.9291  | 640.8153 | 370.0323 | 267.4597 | 257.7534 |
|        **1M**         | 1580.8501 | 972.3985 | 573.5429 | 496.5569 | 425.7809 |

**Analysis (Continuous):**  
- For smaller sample sizes (e.g., 1K), the use of two workers yields a moderate improvement over a single worker, whereas a higher number of workers (6, 10, and 20) actually results in increased computation time. This behavior arises from synchronization overhead and resource competition.  
- With larger sample sizes (e.g., 500K and 1M), adding more workers generally decreases computation time, yet the benefit can plateau or even revert if the overhead becomes too large.

### Discrete Fit Time: Sample Size vs. Workers

| Sample Size / Workers |    1    |    2    |    4    |
| :-------------------: | :-----: | :-----: | :-----: |
|        **1K**         | 0.1688  | 2.6402  | 2.8719  |
|        **10K**        | 0.4462  | 2.4452  | 3.0471  |
|       **100K**        | 4.5598  | 6.3246  | 7.5869  |
|       **500K**        | 19.0172 | 21.8047 | 19.8420 |
|        **1M**         | 39.8065 | 29.8360 | 30.2334 |

**Analysis (Discrete):**  
- In the discrete case, employing multiple workers for smaller samples frequently leads to significantly longer times, indicating that overhead can outweigh the benefits of parallelization.  
- When the sample size is large (e.g., 1M), increased parallelization may reduce time; however, certain configurations still display regressions in performance, likely due to factors such as inter-process communication overhead.

**Conclusion:**  
The optimal choice of `n_workers` depends on the interplay among sample size, distribution type, and computational resources. Although using more workers can be advantageous in many situations—particularly for extensive datasets—there are clear instances where excessive parallelization diminishes performance. It is therefore advisable to test multiple worker configurations to identify the most efficient setting for a given context.