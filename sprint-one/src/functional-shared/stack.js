var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Stack = function() {
  var instanceObject = {};       
  instanceObject.storage = [];
  extend(instanceObject, methods);
  return instanceObject;
};

var methods = {
  push: function(value) { 
    this.storage.push(value);
  },
  pop: function() {
    var target = this.storage.pop();
    return target;
  },
  size: function() {
    return this.storage.length;
  }
};


        