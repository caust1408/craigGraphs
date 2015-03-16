function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
    }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (var i =0; i < this.vertices; ++i) {
	  this.marked[i] = false;
}
}

function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    putstr(i + " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined)
        putstr(this.adj[i][j] + ' ');
    }
    print();
  }
}
function dfs(v) {
	   this.marked[v] = true;
	      if (this.adj[v] != undefined) { 
		            print("Visited vertex: " + v);
			       }
	         for each ( var w in this.adj[v]) {
			 	   //var w = this.adj[v][i];
				         if (!this.marked[w]) {
						          this.dfs(w);
							        }
					    }
}

