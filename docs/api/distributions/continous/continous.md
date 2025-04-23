# phitter.continuous.continuous_distributions package

## phitter.continuous.continuous_distributions.alpha module

_class_ phitter.continuous.continuous*distributions.alpha.Alpha(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Alpha distribution

- Parameters Alpha Distribution: {“alpha”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/alpha>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments (\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters (\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.arcsine module

_class_ phitter.continuous.continuous*distributions.arcsine.Arcsine(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Arcsine distribution

- Parameters Arcsine Distribution: {“a”: \*, “b”: \*}
  <https://phitter.io/distributions/continuous/arcsine>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.argus module

_class_ phitter.continuous.continuous*distributions.argus.Argus(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Argus distribution

- Parameters Argus Distribution: {“chi”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/argus>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“chi”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.beta module

_class_ phitter.continuous.continuous*distributions.beta.Beta(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Beta distribution

- Parameters Beta Distribution: {“alpha”: \*, “beta”: \*, “A”: \*, “B”: \*}
  <https://phitter.io/distributions/continuous/beta>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*, “A”: \*, “B”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.beta_prime module

_class_ phitter.continuous.continuous*distributions.beta_prime.BetaPrime(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Beta Prime Distribution

- Parameters BetaPrime Distribution: {“alpha”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/beta_prime>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.beta_prime_4p module

_class_ phitter.continuous.continuous*distributions.beta_prime_4p.BetaPrime4P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Beta Prime 4P Distribution

- Parameters BetaPrime4P Distribution: {“alpha”: \*, “beta”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/beta_prime_4p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.bradford module

_class_ phitter.continuous.continuous*distributions.bradford.Bradford(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Bradford distribution

- Parameters Bradford Distribution: {“c”: \*, “min”: \*, “max”: \*}
  <https://phitter.io/distributions/continuous/bradford>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“c”: \*, “min”: \*, “max”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.burr module

_class_ phitter.continuous.continuous*distributions.burr.Burr(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Burr distribution

- Parameters Burr Distribution: {“A”: \*, “B”: \*, “C”: \*}
  <https://phitter.io/distributions/continuous/burr>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“A”: \*, “B”: \*, “C”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.burr_4p module

_class_ phitter.continuous.continuous*distributions.burr_4p.Burr4P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Burr distribution

- Parameters Burr4P Distribution: {“A”: \*, “B”: \*, “C”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/burr_4p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“A”: \*, “B”: \*, “C”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.cauchy module

_class_ phitter.continuous.continuous*distributions.cauchy.Cauchy(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Cauchy distribution

- Parameters Cauchy Distribution: {“x0”: \*, “gamma”: \*}
  <https://phitter.io/distributions/continuous/cauchy>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“x0”: \*, “gamma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.chi_square module

_class_ phitter.continuous.continuous*distributions.chi_square.ChiSquare(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Chi Square distribution

- Parameters ChiSquare Distribution: {“df”: \*}
  <https://phitter.io/distributions/continuous/chi_square>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“df”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.chi_square_3p module

_class_ phitter.continuous.continuous*distributions.chi_square_3p.ChiSquare3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Chi Square distribution

- Parameters ChiSquare3P Distribution: {“df”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/chi_square_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“df”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.dagum module

_class_ phitter.continuous.continuous*distributions.dagum.Dagum(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Dagum distribution

- Parameters Dagum Distribution: {“a”: \*, “b”: \*, “p”: \*}
  <https://phitter.io/distributions/continuous/dagum>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “b”: \*, “p”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.dagum_4p module

_class_ phitter.continuous.continuous*distributions.dagum_4p.Dagum4P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Dagum distribution

- Parameters Dagum4P Distribution: {“a”: \*, “b”: \*, “p”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/dagum_4p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “b”: \*, “p”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.erlang module

_class_ phitter.continuous.continuous*distributions.erlang.Erlang(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Erlang distribution

- Parameters Erlang Distribution: {“k”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/erlang>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“k”: \*, “beta”: \*}

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

Check parameters restriction

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.erlang_3p module

_class_ phitter.continuous.continuous*distributions.erlang_3p.Erlang3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Erlang 3p distribution

- Parameters Erlang3P Distribution: {“k”: \*, “beta”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/erlang_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“k”: \*, “beta”: \*, “loc”: \*}

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

Check parameters restriction

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.error_function module

_class_ phitter.continuous.continuous*distributions.error_function.ErrorFunction(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Error Function distribution

- Parameters ErrorFunction Distribution: {“h”: \*}
  <https://phitter.io/distributions/continuous/error_function>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“h”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.exponential module

_class_ phitter.continuous.continuous*distributions.exponential.Exponential(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Exponential distribution

- Parameters Exponential Distribution: {“lambda”: \*}
  <https://phitter.io/distributions/continuous/exponential>

## cdf(_x_)

Cumulative distribution function.

- Calculated with known formula.

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.exponential_2p module

_class_ phitter.continuous.continuous*distributions.exponential_2p.Exponential2P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Exponential distribution

- Parameters Exponential2P Distribution: {“lambda”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/exponential_2p>

## cdf(_x_)

Cumulative distribution function.

- Calculated with known formula.

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“lambda”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.f module

_class_ phitter.continuous.continuous*distributions.f.F(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## F distribution

- Parameters F Distribution: {“df1”: \*, “df2”: \*}
  <https://phitter.io/distributions/continuous/f>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“df1”: \*, “df2”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.f_4p module

_class_ phitter.continuous.continuous*distributions.f_4p.F4P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## F distribution

- Parameters F4P Distribution: {“df1”: \*, “df2”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/f_4p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“df1”: \*, “df2”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.fatigue_life module

_class_ phitter.continuous.continuous*distributions.fatigue_life.FatigueLife(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Fatigue life Distribution

## Also known as Birnbaum-Saunders distribution

- Parameters FatigueLife Distribution: {“gamma”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/fatigue_life>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“gamma”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.folded_normal module

_class_ phitter.continuous.continuous*distributions.folded_normal.FoldedNormal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Folded Normal Distribution

## - <https://phitter.io/distributions/continuous/folded_normal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.frechet module

_class_ phitter.continuous.continuous*distributions.frechet.Frechet(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Fréchet Distribution

## Also known as inverse Weibull distribution (Scipy name)

## - <https://phitter.io/distributions/continuous/frechet>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.gamma module

_class_ phitter.continuous.continuous*distributions.gamma.Gamma(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Gamma distribution

- Parameters Gamma Distribution: {“alpha”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/gamma>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.gamma_3p module

_class_ phitter.continuous.continuous*distributions.gamma_3p.Gamma3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Gamma distribution

- Parameters Gamma3P Distribution: {“alpha”: \*, “loc”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/gamma_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “loc”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.generalized_extreme_value module

_class_ phitter.continuous.continuous*distributions.generalized_extreme_value.GeneralizedExtremeValue(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Generalized Extreme Value Distribution

## - <https://phitter.io/distributions/continuous/generalized_extreme_value>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“xi”: \*, “mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.generalized_gamma module

_class_ phitter.continuous.continuous*distributions.generalized_gamma.GeneralizedGamma(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Generalized Gamma Distribution

## - <https://phitter.io/distributions/continuous/generalized_gamma>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “d”: \*, “p”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.generalized_gamma_4p module

_class_ phitter.continuous.continuous*distributions.generalized_gamma_4p.GeneralizedGamma4P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Generalized Gamma Distribution

## - <https://phitter.io/distributions/continuous/generalized_gamma_4p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “d”: \*, “p”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.generalized_logistic module

_class_ phitter.continuous.continuous*distributions.generalized_logistic.GeneralizedLogistic(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Generalized Logistic Distribution

## \* <https://phitter.io/distributions/continuous/generalized_logistic>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“loc”: \*, “scale”: \*, “c”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.generalized_normal module

_class_ phitter.continuous.continuous*distributions.generalized_normal.GeneralizedNormal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Generalized normal distribution

- Parameters GeneralizedNormal Distribution: {“beta”: \*, “mu”: \*, “alpha”: \*}
  <https://phitter.io/distributions/continuous/generalized_normal>

This distribution is known whit the following names:

- Error Distribution
- Exponential Power Distribution
- Generalized Error Distribution (GED)
- Generalized Gaussian distribution (GGD)
- Subbotin distribution

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“beta”: \*, “mu”: \*, “alpha”: \*}

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

Check parameters restriction

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.generalized_pareto module

_class_ phitter.continuous.continuous*distributions.generalized_pareto.GeneralizedPareto(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Generalized Pareto distribution

- Parameters GeneralizedPareto Distribution: {“c”: \*, “mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/generalized_pareto>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“c”: \*, “mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.gibrat module

_class_ phitter.continuous.continuous*distributions.gibrat.Gibrat(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Gibrat distribution

- Parameters Gibrat Distribution: {“loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/gibrat>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.gumbel_left module

_class_ phitter.continuous.continuous*distributions.gumbel_left.GumbelLeft(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Gumbel Left Distribution

## Gumbel Min Distribution

## Extreme Value Minimum Distribution

## - <https://phitter.io/distributions/continuous/gumbel_left>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.gumbel_right module

_class_ phitter.continuous.continuous*distributions.gumbel_right.GumbelRight(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Gumbel Right Distribution

## Gumbel Max Distribution

## Extreme Value Maximum Distribution

## \* <https://phitter.io/distributions/continuous/gumbel_right>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.half_normal module

_class_ phitter.continuous.continuous*distributions.half_normal.HalfNormal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Half Normal Distribution

## - <https://phitter.io/distributions/continuous/half_normal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.hyperbolic_secant module

_class_ phitter.continuous.continuous*distributions.hyperbolic_secant.HyperbolicSecant(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Hyperbolic Secant distribution

- Parameters HyperbolicSecant Distribution: {“mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/hyperbolic_secant>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.inverse_gamma module

_class_ phitter.continuous.continuous*distributions.inverse_gamma.InverseGamma(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Inverse Gamma Distribution

## Also known Pearson Type 5 distribution

- Parameters InverseGamma Distribution: {“alpha”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/inverse_gamma>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.inverse_gamma_3p module

_class_ phitter.continuous.continuous*distributions.inverse_gamma_3p.InverseGamma3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Inverse Gamma Distribution

## Also known Pearson Type 5 distribution

- Parameters InverseGamma3P Distribution: {“alpha”: \*, “beta”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/inverse_gamma_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.inverse_gaussian module

_class_ phitter.continuous.continuous*distributions.inverse_gaussian.InverseGaussian(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Inverse Gaussian Distribution

## Also known like Wald distribution

- Parameters InverseGaussian Distribution: {“mu”: \*, “lambda”: \*}
  <https://phitter.io/distributions/continuous/inverse_gaussian>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “lambda”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.inverse_gaussian_3p module

_class_ phitter.continuous.continuous*distributions.inverse_gaussian_3p.InverseGaussian3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Inverse Gaussian Distribution

## Also known like Wald distribution

- Parameters InverseGaussian3P Distribution: {“mu”: \*, “lambda”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/inverse_gaussian_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “lambda”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.johnson_sb module

_class_ phitter.continuous.continuous*distributions.johnson_sb.JohnsonSB(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Johnson SB distribution

- Parameters JohnsonSB Distribution: {“xi”: \*, “lambda”: \*, “gamma”: \*, “delta”: \*}
  <https://phitter.io/distributions/continuous/johnson_sb>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated with the method proposed in [1].

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters** – {“xi”: \* , “lambda”: \* , “gamma”: \* , “delta”: \* }

#### Return type

{“xi”: \*, “lambda”: \*, “gamma”: \*, “delta”: \*}

- References

- [1]

- George, F., & Ramachandran, K. M. (2011).
- Estimation of parameters of Johnson’s system of distributions.
- Journal of Modern Applied Statistical Methods, 10(2), 9.

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.johnson_su module

_class_ phitter.continuous.continuous*distributions.johnson_su.JohnsonSU(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Johnson SU distribution

- Parameters JohnsonSU Distribution: {“xi”: \*, “lambda”: \*, “gamma”: \*, “delta”: \*}
  <https://phitter.io/distributions/continuous/johnson_su>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Return type
`dict`[`str`, `float` | `int`]

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.kumaraswamy module

_class_ phitter.continuous.continuous*distributions.kumaraswamy.Kumaraswamy(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Kumaraswami distribution

- Parameters Kumaraswamy Distribution: {“alpha”: \*, “beta”: \*, “min”: \*, “max”: \*}
  <https://phitter.io/distributions/continuous/kumaraswamy>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*, “min”: \*, “max”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.laplace module

_class_ phitter.continuous.continuous*distributions.laplace.Laplace(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Laplace distribution

- Parameters Laplace Distribution: {“mu”: \*, “b”: \*}
  <https://phitter.io/distributions/continuous/laplace>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“mu”: \*, “b”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.levy module

_class_ phitter.continuous.continuous*distributions.levy.Levy(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Levy distribution

- Parameters Levy Distribution: {“mu”: \*, “c”: \*}
  <https://phitter.io/distributions/continuous/levy>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“mu”: \*, “c”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.loggamma module

_class_ phitter.continuous.continuous*distributions.loggamma.LogGamma(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## LogGamma distribution

- Parameters LogGamma Distribution: {“c”: \*, “mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/loggamma>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“c”: \*, “mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.logistic module

_class_ phitter.continuous.continuous*distributions.logistic.Logistic(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Logistic distribution

- Parameters Logistic Distribution: {“mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/logistic>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.loglogistic module

_class_ phitter.continuous.continuous*distributions.loglogistic.LogLogistic(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Loglogistic distribution

- Parameters LogLogistic Distribution: {“alpha”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/loglogistic>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.loglogistic_3p module

_class_ phitter.continuous.continuous*distributions.loglogistic_3p.LogLogistic3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Loglogistic distribution

- Parameters LogLogistic3P Distribution: {“loc”: \*, “alpha”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/loglogistic_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“loc”: \*, “alpha”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.lognormal module

_class_ phitter.continuous.continuous*distributions.lognormal.LogNormal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Lognormal distribution

- Parameters LogNormal Distribution: {“mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/lognormal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.maxwell module

_class_ phitter.continuous.continuous*distributions.maxwell.Maxwell(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Maxwell distribution

- Parameters Maxwell Distribution: {“alpha”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/maxwell>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “loc”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.moyal module

_class_ phitter.continuous.continuous*distributions.moyal.Moyal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Moyal distribution

- Parameters Moyal Distribution: {“mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/moyal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.nakagami module

_class_ phitter.continuous.continuous*distributions.nakagami.Nakagami(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Nakagami distribution

- Parameters Nakagami Distribution: {“m”: \*, “omega”: \*}
  <https://phitter.io/distributions/continuous/nakagami>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“m”: \*, “omega”: \*}

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

Check parameters restriction

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.non_central_chi_square module

_class_ phitter.continuous.continuous*distributions.non_central_chi_square.NonCentralChiSquare(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Non-Central Chi Square distribution

- Parameters NonCentralChiSquare Distribution: {“lambda”: \*, “n”: \*}
  <https://phitter.io/distributions/continuous/non_central_chi_square>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“lambda”: \*, “n”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.non_central_f module

_class_ phitter.continuous.continuous*distributions.non_central_f.NonCentralF(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Non-Central F distribution

- Parameters NonCentralF Distribution: {“lambda”: \*, “n1”: \*, “n2”: \*}
  <https://phitter.io/distributions/continuous/non_central_f>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“lambda”: \*, “n1”: \*, “n2”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.non_central_t_student module

_class_ phitter.continuous.continuous*distributions.non_central_t_student.NonCentralTStudent(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Non-Central T Student distribution

- Parameters NonCentralTStudent Distribution: {“lambda”: \*, “n”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/non_central_t_student> Hand-book on Statistical Distributions (pag.116) … Christian Walck

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“lambda”: \*, “n”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.normal module

_class_ phitter.continuous.continuous*distributions.normal.Normal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Normal distribution

- Parameters Normal Distribution: {“mu”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/normal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“mu”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.pareto_first_kind module

_class_ phitter.continuous.continuous*distributions.pareto_first_kind.ParetoFirstKind(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Pareto first kind distribution distribution

- Parameters ParetoFirstKind Distribution: {“alpha”: \*, “xm”: \*, “loc”: \*}
  <https://phitter.io/distributions/continuous/pareto_first_kind>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “xm”: \*, “loc”: \*}

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

Check parameters restriction

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.pareto_second_kind module

_class_ phitter.continuous.continuous*distributions.pareto_second_kind.ParetoSecondKind(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Pareto second kind distribution Distribution

## Also known as Lomax Distribution or Pareto Type II distributions

## - <https://phitter.io/distributions/continuous/pareto_second_kind>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “xm”: \*, “loc”: \*}

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

Check parameters restriction

#### Return type

`bool`

## _property_ parameters_example*: dict[str, int | float]*

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.pert module

_class_ phitter.continuous.continuous*distributions.pert.Pert(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Pert distribution

- Parameters Pert Distribution: {“a”: \*, “b”: \*, “c”: \*}
  <https://phitter.io/distributions/continuous/pert>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_dict_) – {“mean”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “median”: \* , “b”: \* }

#### Returns

**parameters**

#### Return type

{“a”: \*, “b”: \*, “c”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.power_function module

_class_ phitter.continuous.continuous*distributions.power_function.PowerFunction(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Power function distribution

- Parameters PowerFunction Distribution: {“alpha”: \*, “a”: \*, “b”: \*}
  <https://phitter.io/distributions/continuous/power_function>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “a”: \*, “b”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.rayleigh module

_class_ phitter.continuous.continuous*distributions.rayleigh.Rayleigh(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Rayleigh distribution

- Parameters Rayleigh Distribution: {“gamma”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/rayleigh>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“gamma”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.reciprocal module

_class_ phitter.continuous.continuous*distributions.reciprocal.Reciprocal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Reciprocal distribution

- Parameters Reciprocal Distribution: {“a”: \*, “b”: \*}
  <https://phitter.io/distributions/continuous/reciprocal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.rice module

_class_ phitter.continuous.continuous*distributions.rice.Rice(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Rice distribution

- Parameters Rice Distribution: {“v”: \*, “sigma”: \*}
  <https://phitter.io/distributions/continuous/rice>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“v”: \*, “sigma”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.semicircular module

_class_ phitter.continuous.continuous*distributions.semicircular.Semicircular(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Semicicrcular Distribution

## - <https://phitter.io/distributions/continuous/semicircular>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_dict_) – {“mu”: \* , “variance”: \* , “skewness”: \* , “kurtosis”: \* , “data”: \* }

#### Returns

**parameters**

#### Return type

{“loc”: \*, “R”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.t_student module

_class_ phitter.continuous.continuous*distributions.t_student.TStudent(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## T distribution

- Parameters TStudent Distribution: {“df”: \*}
  <https://phitter.io/distributions/continuous/t_student>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“df”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.t_student_3p module

_class_ phitter.continuous.continuous*distributions.t_student_3p.TStudent3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## T distribution

- Parameters TStudent3P Distribution: {“df”: \*, “loc”: \*, “scale”: \*}
  <https://phitter.io/distributions/continuous/t_student_3p>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by solving the equations of the measures expected
- for this distribution.The number of equations to consider is equal to the number
- of parameters.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“df”: \*, “loc”: \*, “scale”: \*}

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

## pdf(_x_)

Probability density function

#### Return type

`float` | `ndarray`

## ppf(_u_)

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

## phitter.continuous.continuous_distributions.trapezoidal module

_class_ phitter.continuous.continuous*distributions.trapezoidal.Trapezoidal(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Trapezoidal distribution

- Parameters Trapezoidal Distribution: {“a”: \*, “b”: \*, “c”: \*, “d”: \*}
  <https://phitter.io/distributions/continuous/trapezoidal>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “b”: \*, “c”: \*, “d”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.triangular module

_class_ phitter.continuous.continuous*distributions.triangular.Triangular(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Triangular distribution

- Parameters Triangular Distribution: {“a”: \*, “b”: \*, “c”: \*}
  <https://phitter.io/distributions/continuous/triangular>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“a”: \*, “b”: \*, “c”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.uniform module

_class_ phitter.continuous.continuous*distributions.uniform.Uniform(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Uniform distribution

- Parameters Uniform Distribution: {“a”: \*, “b”: \*}
  <https://phitter.io/distributions/continuous/uniform>

## cdf(_x_)

Cumulative distribution function

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.weibull module

_class_ phitter.continuous.continuous*distributions.weibull.Weibull(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Weibull distribution

- Parameters Weibull Distribution: {“alpha”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/weibull>

## cdf(_x_)

Cumulative distribution function.

- Calculated with known formula.

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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

## phitter.continuous.continuous_distributions.weibull_3p module

_class_ phitter.continuous.continuous*distributions.weibull_3p.Weibull3P(\_parameters=None*, _continuous_measures=None_, _init_parameters_examples=False_)
: Bases: `object`

## Weibull distribution

- Parameters Weibull3P Distribution: {“alpha”: \*, “loc”: \*, “beta”: \*}
  <https://phitter.io/distributions/continuous/weibull_3p>

## cdf(_x_)

Cumulative distribution function.

- Calculated with known formula.

#### Return type

`float` | `ndarray`

## central*moments(\_k*)

Parametric central moments. µ’[k] = E[(X - E[X])ᵏ] = ∫(x-µ[k])ᵏ∙f(x) dx

#### Return type

`float` | `None`

## get*parameters(\_continuous_measures*)

Calculate proper parameters of the distribution from sample continuous_measures.

- The parameters are calculated by formula.

#### Parameters

**continuous_measures** (_MEASUREMESTS_) – attributes: mean, std, variance, skewness, kurtosis, median, mode, min, max, size, num_bins, data

#### Returns

**parameters**

#### Return type

{“alpha”: \*, “loc”: \*, “beta”: \*}

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

## pdf(_x_)

Probability density function

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
