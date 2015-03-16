
load("Graph-full.js");
g = new Graph(10);
g.addEdge(0,1);
g.addEdge(1,4);
g.addEdge(4,2);
g.addEdge(2,5);
g.addEdge(4,5);
g.addEdge(5,8);
g.addEdge(8,7);
g.addEdge(7,3);
g.addEdge(7,6);
//g.showGraph();
g.bfs(0);
var vertex = 8;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPath(paths);
//print();

//this is 
