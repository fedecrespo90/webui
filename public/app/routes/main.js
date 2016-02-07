/*
 * Main
 */

logout = function() {
   localStorage.removeItem("username");
   localStorage.removeItem("password");
   localStorage.removeItem("img");
   localStorage.removeItem("apellido");
   window.location.reload();
 }

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
