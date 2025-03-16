# Distributions

In this section is a summarize of the distributions, the link to the pgitter playground, the excel spreadsheet, the googlesheet spreadsheet

## Discrete Distributions

| Distribution                                                                   | Phitter Playground                                                                           | Download Excel File                                                             | Google Sheets Files                                                                                           |
| :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------ |
| [bernoulli](/documentation/distributions/discrete/bernoulli)                 | ▶️[phitter:bernoulli](https://phitter.io/distributions/discrete/bernoulli)                 | 📊<a @click="downloadExcelFile('bernoulli')">bernoulli.xlsx</a>                 | 🌐[gs:bernoulli](https://docs.google.com/spreadsheets/d/1sWJZYZWW8cVLFXYV-fb3Lq4y2YgWzgTGWHfhIJ0zM5c)         |
| [binomial](/documentation/distributions/discrete/binomial)                   | ▶️[phitter:binomial](https://phitter.io/distributions/discrete/binomial)                   | 📊<a @click="downloadExcelFile('binomial')">binomial.xlsx</a>                   | 🌐[gs:binomial](https://docs.google.com/spreadsheets/d/1bPOiZVUhjLMmbFqVjWMqg1NzTvsZxVIw95fi5hIhkn0)          |
| [geometric](/documentation/distributions/discrete/geometric)                 | ▶️[phitter:geometric](https://phitter.io/distributions/discrete/geometric)                 | 📊<a @click="downloadExcelFile('geometric')">geometric.xlsx</a>                 | 🌐[gs:geometric](https://docs.google.com/spreadsheets/d/1cEU6n8UxpJ_Had6WfFnAXZ2FcaLGYu8g5srQ_iEfjgg)         |
| [hypergeometric](/documentation/distributions/discrete/hypergeometric)       | ▶️[phitter:hypergeometric](https://phitter.io/distributions/discrete/hypergeometric)       | 📊<a @click="downloadExcelFile('hypergeometric')">hypergeometric.xlsx</a>       | 🌐[gs:hypergeometric](https://docs.google.com/spreadsheets/d/10xUqKVoFzUiukuYt6VFwlaetMDTdGulHQPEWl1rJiMA)    |
| [logarithmic](/documentation/distributions/discrete/logarithmic)             | ▶️[phitter:logarithmic](https://phitter.io/distributions/discrete/logarithmic)             | 📊<a @click="downloadExcelFile('logarithmic')">logarithmic.xlsx</a>             | 🌐[gs:logarithmic](https://docs.google.com/spreadsheets/d/1N-YXrSfOYkPKwerL5I1QmfxuwbZzVUzgBWTcKzcmLhE)       |
| [negative_binomial](/documentation/distributions/discrete/negative_binomial) | ▶️[phitter:negative_binomial](https://phitter.io/distributions/discrete/negative_binomial) | 📊<a @click="downloadExcelFile('negative_binomial')">negative_binomial.xlsx</a> | 🌐[gs:negative_binomial](https://docs.google.com/spreadsheets/d/1xmCWBiswdW5s7SIhwT2nrdQxLFAb6hw73iy52_nvjQE) |
| [poisson](/documentation/distributions/discrete/poisson)                     | ▶️[phitter:poisson](https://phitter.io/distributions/discrete/poisson)                     | 📊<a @click="downloadExcelFile('poisson')">poisson.xlsx</a>                     | 🌐[gs:poisson](https://docs.google.com/spreadsheets/d/1fwoe70JH5Ve6sETb7AwBdb4eep_h2DeGlpHIWcHeZA8)           |
| [uniform](/documentation/distributions/discrete/uniform)                     | ▶️[phitter:uniform](https://phitter.io/distributions/discrete/uniform)                     | 📊<a @click="downloadExcelFile('uniform')">uniform.xlsx</a>                     | 🌐[gs:uniform](https://docs.google.com/spreadsheets/d/1Ahl2ugOKkUCVWzzc_aNHwlA5Af4sHpTwqSiFIyYPsfM)           |

<script setup>
const downloadExcelFile = function(fileId) {
    const url = `https://raw.githubusercontent.com/phitterio/phitter-files/main/discrete/${fileId}.xlsx`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileId}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<style module>
a {
  cursor: pointer;
}
</style>
