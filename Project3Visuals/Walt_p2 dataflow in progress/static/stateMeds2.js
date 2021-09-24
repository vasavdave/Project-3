
var state_names = [];
var state_names2 = []
var price = [];
var avg_price = []
var when = []
console.log("Hello")
d3.json("/page3").then(function(data) { 
  //var mprice = data.median_listing_price
  //var aprice = data.average_listing_price

 // console.log(data)
  

 /*  for (var key in data) {
    state_names.push(key);
    price.push(mprice[key]);
    avg_price.push(aprice[key]);
} */


for (var index = 0; index < data.length; index++) {
  state_names.push(data[index].states);
  price.push(data[index].median_listing_price);
}


console.log(state_names);
console.log(price);
// console.log(avg_price)
});



 

 
