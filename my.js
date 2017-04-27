
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

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, th, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    th = tr[i].getElementsByTagName("th")[0];
    if (th) {
      if (th.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

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
