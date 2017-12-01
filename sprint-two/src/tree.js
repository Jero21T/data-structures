var Tree = function(value, parent) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = parent || null;

  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var parent = this;
  var t = Tree(value, parent);
  this.children.push(t);
};

treeMethods.contains = function(target) {
  var node = this;
  if (node.value === target) {
    return true;
  } else {
    var nodes = node.children;
    if (nodes) {
      nodes.forEach(function(child) {
        if (child.value === target) {
          return true;
        } 
      });
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
