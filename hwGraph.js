// This is my hw graph 


load("Graph-full.js");
g = new Graph(13);
g.addEdge(0,1);
g.addEdge(0,4);
g.addEdge(0,3);
g.addEdge(1,5);
g.addEdge(2,4);
g.addEdge(2,5);
g.addEdge(3,4);
g.addEdge(3,6);
g.addEdge(4,8);
g.addEdge(5,7);
g.addEdge(5,8);
g.addEdge(6,9);
g.addEdge(7,9);


g.showGraph();
g.bfs(0);
var vertex = 9;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPath(paths);
//print();

//this is 
