var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage[index]) {
    this._storage[index] = [k, v];
    this._storage[index] =  this.getTuple(k, v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    if (this._storage[index][k]) {
      return this._storage[index][k];
    }
  }
  return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, null);
};

HashTable.prototype.getTuple = function(k, v) {
  return [k, v];
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

