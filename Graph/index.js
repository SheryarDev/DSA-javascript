class Graph {
  constructor() {
    this.data = {};
  }

  // Add vertex(node) in graph

  addVertex(vertex) {
    //if vertex not exist in graph then add the vertex in graph
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }

  // Add edge in graph

  addEdge(v1, v2) {
    //if vertex v1 or v2 not exist then add vertex
    if (!this.data[v1]) {
      this.addVertex(v1);
    }
    if (!this.data[v2]) {
      this.addVertex(v2);
    }
    //add the edge between the vertex(node) v1 and v2.(push vertex v2 in v1 array and vice versa)
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }

  // remove edge in graph

  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      return item !== v2;
    });
    this.data[v2] = this.data[v2].filter((item) => {
      return item !== v1;
    });
    /*
        V1=A V2=B
        data[A]=[B,C]   data[B]=[A,C,D]
        after reomving or filtering the v1,v2, result will be
        data[A]=[c]    data[B]=[C,D]
        */
  }

  // remove vertex in graph

  removeVertex(vertex) {
    //if vertex not exist then return
    if (!this.data[vertex]) {
      return;
    }
    //if vertex has edges then remove the edges first
    for (let item of this.data[vertex]) {
      this.removeEdge(vertex, item);
    }

    //remove the vertex
    delete this.data[vertex];
  }
}

const graph1 = new Graph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
console.log("grpah", graph1.data);

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "C");
graph1.addEdge("B", "D");
console.log("grpah with edge", graph1.data);
graph1.removeEdge("A", "B");
graph1.removeEdge("A", "C");

console.log("after removign edge", graph1.data);
graph1.removeVertex("A")


console.log("after removign vertex", graph1.data);