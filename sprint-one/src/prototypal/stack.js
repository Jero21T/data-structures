var Stack = function() {
  var someInstance = Object.create(Stack.prototype);
  someInstance.storage = [];

  return someInstance;
};


  
  Stack.prototype.push = function (value) {
  	this.storage.push(value);
	};
	Stack.prototype.pop =  function () {
  	var removedValue = this.storage.pop();
  	return removedValue;
	};
	Stack.prototype.size = function(){
		return this.storage.length;
	}
