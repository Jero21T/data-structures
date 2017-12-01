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
