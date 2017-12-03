var BinarySearchTree = function(value) {
  var someInstance = Object.create(BinarySearchTree.prototype);
  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  return someInstance;  
};


BinarySearchTree.prototype.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var current = this;

  if (newNode.value < current.value) {
    !current.left ? current.left = newNode : current.left.insert(value);
  }
  if (newNode.value > current.value) {
    !current.right ? current.right = newNode : current.right.insert(value);
  }

};

BinarySearchTree.prototype.contains = function(target) {
  var result; 
  var topNode = this;

  var checkNode = function(node) {  
    if (node.value === target) {
      return true;
    }
    if (target < node.value) {
      if (node.left) {
        return checkNode(node.left);
      } 
    } 
    if (target > node.value) {
      if (node.right) {
        return checkNode(node.right);
      } 
    }
    return false;
  };
 
  return checkNode(topNode); 
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  var usedVals = [];
  callback(this.value);

  var getVals = function(node) {
    if (node.left) {
      getVals(node.left);
    } else {
      if (!usedVals.includes(node.value)) {
        usedVals.push(node.value);
        callback(node.value);
      }
    }
    if (node.right) {
      getVals(node.right);
    } else {
      if (!usedVals.includes(node.value)) {
        usedVals.push(node.value);
        callback(node.value);
      }
    }
  };

  getVals(this);
};
