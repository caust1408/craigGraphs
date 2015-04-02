
load("Graph-full.js");
g = new Graph(6);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(1,5);
g.addEdge(2,5);
g.addEdge(3,4);
g.showGraph();
g.bfs(0);
var vertex = 5;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPath(paths);
//print();

//this is 
