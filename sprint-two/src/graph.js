var Graph = function() {
  this.nodes = [];
};

Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  
  this.nodes.push(newNode);
};

Graph.prototype.contains = function(node) {
  var found = false;
  this.nodes.forEach(function(n) { 
    if (n.value === node) {
      found = true;
    }
  });
  return found;
};

Graph.prototype.removeNode = function(nodeVal) {
  var targetIndex;
  this.nodes.forEach(function(node, index) {
    if (node.value === nodeVal) {
      targetIndex = index;
    }
    node.edges.forEach(function(edge, edgeIndex) {
      if (edge === nodeVal) {
        node.edges.splice(edgeIndex, 1);
      }
    });
  });
 
  this.nodes.splice(targetIndex, 1);
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findIndexesByValues(fromNode, toNode)[0];
  var toNodeIndex = this.findIndexesByValues(fromNode, toNode)[1];

  if (fromNodeIndex === undefined || toNodeIndex === undefined) {
    return false; 
  }
 
  return this.nodes[fromNodeIndex].edges.includes(toNode) || this.nodes[toNodeIndex].edges.includes(fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (typeof fromNode === 'object') {
    fromNode = fromNode.value;
  } 
  if (typeof toNode === 'object') {
    toNode = toNode.value;
  }
  var fromNodeIndex = this.findIndexesByValues(fromNode, toNode)[0];
  var toNodeIndex = this.findIndexesByValues(fromNode, toNode)[1];
  this.nodes[fromNodeIndex].edges.push(toNode);
  this.nodes[toNodeIndex].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findIndexesByValues(fromNode, toNode)[0];
  var toNodeIndex = this.findIndexesByValues(fromNode, toNode)[1];

  var toNodeDelete, fromNodeDelete;

  var edgesOfFromNode = this.nodes[fromNodeIndex].edges;
  var edgesOfToNode = this.nodes[toNodeIndex].edges;
  edgesOfFromNode.forEach(function(edge, index) {
    if (edge === toNode) {
      toNodeDelete = index;
    }
  });

  edgesOfToNode.forEach(function(edge, index) {
    if (edge === fromNode) {
      fromNodeDelete = index;
    }
  });

  edgesOfFromNode.splice(toNodeDelete, 1);
  edgesOfToNode.splice(fromNodeDelete, 1);

};

Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  }); 
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
