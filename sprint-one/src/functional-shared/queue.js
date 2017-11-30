var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Queue = function() {
  var instanceObject = {};       
  instanceObject.storage = [];
  extend(instanceObject, queueMethods);
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
  size: function() {
    return this.storage.length;
  }
};
 

        