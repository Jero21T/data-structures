var Stack = function() {
	this.storage = []; 
};

Stack.prototype.push = function(value) {
	this.storage.push(value);
}
Stack.prototype.pop = function(value) {
	var target = this.storage.pop();
	return target
}
Stack.prototype.size = function(value) {
	return this.storage.length;
}