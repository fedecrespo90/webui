/*
 * Home
 */

home = function () {
  var flag = false;
  $.getJSON('../models/user.json', function(users) {
    users.user.forEach(function(u){
      if(u.name == localStorage.username) {
        if(u.pass === localStorage.password) {
          //RENDER HOME
          flag = true;
          loadComics();
        }
      }
    });
    if(!flag) {
      window.location.href = '../../index.html';
    }
  });
}

loadComics = function () {
  $.getJSON('../models/comic.json', function(comics) {
    comics.comic.forEach(function(c){
      console.log(c.title);
      console.log(c.price);
    });
  });
}

home();
