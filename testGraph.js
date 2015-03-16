load("Graph-full.js");
g = new Graph(6);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(3,4);
g.addEdge(3,5);
//g.addEdge(5,6);

g.vertexList = ["Get Beans", "Grind Beans", "Clean French Press", "Boil Water", "Put coffee grounds in", "Pour Water in"];
g.showGraph();
//g.bfs(0);
//var vertex = 4;
//var source = 0;
//var paths = g.pathTo(source,vertex);
//g.showPath(paths);
print();
g.topSort();

