// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //start at body
  // produce a list of elements that match className
  //recursively go through body's elements and find if class matches className

  var body = document.body;
  var elements = [];
      
  function getElements(node) {
    if(node.classList && node.classList.contains(className)) {
      elements.push(node);
    }
    node.childNodes.forEach (function(el) {
      getElements(el);
    });
  }

  getElements(body);
  return elements;
};
