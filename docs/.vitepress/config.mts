import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Phitter Docs",
    description: "Phitter documentation",
    head: [
        ["link", { rel: "icon", href: "/static/logo.svg" }],
        // ["link", { rel: "stylesheet", href: "/static/custom.css" }],
    ],
    themeConfig: {
        logo: "/static/logo.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "Documentation", link: "/documentation/installation" },
            { text: "Release notes", link: "/release/release-main" },
            { text: "Phitter web", link: "https://phitter.io/" },
        ],
        sidebar: {
        
        "/documentation/": [
            {
                text: "Installation",
                link: "/documentation/installation",
            },
            {
                text: "Fit",
                collapsed: true,
                items: [
                    { text: "Quick Fit", link: "/documentation/fit/quick-fit" },
                    { text: "Continuous", collapsed: true, items: [
                        { text: "Create Continuous Fit Object", link: "documentation/fit/continuous/create-continuous" },
                        { text: "Run Continuous Fit", link: "documentation/fit/continuous/run-fit" },
                        { text: "Continuous Fit Results", link: "documentation/fit/continuous/continuous-results" },
                        
                    ]},
                    { text: "Discrete", collapsed: true, items: [
                        { text: "Create Discrete Fit Object", link: "documentation/fit/discrete/create-discrete" },
                        { text: "Run Discrete Fit", link: "documentation/fit/discrete/run-discrete-fit" },
                        { text: "Discrete Fit Results", link: "documentation/fit/discrete/discrete-results" },
                        
                    ]},
                    { text: "Accelerate Fit", collapsed: true, items: [
                        { text: "Speed up for large datasets", link: "documentation/fit/accelerate/speed-up-large-datasets" }, 
                    ]},
                    { text: "Graphs", collapsed: true, items: [
                        { text: "Plot Data Histogram", link: "documentation/fit/graphs/data-histogram" },
                        { text: "Plot a Certain Distribution", link: "documentation/fit/graphs/plot-distribution" },
                        { text: "Plot Several Distributions", link: "documentation/fit/graphs/several-distribution-histogram" },
                        { text: "Plot ECDF of your Data", link: "documentation/fit/graphs/plot-ecdf" },
                        { text: "Plot ECDF of your Data vs. Distribution", link: "documentation/fit/graphs/plot-ecdf-distribution" },
                        { text: "Plot Quantile-Quantile (QQ)", link: "documentation/fit/graphs/plot-qq" },
                        { text: "Plot Quantile-Quantile (QQ) with a Regression Line", link: "documentation/fit/graphs/plot-qq-regression" },
                    ]},
                ],
            },
            {
                text: "Simulation",
                collapsed: true,
                items: [
                    {
                        text: "Queue Simulation",
                        collapsed: true,
                        items: [
                            { text: "Own Distribution", link: "/documentation/simulation/queue-simulation/own-distribution" },
                            { text: "Create Queue Simulation Instance", link: "/documentation/simulation/queue-simulation/create-queue-instance" },
                            { text: "Run Queue Instance", link: "/documentation/simulation/queue-simulation/run-queue-simulation" },
                            { text: "Queue Simulation Metrics", link: "/documentation/simulation/queue-simulation/queue-metrics" },
                            { text: "Queue Simulation Probabilities", link: "/documentation/simulation/queue-simulation/queue-probabilities" },
                            { text: "Confidence Interval for Simulation Metrics", link: "/documentation/simulation/queue-simulation/queue-confidence-interval" },
                        ],
                    },
                    {
                        text: "Process Simulation",
                        collapsed: true,
                        items: [
                            { text: "Create Instance Simulation", link: "/documentation/simulation/process-simulation/create-instance-simulation" },
                            { text: "Create a Process Simulation", link: "/documentation/simulation/process-simulation/create-process" },
                            { text: "Graph Process Simulation", link: "/documentation/simulation/process-simulation/graph-process" },
                            { text: "Run a Process Simulation", link: "/documentation/simulation/process-simulation/run-simulation" },
                            { text: "Simulation Metrics", link: "/documentation/simulation/process-simulation/simulation-metrics" },
                            { text: "Confidence Interval of Metrics", link: "/documentation/simulation/process-simulation/confidence-interval" },
                        ],
                    },
                ],
            },
            {
                text: "Distributions",
                link: "/documentation/distributions/distributions",
                collapsed: true,
                items: [
                    { text: "Quick Example", collapsed: true, link: "/documentation/distributions/quick-example" },
                    {
                        text: "Continuous",
                        collapsed: true,
                        items: [
                            { text: "Alpha", collapsed: true, link: "/documentation/distributions/continuous/alpha" },
                            { text: "Arcsine", collapsed: true, link: "/documentation/distributions/continuous/arcsine" },
                            { text: "Argus", collapsed: true, link: "/documentation/distributions/continuous/argus" },
                            { text: "Beta", collapsed: true, link: "/documentation/distributions/continuous/beta" },
                            { text: "Beta Prime", collapsed: true, link: "/documentation/distributions/continuous/beta_prime" },
                            { text: "Beta Prime 4P", collapsed: true, link: "/documentation/distributions/continuous/beta_prime_4p" },
                            { text: "Bradford", collapsed: true, link: "/documentation/distributions/continuous/bradford" },
                            { text: "Burr", collapsed: true, link: "/documentation/distributions/continuous/burr" },
                            { text: "Burr 4P", collapsed: true, link: "/documentation/distributions/continuous/burr_4p" },
                            { text: "Cauchy", collapsed: true, link: "/documentation/distributions/continuous/cauchy" },
                            { text: "Chi Square", collapsed: true, link: "/documentation/distributions/continuous/chi_square" },
                            { text: "Chi Square 3P", collapsed: true, link: "/documentation/distributions/continuous/chi_square_3p" },
                            { text: "Dagum", collapsed: true, link: "/documentation/distributions/continuous/dagum" },
                            { text: "Dagum 4P", collapsed: true, link: "/documentation/distributions/continuous/dagum_4p" },
                            { text: "Erlang", collapsed: true, link: "/documentation/distributions/continuous/erlang" },
                            { text: "Erlang 3P", collapsed: true, link: "/documentation/distributions/continuous/erlang_3p" },
                            { text: "Error Function", collapsed: true, link: "/documentation/distributions/continuous/error_function" },
                            { text: "Exponential", collapsed: true, link: "/documentation/distributions/continuous/exponential" },
                            { text: "Exponential 2P", collapsed: true, link: "/documentation/distributions/continuous/exponential_2p" },
                            { text: "F", collapsed: true, link: "/documentation/distributions/continuous/f" },
                            { text: "F 4P", collapsed: true, link: "/documentation/distributions/continuous/f_4p" },
                            { text: "Fatigue Life", collapsed: true, link: "/documentation/distributions/continuous/fatigue_life" },
                            { text: "Folded Normal", collapsed: true, link: "/documentation/distributions/continuous/folded_normal" },
                            { text: "Frechet", collapsed: true, link: "/documentation/distributions/continuous/frechet" },
                            { text: "Gamma", collapsed: true, link: "/documentation/distributions/continuous/gamma" },
                            { text: "Gamma 3P", collapsed: true, link: "/documentation/distributions/continuous/gamma_3p" },
                            { text: "Generalized Extreme Value", collapsed: true, link: "/documentation/distributions/continuous/generalized_extreme_value" },
                            { text: "Generalized Gamma", collapsed: true, link: "/documentation/distributions/continuous/generalized_gamma" },
                            { text: "Generalized Gamma 4P", collapsed: true, link: "/documentation/distributions/continuous/generalized_gamma_4p" },
                            { text: "Generalized Logistic", collapsed: true, link: "/documentation/distributions/continuous/generalized_logistic" },
                            { text: "Generalized Normal", collapsed: true, link: "/documentation/distributions/continuous/generalized_normal" },
                            { text: "Generalized Pareto", collapsed: true, link: "/documentation/distributions/continuous/generalized_pareto" },
                            { text: "Gibrat", collapsed: true, link: "/documentation/distributions/continuous/gibrat" },
                            { text: "Gumbel Left", collapsed: true, link: "/documentation/distributions/continuous/gumbel_left" },
                            { text: "Gumbel Right", collapsed: true, link: "/documentation/distributions/continuous/gumbel_right" },
                            { text: "Half Normal", collapsed: true, link: "/documentation/distributions/continuous/half_normal" },
                            { text: "Hyperbolic Secant", collapsed: true, link: "/documentation/distributions/continuous/hyperbolic_secant" },
                            { text: "Inverse Gamma", collapsed: true, link: "/documentation/distributions/continuous/inverse_gamma" },
                            { text: "Inverse Gamma 3P", collapsed: true, link: "/documentation/distributions/continuous/inverse_gamma_3p" },
                            { text: "Inverse Gaussian", collapsed: true, link: "/documentation/distributions/continuous/inverse_gaussian" },
                            { text: "Inverse Gaussian 3P", collapsed: true, link: "/documentation/distributions/continuous/inverse_gaussian_3p" },
                            { text: "Johnson SB", collapsed: true, link: "/documentation/distributions/continuous/johnson_sb" },
                            { text: "Johnson SU", collapsed: true, link: "/documentation/distributions/continuous/johnson_su" },
                            { text: "Kumaraswamy", collapsed: true, link: "/documentation/distributions/continuous/kumaraswamy" },
                            { text: "Laplace", collapsed: true, link: "/documentation/distributions/continuous/laplace" },
                            { text: "Levy", collapsed: true, link: "/documentation/distributions/continuous/levy" },
                            { text: "Loggamma", collapsed: true, link: "/documentation/distributions/continuous/loggamma" },
                            { text: "Logistic", collapsed: true, link: "/documentation/distributions/continuous/logistic" },
                            { text: "Loglogistic", collapsed: true, link: "/documentation/distributions/continuous/loglogistic" },
                            { text: "Loglogistic 3P", collapsed: true, link: "/documentation/distributions/continuous/loglogistic_3p" },
                            { text: "Lognormal", collapsed: true, link: "/documentation/distributions/continuous/lognormal" },
                            { text: "Maxwell", collapsed: true, link: "/documentation/distributions/continuous/maxwell" },
                            { text: "Moyal", collapsed: true, link: "/documentation/distributions/continuous/moyal" },
                            { text: "Nakagami", collapsed: true, link: "/documentation/distributions/continuous/nakagami" },
                            { text: "Non Central Chi Square", collapsed: true, link: "/documentation/distributions/continuous/non_central_chi_square" },
                            { text: "Non Central F", collapsed: true, link: "/documentation/distributions/continuous/non_central_f" },
                            { text: "Non Central T Student", collapsed: true, link: "/documentation/distributions/continuous/non_central_t_student" },
                            { text: "Normal", collapsed: true, link: "/documentation/distributions/continuous/normal" },
                            { text: "Pareto First Kind", collapsed: true, link: "/documentation/distributions/continuous/pareto_first_kind" },
                            { text: "Pareto Second Kind", collapsed: true, link: "/documentation/distributions/continuous/pareto_second_kind" },
                            { text: "Pert", collapsed: true, link: "/documentation/distributions/continuous/pert" },
                            { text: "Power Function", collapsed: true, link: "/documentation/distributions/continuous/power_function" },
                            { text: "Rayleigh", collapsed: true, link: "/documentation/distributions/continuous/rayleigh" },
                            { text: "Reciprocal", collapsed: true, link: "/documentation/distributions/continuous/reciprocal" },
                            { text: "Rice", collapsed: true, link: "/documentation/distributions/continuous/rice" },
                            { text: "Semicircular", collapsed: true, link: "/documentation/distributions/continuous/semicircular" },
                            { text: "T Student", collapsed: true, link: "/documentation/distributions/continuous/t_student" },
                            { text: "T Student 3P", collapsed: true, link: "/documentation/distributions/continuous/t_student_3p" },
                            { text: "Trapezoidal", collapsed: true, link: "/documentation/distributions/continuous/trapezoidal" },
                            { text: "Triangular", collapsed: true, link: "/documentation/distributions/continuous/triangular" },
                            { text: "Uniform", collapsed: true, link: "/documentation/distributions/continuous/uniform" },
                            { text: "Weibull", collapsed: true, link: "/documentation/distributions/continuous/weibull" },
                            { text: "Weibull 3P", collapsed: true, link: "/documentation/distributions/continuous/weibull_3p" },
                        ],
                    },
                    {
                        text: "Discrete",
                        collapsed: true,
                        items: [
                            { text: "Bernoulli", collapsed: true, link: "/documentation/distributions/discrete/bernoulli" },
                            { text: "Binomial", collapsed: true, link: "/documentation/distributions/discrete/binomial" },
                            { text: "Geometric", collapsed: true, link: "/documentation/distributions/discrete/geometric" },
                            { text: "Hypergeometric", collapsed: true, link: "/documentation/distributions/discrete/hypergeometric" },
                            { text: "Logarithmic", collapsed: true, link: "/documentation/distributions/discrete/logarithmic" },
                            { text: "Negative Binomial", collapsed: true, link: "/documentation/distributions/discrete/negative_binomial" },
                            { text: "Poisson", collapsed: true, link: "/documentation/distributions/discrete/poisson" },
                            { text: "Uniform", collapsed: true, link: "/documentation/distributions/discrete/uniform" },
                        ],
                    },
                ],
            },
        ],
        "/release/": [{
            //text: "Releases",
            items: [

                {text: "Version 1", collapsed: true, items: [
                    {text: "Version 1.0", collapsed: true, items: [
                        { text: "What's new in v1.0.0", collapsed: true, link: "/release/v1/v1.0/v1.0.0" },
                    ]}
                ]},
                {text: "Version 0", collapsed: true, items: [
                    {text: "Version 0.7", collapsed: true, items: [
                        { text: "What's new in v0.7.2", collapsed: true, link: "/release/v0/v0.7/v0.7.2" },
                    ]}
                ]},
            ]
        }],
    },
        socialLinks: [{ icon: "github", link: "https://github.com/phitterio/phitter-kernel" }],
    },
    markdown: {
        math: true,
    },
});
