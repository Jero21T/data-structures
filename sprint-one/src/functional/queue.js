var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
    console.log(storage)
  };

  someInstance.dequeue = function() {
    var target =  storage[Object.keys(storage)[0]]
    delete storage[Object.keys(storage)[0]]
    
    console.log(target)
    return target;
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage){
      count++;
    }
    return count
  };

  return someInstance;
};

