var extend = function(obj1, obj2) {
  for (var key in obj2){
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Stack = function() {
  var instanceObject = {};       
  var storage = [];
  extend(instanceObject, methods)
  return instanceObject;
};

var methods = {};
methods.push = function(value) { 
    this.storage.push(value);
  }
methods.pop = function() {
    var target = this.storage.pop();
    return target
  }
methods.size = function() {
    return this.storage.length;
  }

        