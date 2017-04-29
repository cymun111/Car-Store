$(document).ready(function(){
let template0 = document.querySelector('#bmwtemplate');
var clone = document.importNode(template0.content, true);
document.getElementById('bmw').appendChild(clone);

let template = document.querySelector('#bmwlogotemplate');
var clone = document.importNode(template.content, true);
document.getElementById("bmwLogo").appendChild(clone);

let template1 = document.querySelector('#lambotemplate');
var clone = document.importNode(template1.content, true);
document.getElementById('lambo').appendChild(clone);

let template2 = document.querySelector('#lambologotemplate');
var clone = document.importNode(template2.content, true);
document.getElementById('lamboLogo').appendChild(clone);

let template3 = document.querySelector('#ferrtemplate');
var clone = document.importNode(template3.content, true);
document.getElementById('ferr').appendChild(clone);

let template4 = document.querySelector('#ferrlogotemplate');
var clone = document.importNode(template4.content, true);
document.getElementById('ferrLogo').appendChild(clone);

let template5 = document.querySelector('#portemplate');
var clone = document.importNode(template5.content, true);
document.getElementById('por').appendChild(clone);

let template6 = document.querySelector('#porlogotemplate');
var clone = document.importNode(template6.content, true);
document.getElementById('porLogo').appendChild(clone);

let template7 = document.querySelector('#corvtemplate');
var clone = document.importNode(template7.content, true);
document.getElementById('corv').appendChild(clone);

let template8 = document.querySelector('#corvlogotemplate');
var clone = document.importNode(template8.content, true);
document.getElementById('corvLogo').appendChild(clone);

$("#myInput").keypress(function myFunction() {
  // Declare variables
  var input, filter, table, tr, th, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
var valueInput;
function myTax(){
var tax = .08;
var price = valueInput;
    if (valueInput>=1){
var pricextax = price * tax;
var total = +price + +pricextax;
    if ($("#taxButton0").data('clicked')){
      document.getElementById("tax0").innerHTML = "$" + '' + total;}
    else if ($("#taxButton1").data('clicked')) {
        document.getElementById("tax1").innerHTML = "$" + '' + total;
} else if ($("#taxButton2").data('clicked')) {
    document.getElementById("tax2").innerHTML = "$" + '' + total;
}else if ($("#taxButton3").data('clicked')) {
    document.getElementById("tax3").innerHTML = "$" + '' + total;
}else if ($("#taxButton4").data('clicked')) {
    document.getElementById("tax4").innerHTML = "$" + '' + total;
}else {alert("Invalid Value");}}}
$("#taxButton0, #taxButton1, #taxButton2, #taxButton3, #taxButton4").click(function onClick(){
  $(this).data('clicked', true);
    valueInput=prompt("Please enter MSRP");
    if( valueInput )
            myTax();
  });
});
