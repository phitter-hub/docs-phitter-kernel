# phitter.simulation.process_simulation package

## phitter.simulation.process_simulation.process_simulation module

_class_ phitter.simulation.process_simulation.process_simulation.ProcessSimulation
: Bases: `object`

## add*process(\_prob_distribution*, _parameters_, _process_id_, _number_of_products=1_, _number_of_servers=1_, _new_branch=False_, _previous_ids=None_)

Add element to the simulation

#### Parameters

- **prob_distribution** (_str_) – Probability distribution to be used. You can use one of the following: ‘alpha’, ‘arcsine’, ‘argus’, ‘beta’, ‘beta_prime’, ‘beta_prime_4p’, ‘bradford’, ‘burr’, ‘burr_4p’, ‘cauchy’, ‘chi_square’, ‘chi_square_3p’, ‘dagum’, ‘dagum_4p’, ‘erlang’, ‘erlang_3p’, ‘error_function’, ‘exponential’, ‘exponential_2p’, ‘f’, ‘fatigue_life’, ‘folded_normal’, ‘frechet’, ‘f_4p’, ‘gamma’, ‘gamma_3p’, ‘generalized_extreme_value’, ‘generalized_gamma’, ‘generalized_gamma_4p’, ‘generalized_logistic’, ‘generalized_normal’, ‘generalized_pareto’, ‘gibrat’, ‘gumbel_left’, ‘gumbel_right’, ‘half_normal’, ‘hyperbolic_secant’, ‘inverse_gamma’, ‘inverse_gamma_3p’, ‘inverse_gaussian’, ‘inverse_gaussian_3p’, ‘johnson_sb’, ‘johnson_su’, ‘kumaraswamy’, ‘laplace’, ‘levy’, ‘loggamma’, ‘logistic’, ‘loglogistic’, ‘loglogistic_3p’, ‘lognormal’, ‘maxwell’, ‘moyal’, ‘nakagami’, ‘non_central_chi_square’, ‘non_central_f’, ‘non_central_t_student’, ‘normal’, ‘pareto_first_kind’, ‘pareto_second_kind’, ‘pert’, ‘power_function’, ‘rayleigh’, ‘reciprocal’, ‘rice’, ‘semicircular’, ‘trapezoidal’, ‘triangular’, ‘t_student’, ‘t_student_3p’, ‘uniform’, ‘weibull’, ‘weibull_3p’, ‘bernoulli’, ‘binomial’, ‘geometric’, ‘hypergeometric’, ‘logarithmic’, ‘negative_binomial’, ‘poisson’.

- **parameters** (_dict_) – Parameters of the probability distribution.
- **process_id** (_str_) – Unique name of the process to be simulated
- **number_of_products** (_int_ _,\*\*optional_) – Number of elements that are needed to simulate in that stage. Value has to be greater than 0. Defaults equals to 1.
- **number_of_servers** (_int\*\*,_ _optional_) – Number of servers that process has and are needed to simulate in that stage. Value has to be greater than 0. Defaults equals to 1.
- **new_branch** (_bool_ _,\*\*optional_) – Required if you want to start a new process that does not have previous processes. You cannot use this parameter at the same time with “previous_id”. Defaults to False.
- **previous_id** (_list**[**str**]**,_ _optional_) – Required if you have previous processes that are before this process. You cannot use this parameter at the same time with “new_branch”. Defaults to None.

#### Return type

`None`

## process*graph(\_graph_direction='LR'*, _save_graph_pdf=False_)

Generates the graph of the process

#### Parameters

- **graph_direction** (_str\*\*,_ _optional_) – You can show the graph in two ways: ‘LR’ left to right OR ‘TB’ top to bottom. Defaults to ‘LR’.

- **save_graph_pdf** (_bool\*\*,_ _optional_) – You can save the process graph in a PDF file. Defaults to False.

#### Return type

`None`

## run(_number_of_simulations=1_)

Simulation of the described process

#### Parameters

- **number_of_simulations** (_int\*\*,_ _optional_) – Number of simulations of the process that you want to do. Defaults to 1.

#### Returns

Results of every simulation requested

#### Return type

`list[float]`

## run*confidence_interval(\_confidence_level=0.95*, _number_of_simulations=1_, _replications=30_)

Generates a confidence interval for the replications of the requested number of simulations.

#### Parameters

- **confidence_level** (_float\*\*,_ _optional_) – Confidence required of the interval. Defaults to 0.95.

- **number_of_simulations** (_int\*\*,_ _optional_) – Number of simulations that are going to be run in each replication. Defaults to 1.
- **replications** (_int\*\*,_ _optional_) – Number of samples needed. Defaults to 30.

#### Returns

Returns the lower bound, average, upper bound and standard deviation of the confidence interval

#### Return type

`tuple[float]`

## simulation_metrics()

Here you can find the average time per process and standard deviation

#### Returns

Average and Standard deviation

#### Return type

`pd.DataFrame`
