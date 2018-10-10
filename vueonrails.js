/*!
* vueonrails.js
* v1.0.1
* (c) Bryan Lim; MIT License
*/

export function erb(variable){
  var element = document.getElementById("vueonrails-" + variable)
  if(element == null){ return "" }
  return JSON.parse(element.getAttribute("data-" + variable))
}
  
export function isView(pageClassString){
  if(pageClassString == "###") return
  if(pageClassString != "") pageClassString = pageClassString.replace(/#/g , " ");
  return document.getElementsByClassName(pageClassString).length == 1
}

export function puts(obj){
  console.log({obj})
}

export function p(obj){
  console.log({obj})
}

export function table(obj){
  console.table(obj)
}

export function addClass(identifier, className){
  document.getElementById(identifier).classList.addClass(className)
}

export function toggleClass(identifier, className){
  document.getElementById(identifier).classList.toggle(className)
}

export function titleize(str){
  return str.replace(/\b\S/g, function(t) { return t.toUpperCase() });
}

export function isArray(obj){
  return Object.prototype.toString.call(obj) === '[object Array]' ;
}
