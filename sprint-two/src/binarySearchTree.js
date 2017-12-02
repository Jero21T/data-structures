var BinarySearchTree = function(value) {
  var someInstance = Object.create(BinarySearchTree.prototype);
  someInstance.value = value;
  someInstance.left = [];
  someInstance.right = [];
  return someInstance;  
};

BinarySearchTree.prototype.insert = function(node) {
  
};

BinarySearchTree.prototype.contains = function(target) {
  var result; 
  
  var topNode = this;

  var checkNode = function(node) {  
    if (node.value === target) {
      result = true;
      return
    };

    if (node.value > target) {
    if (node.left.length) {
      node.left.forEach(function(child) {
        checkNode(child)
      });
    } else {
        result = false;
    }
  } else {
      if (node.right.length) {
        node.right.forEach(function(child) {
          checkNode(child);
        });
      } else {
          result = false;
        }
    }
 };
 
 checkNode(topNode);
 return result ? true : false;
};






BinarySearchTree.prototype.depthfirstLog = function (callback) {

};