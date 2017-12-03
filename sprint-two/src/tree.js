var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  newTree.children = []; 
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var parent = this;
  var child = Tree(value, parent);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result;

  var checkNode = function(node) {
    if (node.value === target) {
      result = true;
    }
    if (node.children.length) {
      node.children.forEach(function(child) {
        checkNode(child); 
      });
    }
  };

  var node = this;
  checkNode(node);
  
  return result ? true : false;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
  return obj;
};
