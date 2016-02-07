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

sortByProperty = function(property) {
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

loadComics = function () {

  $.getJSON('../models/comic.json', function(comics) {

    var sidebar = '<div class="col-lg-3 right"><aside><div class="panel panel-primary myPanel"><div class="panel-footer"><div class="form-group"><input class="form-control" type="text" name="search" placeholder="Search!"></div></div><div class="panel-footer"><div class="form-group"><button id ="opcionUno">BOTONAZO</button></div></div><div class="panel-footer"><p class="cara">:D</p></div></div></aside></div>';

    //Indices
    var i = 0;

    // create mainRow
    $('#home').append('<div class="row" id="mainRow"></div>');
    $('#mainRow').append('<div class="col-lg-9" id="comicListContainer"></div>');
    $('#mainRow').append(sidebar);

    //var ejemplo = ['hola','flor','otro','carlos'];
    //Usage
    //console.log(comics.comic.sort());

    // create comicList
    comics.comic.forEach(function(c){
      $('#comicListContainer').append('<div class="col-lg-4 comicIndividual" id="comic'+i+'"></div>')
      $('#comic'+i).append('<img src="../../assets/img/comic.jpg" id="comicImg'+i+'" class="comic-img">');
      var panel = '<div id="panelSingle'+i+'" class="panel panel-body panel-single"><h1 class="panel-title">'+c.title+'</h1><h3 class="panel-price">'+'$'+c.price+'</h3></div>';
      $('#comic'+i).append(panel);
      comicHover('#comicImg'+i, 'panelSingle'+i);
      i++;
    });
    $('#opcionUno').click(function(){
      reimprimir(comics.comic.sort(sortByProperty('title')));
    });
   });

 }

reimprimir = function(arr) {
  $('#comicListContainer').empty();
  for (var i = 0; i < arr.length; i++) {
    $('#comicListContainer').append('<div class="col-lg-4 comicIndividual" id="comic'+i+'"></div>')
    $('#comic'+i).append('<img src="../../assets/img/comic.jpg" id="comicImg'+i+'" class="comic-img">');
    var panel = '<div id="panelSingle'+i+'" class="panel panel-body panel-single"><h1 class="panel-title">'+arr[i].title+'</h1><h3 class="panel-price">'+'$'+arr[i].price+'</h3></div>';
    $('#comic'+i).append(panel);
    comicHover('#comicImg'+i, 'panelSingle'+i);
  }
}

home();
