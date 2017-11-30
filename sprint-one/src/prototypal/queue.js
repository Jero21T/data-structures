
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceObject = Object.create(queueMethods);
  instanceObject.storage = [];
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
  size: function () {
    return this.storage.length;
  }

};


