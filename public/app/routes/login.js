/*
 * Login
 */

validate = function () {
    var user = document.forms["form"]["user"].value;
    var pass = document.forms["form"]["pass"].value;
    var flag = false;

    $.getJSON('./app/models/user.json', function(users) {
      if (user == null || user == "") {
          alert("Username and password must be filled out");
          return false;
      } else {
        users.user.forEach(function(u){
          if(user == u.name) {
            if( pass == u.pass) {
              //Logged in
              localStorage.setItem('username',u.name);
              localStorage.setItem('password',u.pass);
              window.location.href = 'app/views/home.html';
              flag = true;
            }
          }
        });
        if(!flag) {
          alert("Incorrect data!");
        }
      }
    });
}

login = function () {
  //Catch ENTER key
  $( 'form' ).bind('keypress', function(e){
    if ( e.keyCode == 13 ) {
      validate();
    }
  });
}

login();
