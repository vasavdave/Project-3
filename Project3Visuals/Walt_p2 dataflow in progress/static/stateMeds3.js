
var state_names = [];
var price = [];
var avg_price = []
var when = []
console.log("Hello")
d3.json("/page3").then(function(data) { 
 var state_h = data 
 console.log(data)
  



  for (var key in state_h) {
   
      if (state_h[key].states === "alabama") {
    state_names.push(state_h[key].states);
    price.push(state_h[key].median_listing_price);
    avg_price.push(state_h[key].average_listing_price);
    when.push(state_h[key].month_date_yyyymm)
      }
  }


//console.log(state_names);
console.log(when)
console.log(price);
console.log(avg_price);

});


var trace1 = {
  x: when,
  y: [180000,22000,280000],
  mode: 'lines',
  type: 'scatter',
  line: {
    color: 'rgb(55, 128, 191)',
    width: 1
  }
};

var trace2 = {
  x: when,
  y: avg_price,
  mode: 'lines',
  type: 'scatter'
};
var layout = {
  title:'Historic Median and Average Listing Price',
  width: 800,
  height: 600,
  yaxis: { autorange: false, range:[100000, 300000] },
};

var plot_data = [trace1];
Plotly.newPlot("LinePlot", plot_data, layout);
 

 
