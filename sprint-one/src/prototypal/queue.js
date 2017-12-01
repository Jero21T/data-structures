
var Queue = function() {
  var instanceObject = Object.create(queueMethods);
  instanceObject.storage = [];
  return instanceObject;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage.push(value);
  }, 
  dequeue: function() {
    var target = this.storage.shift();
    return target;
  },
  size: function () {
    return this.storage.length;
  }
};


