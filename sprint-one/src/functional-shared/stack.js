var Stack = function() {
  var instanceObject = {};       
  var storage = {1: 'A'};
  return instanceObject;
};

var methods = {

  push: function(value) { 
    //console.log('hello');
    console.log(this.storage);
  },
  'pop': function() {
  },
  'size': function() {
  }
};

var s = Stack(methods);

var extend = function(obj1, obj2) {
  var keys = Object.keys(obj2);
  keys.forEach(key => obj1[key] = obj2[key]);
  return obj1;
};

        



