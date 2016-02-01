/* process.js */
var user = document.getElementById("user");
var pass = document.getElementById("pass");
var submit = document.getElementById("submit");
var form = document.getElementById("form");

var mydata = JSON.parse(data);
console.log(mydata[0]);
//alert("hola");
//alert(mydata[0].age);


/* VALIDATE */
function validate() {
  if (form.user.value == "Fede" && form.pass.value == "flemita1") {
    window.location.href = "home.html";
  } else {
    alert("Data incorrecta!");
  }
}
