/* process.js */

/* Load default route */
route();

/* Form Validate */
function validate() {
    var user = document.forms["form"]["user"].value;
    var pass = document.forms["form"]["pass"].value;
    $.getJSON('../data.json', function(data) {
      if (user == null || user == "") {
          alert("Name must be filled out");
          return false;
      } else {
        if(user == data.user && pass == data.pass) {
          route('home');
        } else {
          alert("Incorrect data!");
        }
      }
    });
}

/* Routes */
function route(route) {
  switch (route) {
    case 'home':
      section("Welcome!","login-panel","home");
      break;
    default:
      section("Login!","home","login-panel");
  }
}

/* Section */
function section(title,hide,show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(show).style.display = "block";
  document.title = title;
}

/* Catch ENTER key */
$( 'form' ).bind('keypress', function(e){
  if ( e.keyCode == 13 ) {
    validate();
  }
});
