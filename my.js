
$(document).ready(function(){
let template = document.querySelector('#bmwtemplate');
var clone = document.importNode(template.content, true);
document.getElementById('bmw').appendChild(clone);

let template1 = document.querySelector('#lambotemplate');
var clone = document.importNode(template1.content, true);
document.getElementById('lambo').appendChild(clone);

let template2 = document.querySelector('#ferrtemplate');
var clone = document.importNode(template2.content, true);
document.getElementById('ferr').appendChild(clone);

let template3 = document.querySelector('#portemplate');
var clone = document.importNode(template3.content, true);
document.getElementById('por').appendChild(clone);

let template4 = document.querySelector('#corvtemplate');
var clone = document.importNode(template4.content, true);
document.getElementById('corv').appendChild(clone);

var cars = $('#carsli li');
$("#searchform").keyup(function() {
  var re = new RegExp($(this).val(), "i"); // "i" means it's case-insensitive
  cars.show().filter(function() {
      return !re.test($(this).text());
  }).hide();
    });
//var priceTemplate = document.querySelector("#priceTemplate");
//var clone = document.importNode(priceTemplate.content, true);
//var price = document.getElementsByClassName('price');
//function myTax(price){
  //let tax = price * .08;
  //let total = price + tax;
  //document.getElementsByClassName("pplustax").value = total;
//}
//myTax()
});
