var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!this.head){
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    var oldHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return oldHead.value;
  };

  list.contains = function(target){
    var node = this.head;
    if(!node){
      return false;
    }
    while(node.next) {
      if(node.value === target) {
        return true;
      } else if (node.next.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node
}