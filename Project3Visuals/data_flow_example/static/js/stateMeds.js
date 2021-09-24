
var state_names = [];
var price = []

d3.json("/page3").then(function(data) { 
 

  var med_pr = data.median_price

  for (var index = 0; index < med_pr.length; index++) {
    state_names.push(med_pr[index].states);
    price.push(med_pr[index].median_price);
      console.log(index, med_pr[index])
}});

 
