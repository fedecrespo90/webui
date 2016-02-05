/*
 * Section
 */

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
