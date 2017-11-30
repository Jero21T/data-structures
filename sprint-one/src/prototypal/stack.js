var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = [];

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage.push(value);
  },
  pop: function() {
    var target = this.storage.pop();
    return target;
  },
  size: function () {
    return this.storage.length;
  }
};






