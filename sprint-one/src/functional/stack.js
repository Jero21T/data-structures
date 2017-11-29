var Stack = function() {
  var someInstance = {};
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    var target =  storage[`${Object.keys(storage).length-1}`]
    delete storage[`${Object.keys(storage).length-1}`]
    return target;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
