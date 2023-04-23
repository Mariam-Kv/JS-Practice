// need to store the neighbors and the cost for getting to that neighbor.

let graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: { fin: 1 },
  b: {
    a: 3,
    fin: 3,
  },
  fin: Infinity,
};
// costs from start
let costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};
let parents = {
  a: "start",
  b: "start",
  fin: Infinity,
};
//an array to keep track of all the nodes you’ve already processed
let processed = [];
function shortestPath(graph) {
  let start = Object.entries(graph.start);
  let cost = Infinity;
  let node = {};
  for (let i = 0; i < start.length; i++) {
    if (start[i][1] < cost) {
      cost = start[i][1];
      node = start[i][0];
    }
  }
  return graph[node];
}
console.log(shortestPath(graph));
