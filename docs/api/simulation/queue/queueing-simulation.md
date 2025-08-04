# phitter.simulation.queueing_simulation package

## phitter.simulation.queueing_simulation.queueing_simulation module

_class_ phitter.simulation.queueing*simulation.queueing_simulation.QueueingSimulation(\_a*, _a_parameters_, _s_, _s_parameters_, _c_, _k=inf_, _n=inf_, _d='FIFO'_, _pbs_distribution=None_, _pbs_parameters=None_)
: Bases: `object`

## average_elements_queue()

Average elements in queue

#### Returns

Average elements in queue

#### Return type

`float`

## average_elements_system()

Average elements in system

#### Returns

Average elements in system

#### Return type

`float`

## average_time_queue()

Average time in queue

#### Returns

Average time in queue

#### Return type

`float`

## average_time_service()

Average time in service

#### Returns

Average time in service

#### Return type

`float`

## average_time_system()

Average time in system

#### Returns

Average time in system

#### Return type

`float`

## confidence*interval_metrics(\_simulation_time=inf*, _confidence_level=0.95_, _replications=30_)

Generate a confidence interval for probabilities and metrics.

#### Parameters

- **simulation_time** (_int\*\*,_ _optional_) – Simulation time. Defaults to float(“Inf)

- **confidence_level** (_int\*\*,_ _optional_) – Confidence level for the confidence interval for all the metrics and probabilities. Defaults to 0.95.
- **replications** (_int\*\*,_ _optional_) – Number of samples of simulations to create. Defaults to 30.

#### Returns

Returns probabilities and metrics dataframe with confidene interval for all metrics.

#### Return type

`tuple[pd.DataFrame, pd.DataFrame]`

## elements*prob(\_bins=50000*)

Creates the probability for each number of elements. Example: Probability to be 0, prob. to be 1, prob. to be 2… depending on simulation values

#### Parameters

- **bins** (_int\*\*,_ _optional_) – Number of intervals to determine the probability to be in each stage. Defaults to 50000.

#### Returns

Element and probability result

#### Return type

`dict`

## metrics_summary()

Returns the summary of the following metrics: Average Time in System, Average Time in Queue, Average Time in Service, Std. Dev. Time in System, Std. Dev. Time in Queue, Std. Dev. Time in Service, Average Elements in System, Average Elements in Queue, Probability to join the System, Probability to finish after Time, Probability to Wait in Line

#### Returns

Returns dataframe with all the information

#### Return type

`pd.DataFrame`

## no_clients_prob()

Probability of no having clients

#### Returns

No clients probability

#### Return type

`float`

## number_elements_prob(\_number\*, \_prob_type\*)

Calculates the probability Exact, less or equals or greater or equals.

#### Parameters

- **number** (_int_) – Number that we want to identify the different probabilities

- **prob_type** (_str_) – Could be one of the following options: ‘exact_value’, ‘greater_equals’, ‘less_equals’

#### Returns

Probability of the number of elements

#### Return type

`float`

## number_probability_summary()

Returns the probability for each element. The probability is Exact, less or equals or greater or equals; represented in each column.

#### Returns

Dataframe with all the needed probabilities for each element.

#### Return type

`pd.DataFrame`

## probability_to_finish_after_time()

Probability to finish after time

#### Returns

Probability to finish after time

#### Return type

`float`

## probability_to_join_system()

Probability to join the system

#### Returns

Probability to join the system

#### Return type

`float`

## probability_to_wait_in_line()

Probability to wait in the queue

#### Returns

Probability to wait in the queue

#### Return type

`float`

## run(_simulation_time=inf_)

Simulation of any queueing model.

#### Parameters

- **simulation_time** (_float\*\*,_ _optional_) – This variable defines the total duration of the simulation. It sets the length of time over which the simulation will model the system’s behavior. Defaults to float(“inf”)

- **number_of_simulations** (_int\*\*,_ _optional_) – Number of simulations of the process. Can also be considered as the number of days or number of times you want to simulate your scenario. Defaults to 1.

#### Returns

Returns the Simulation

#### Return type

`pd.DataFrame`

## servers_utilization()

Determine the server utilization according to the simulation result

#### Returns

Utilization of all servers, you can find the server number in the rows

#### Return type

`pd.DataFrame`

## standard_deviation_time_queue()

Standard Deviation time in queue

#### Returns

Standard Deviation time in queue

#### Return type

`float`

## standard_deviation_time_service()

Standard Deviation time in service

#### Returns

Standard Deviation time in service

#### Return type

`float`

## standard_deviation_time_system()

Standard Deviation time in system

#### Returns

Standard Deviation time in system

#### Return type

`float`

## system_utilization()

Returns system utilization according to simulation

#### Returns

System Utilization

#### Return type

`float`

## to_csv(\_file_name\*, \_index=True\*)

Simulation results to CVS

#### Parameters

- **file_name** (_str_) – File Name to add to the CSV file. You should include “.csv” at the end of your file

- **index** (_bool\*\*,_ _optional_) – Defaults to True. Add index in CSV file.

#### Return type

`None`

## to_excel(\_file_name\*, \_sheet_name='Sheet1'\*, \_index=True\*)

Simulation results to Excel File

#### Parameters

- **file_name** (_str_) – File Name to add to the Excel file. You should include “.xlsx” at the end of your file

- **index** (_bool\*\*,_ _optional_) – Defaults to True. Add index in Excel file.

#### Return type

`None`
