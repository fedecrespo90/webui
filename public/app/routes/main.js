/*
 * Main
 */

logout = function() {
   localStorage.removeItem("username");
   localStorage.removeItem("password");
   window.location.reload();
 }

var laListaDeComics = $.getJSON('../models/comic.json', function(comics){});
// createComic = function(id, url, padre) {
//    var img = $('<img>');
//    img.attr('id', id);
//    img.attr('src', url );
//    img.appendTo(padre);
//    $("#img").mouseover(function(){
//      showDom('panel-single');
//    });
//    $("#img").mouseout(function(){
//      hideDom('panel-single');
//    });
// }

comicHover = function(fieldSelector, panelSingle) {
  $(fieldSelector).mouseover(function(){
    showDom(panelSingle);
  });
  $(fieldSelector).mouseout(function(){
    hideDom(panelSingle);
  });
}

showDom = function(id) {
   document.getElementById(id).style.display = "block";
 }

 hideDom = function(id) {
   document.getElementById(id).style.display = "none";
 }

render = function (newDom, clase, idPadre, id, content) {
    var load = document.createElement(newDom);
    load.className = clase;
    document.getElementById(idPadre).appendChild(load);
    if(id != null) {
      load.id = id;
    }
    if(content != null) {
      load.innerHTML = content;
    }
}

userMsg = function(id, startMsg, username, endMsg) {
   document.getElementById(id).innerHTML = startMsg+username+endMsg;
 }
