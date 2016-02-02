/* process.js */

/* FORM VALIDATE */
function validate() {
    var user = document.forms["form"]["user"].value;
    var pass = document.forms["form"]["pass"].value;
    $.getJSON('../data.json', function(data) {
      if (user == null || user == "") {
          alert("Name must be filled out");
          return false;
      } else {
        if(user == data.user && pass == data.pass) {
          window.location.href = "http://google.com.ar";
        } else {
          alert("Incorrect data!");
        }
      }
    });
}
