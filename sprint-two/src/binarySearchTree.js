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
    if (!current.left) {
      current.left = newNode;
    } else {
      current.left.insert(value);
    }
  }
  if (newNode.value > current.value) {
    if (!current.right) {
      current.right = newNode;
    } else {
      current.right.insert(value);
    }
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
  var vals = [];
  var node = this;
  vals.push(this.value);
  var getVals = function() {
    if (this.left) {
      this.left.getVals();
    } else {
      vals.push(this.val);
    }
    if (this.right) {
      this.right.getVals();
    } else {
      vals.push(this.val);
    }
    
  };
  getVals(node);
  console.log(vals);
};
