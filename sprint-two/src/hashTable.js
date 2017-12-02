


/*
 * Complexity: What is the time complexity of the above functions?
 */

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (!this._storage[index]) {
    this._storage[index] = [];
    this._storage[index].push(tuple);
  }
  this._storage[index].push(tuple);
};
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketToSearchIn = this._storage[index];
  var valueToBeRetrieved;
  bucketToSearchIn.forEach(function(tuple) {
    if (tuple[0] === k) {
      valueToBeRetrieved = tuple[1];
    }
  });
  
  return valueToBeRetrieved;
};
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucketToSearchIn = this._storage[index];
  var valueToBeRemoved;
  var indexOfValueToBeRemoved;
  var remainingElements = [];
  bucketToSearchIn.forEach(function(tuple, index) {
    if (tuple[0] !== k) {
      remainingElements.push(tuple);
    }
  });
  this._storage[index] = remainingElements;
};