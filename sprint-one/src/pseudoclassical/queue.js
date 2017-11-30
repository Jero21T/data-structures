var Queue = function() {
	this.storage = []; 
};

Queue.prototype.enqueue = function(value) {
	this.storage.push(value);
}
Queue.prototype.dequeue = function(value) {
	var target = this.storage.shift();
	return target
}
Queue.prototype.size = function(value) {
	return this.storage.length;
}