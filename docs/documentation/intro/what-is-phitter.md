# What is Phitter?

Phitter is a Python library and [web application](https://phitter.io/) designed for accurately fitting statistical distributions to datasets. It provides intuitive usage, comprehensive visualization capabilities, and support for multiple distributions, facilitating enhanced data analysis projects.

## Motivation

When I began studying probability distribution fitting for event simulation, I realized that although data distributions were extensively studied, inferring the best fit for a given dataset was a non-trivial task. A common exercise is fitting a distribution with parameters that can be estimated from the sample, such as the normal distribution, whose parameters are the mean and standard deviation. I wondered: what if I want to automatically fit all known distributions? What if parameter inference for a particular distribution is challenging? These difficulties were further exacerbated when working within spreadsheet environments like Excel.

Attempting to solve this problem, I discovered that software existed in the market capable of performing such tasks; however, they were typically commercial desktop applications. Motivated by this, I decided to create a free web-based application offering similar functionality. During this development, I encountered Python, which effectively addressed most data analysis challenges in a clear and standardized manner, though not specifically for distribution fitting.

The powerful Scipy library, particularly its `stats` module, implements many distributions and solves the critical issue of parameter estimation from samples. Existing Python packages for distribution fitting generally iterate over Scipy’s distributions. However, a notable limitation of Scipy is that, for certain distributions, the implementation differs from widely recognized definitions. For example, the Beta distribution, as commonly referenced in literature cited in the following section, typically involves two shape parameters along with minimum and maximum values. In Scipy, however, the Beta distribution uses two shape parameters plus location and scale parameters.

Considering these aspects, I developed individual implementations for each distribution to accelerate parameter estimation using the method of moments, supported by spreadsheet validation for consistency and immediate practical applicability. This development was largely based on Scipy's implementation, leveraging numpy behind the scenes. All these considerations form the motivation behind the creation of Phitter.

## Features

1. Phitter implements probability distributions as standardized as possible according to the following sources: [Wikipedia](https://wikipedia.org), [Compendium of Common Probability Distributions](https://www.causascientia.org/math_stat/Dists/Compendium.pdf), and [Handbook on Statistical Distributions for Experimentalists](https://www.stat.rice.edu/~dobelman/textfiles/DistributionsHandbook.pdf).

2. Phitter aims to implement accelerated methods for calculating distribution parameters wherever feasible. To achieve this, it solves the distribution’s parametric equation system, significantly faster than Scipy’s `.fit` method. Nonetheless, this method is not applicable to every distribution. The estimation times for each distribution based on sample sizes are detailed in this table: [Estimation Time Parameters for Continuous Distributions](/documentation/benchmarks/continuous/continuous-parameters-estimation.md). For distributions where estimation time is recorded as zero for a given sample size, the parametric equation system has been solved. If estimation times increase, Phitter resorts to Scipy's maximum likelihood estimation method, significantly enhancing performance.

3. To verify the distribution implementations or facilitate spreadsheet usage, refer to the documentation provided in [Continuous Distributions](/documentation/distributions/continuous-distributions.html) and [Discrete Distributions](/documentation/distributions/discrete-distributions.html).

4. Phitter implements goodness-of-fit testing following the proposal outlined in the article: [Evaluating the Anderson-Darling Distribution](https://www.jstatsoft.org/article/view/v009i02).
