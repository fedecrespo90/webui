/*
 * Profile
 */

profile = function() {
  var flag = false;
  $.getJSON('../models/user.json', function(users) {
    users.user.forEach(function(u){
      if(u.name == localStorage.username) {
        if(u.pass === localStorage.password) {
          //RENDER PROFILE
          flag = true;
          userMsg('helloUser','Hello ',localStorage.username,'!');
          userMsg('nameUser','Username: <strong>',localStorage.username,'</strong>.');
          userMsg('apellido','Apellido: <strong>',localStorage.apellido,'</strong>');
          $('#userImg').attr("src",'../../assets/img/'+localStorage.img);
        }
      }
    });
    if(!flag) {
      window.location.href = '../../index.html';
    }
  });
}

profile();
