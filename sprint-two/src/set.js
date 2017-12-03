var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var targetIndex;
  this._storage.forEach(function(element, index) {
    if (item === element) {
      targetIndex = index;
    }
  });
  this._storage.splice(targetIndex, 1);
};


