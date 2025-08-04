# phitter.discrete.discrete_distributions package

## phitter.discrete.discrete_distributions.bernoulli module

_class_ phitter.discrete.discrete*distributions.bernoulli.Bernoulli(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Bernoulli distribution

- Parameters Bernoulli Distribution: {“p”: \*}

<https://phitter.io/distributions/discrete/bernoulli>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central_moments(\_k\*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“p”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.binomial module

_class_ phitter.discrete.discrete*distributions.binomial.Binomial(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Binomial distribution

- Parameters Binomial Distribution: {“n”: \*, “p”: \*}
  <https://phitter.io/distributions/discrete/binomial>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“n”: \*, “p”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.geometric module

_class_ phitter.discrete.discrete*distributions.geometric.Geometric(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Geometric distribution

- Parameters Geometric Distribution: {“p”: \*}
  <https://phitter.io/distributions/discrete/geometric>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“p”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.hypergeometric module

_class_ phitter.discrete.discrete*distributions.hypergeometric.Hypergeometric(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Hypergeometric_distribution

- Parameters Hypergeometric Distribution: {“N”: \*, “K”: \*, “n”: \*}
  <https://phitter.io/distributions/discrete/hypergeometric>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get_parameters(\_discrete_measures\*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

- **discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“N”: \*, “K”: \*, “n”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.logarithmic module

_class_ phitter.discrete.discrete*distributions.logarithmic.Logarithmic(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Logarithmic distribution

- Parameters Logarithmic Distribution: {“p”: \*}
  <https://phitter.io/distributions/discrete/logarithmic>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“p”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.negative_binomial module

_class_ phitter.discrete.discrete*distributions.negative_binomial.NegativeBinomial(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Negative binomial distribution

- Parameters NegativeBinomial Distribution: {“r”: \*, “p”: \*}
  <https://phitter.io/distributions/discrete/negative_binomial>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“r”: \*, “p”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.poisson module

_class_ phitter.discrete.discrete*distributions.poisson.Poisson(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Poisson distribution

- Parameters Poisson Distribution: {“lambda”: \*}
  <https://phitter.io/distributions/discrete/poisson>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“lambda”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance

## phitter.discrete.discrete_distributions.uniform module

_class_ phitter.discrete.discrete*distributions.uniform.Uniform(\_parameters=None*, _discrete_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Uniform distribution

- Parameters Uniform Distribution: {“a”: \*, “b”: \*}
  <https://phitter.io/distributions/discrete/uniform>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_discrete_measures*)

Calculate proper parameters of the distribution from sample discrete_measures.

- The parameters are calculated by formula.

#### Parameters

**discrete_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “b”: \*}

## _property_ kurtosis*: float*

Parametric kurtosis

## _property_ mean*: float*

Parametric mean

## _property_ median*: float*

Parametric median

## _property_ mode*: float*

Parametric mode

## _property_ name

## non*central_moments(\_k*)

Parametric no central moments. µ[k] = E[Xᵏ] = ∫xᵏ∙f(x) dx

#### Return type

`float` | `None`

## _property_ num_parameters*: int*

Number of parameters of the distribution

## parameter_restrictions()

Check parameters restrictions

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pmf(_x_)

Probability mass function

#### Return type

`float` | `ndarray`

## ppf(_u_)

Percent point function. Inverse of Cumulative distribution function. If CDF[x] = u => PPF[u] = x

#### Return type

`float` | `ndarray`

## sample(_n_, _seed=None_)

Sample of n elements of ditribution

#### Return type

`ndarray`

## _property_ skewness*: float*

Parametric skewness

## _property_ standard_deviation*: float*

Parametric standard deviation

## _property_ variance*: float*

Parametric variance
