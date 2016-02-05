/*
 * Main
 */

logout = function() {
   localStorage.removeItem("username");
   localStorage.removeItem("password");
   window.location.reload();
 }

render = function (dom, content, clase, padre) {
   var load = document.createElement(dom);
   if(content != null) {
     load.textContent = content;
   }
   if(clase != null) {
     load.className = clase;
   }
   document.getElementById(padre).appendChild(load);
 }

userMsg = function(id, startMsg, username, endMsg) {
   document.getElementById(id).innerHTML = startMsg+username+endMsg;
 }

showDom = function(id) {
   document.getElementById(id).style.display = "block";
 }

 hideDom = function(id) {
   document.getElementById(id).style.display = "none";
 }
