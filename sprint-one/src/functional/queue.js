var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    var target = Object.keys(storage)[0];
    var delTar = storage[target];
    delete (storage[target]);

    var updateIndicies = function() {
      for (var key in storage) {
        var temp = storage[key];
        storage[`${key - 1}`] = temp;
      }
      var max = Math.max.apply(null, Object.keys(storage).map(key => parseInt(key)));
      delete storage[max];
    };
      
    updateIndicies();
    return delTar;
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};


