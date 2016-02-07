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

sortAsc = function(property) {
     return function (a, b) {
         var sortStatus = 0;
         if (a[property] < b[property]) {
             sortStatus = -1;
         } else if (a[property] > b[property]) {
             sortStatus = 1;
         }

         return sortStatus;
     };
 }

 sortDesc = function(property) {
      return function (b, a) {
          var sortStatus = 0;
          if (a[property] < b[property]) {
              sortStatus = -1;
          } else if (a[property] > b[property]) {
              sortStatus = 1;
          }

          return sortStatus;
      };
  }

loadComics = function () {
  $.getJSON('../models/comic.json', function(comics) {
    var sidebar = '<div class="col-lg-3 col-md-4 col-s-5 col-xs-4 right"><aside><div class="panel panel-primary myPanel"><div class="panel-footer"><div class="form-group"><h3>Order!</h3></div></div><div class="panel-footer"><button class="btn btn-primary" id ="opcionUno">Order A-Z</button><button class="btn btn-primary" id ="opcionDos">Order Z-A</button><button class="btn btn-primary" id ="opcionTres">Order by rate descending</button><button class="btn btn-primary" id ="opcionCuatro">Order by rate ascending</button></div><div class="panel-footer"><p class="cara">:D</p></div></div></aside></div>';
    //Indices
    var i = 0;
    // create mainRow
    $('#home').append('<div class="row" id="mainRow"></div>');
    $('#mainRow').append('<div class="col-lg-9 col-md-8 col-s-7 col-xs-8" id="comicListContainer"></div>');
    $('#mainRow').append(sidebar);
    // create comicList
    comics.comic.forEach(function(c){
      $('#comicListContainer').append('<div class="col-lg-4 comicIndividual" id="comic'+i+'"></div>')
      $('#comic'+i).append('<img src="../../assets/img/'+c.img+'" id="comicImg'+i+'" class="comic-img">');
      var panel = '<div id="panelSingle'+i+'" class="panel panel-body panel-single"><h1 class="panel-title">'+c.title+'</h1><h3 class="panel-price">'+'$'+c.price+'</h3></div>';
      $('#comic'+i).append(panel);
      comicHover('#comicImg'+i, 'panelSingle'+i);
      i++;
    });
    $('#opcionUno').click(function(){
      reimprimir(comics.comic.sort(sortAsc('title')));
    });
    $('#opcionDos').click(function(){
      reimprimir(comics.comic.sort(sortDesc('title')));
    });
    $('#opcionTres').click(function(){
      reimprimir(comics.comic.sort(sortDesc('rating')));
    });
    $('#opcionCuatro').click(function(){
      reimprimir(comics.comic.sort(sortAsc('rating')));
    });
   });
 }

reimprimir = function(arr) {
  $('#comicListContainer').empty();
  for (var i = 0; i < arr.length; i++) {
    $('#comicListContainer').append('<div class="col-lg-4 comicIndividual" id="comic'+i+'"></div>')
    $('#comic'+i).append('<img src="../../assets/img/'+arr[i].img+'" id="comicImg'+i+'" class="comic-img">');
    var panel = '<div id="panelSingle'+i+'" class="panel panel-body panel-single"><h1 class="panel-title">'+arr[i].title+'</h1><h3 class="panel-price">'+'$'+arr[i].price+'</h3></div>';
    $('#comic'+i).append(panel);
    comicHover('#comicImg'+i, 'panelSingle'+i);
  }
}

home();
