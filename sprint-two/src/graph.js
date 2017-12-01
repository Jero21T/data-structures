var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  this.nodes.forEach(function(n) { 
    if (n.value === node) {
      found = true;
    }
  });
  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var targetIndex;
  this.nodes.forEach(function(n, index) {
    if (n.value === node) {
      targetIndex = index;
    }
  });
  this.nodes.splice(targetIndex, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findIndexesByValues(fromNode, toNode)[0];
  var toNodeIndex = this.findIndexesByValues(fromNode, toNode)[1];
  return this.nodes[fromNodeIndex].edges.includes(toNode) || this.nodes[toNode].edges.includes(fromNodeIndex);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findIndexesByValues(fromNode, toNode)[0];
  var toNodeIndex = this.findIndexesByValues(fromNode, toNode)[1];
  this.nodes[fromNodeIndex].edges.push(toNode);
  this.nodes[toNodeIndex].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {

};

Graph.prototype.forEachNode = function(cb) {
};

Graph.prototype.findIndexesByValues = function(fromNode, toNode) {
  var fromNodeIndex, toNodeIndex;
  this.nodes.forEach(function(node, index) {
    if (node.value === fromNode) {
      fromNodeIndex = index;
    }
    if (node.value === toNode) {
      toNodeIndex = index;
    }
  });
  return [fromNodeIndex, toNodeIndex];
};
