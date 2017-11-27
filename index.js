import dl from 'datalib'

const data = dl.csv('http://vega.github.io/datalib/data/stocks.csv');

// Show summary statistics for each column of the data table.
console.log(dl.format.summary(data));