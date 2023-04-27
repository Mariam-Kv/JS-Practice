// need to store the neighbors and the cost for getting to that neighbor.
let graph = {};
graph["a"] = { b: 2, c: 1 };
graph["b"] = { f: 7 };
graph["c"] = { d: 5, e: 2 };
graph["d"] = { f: 2 };
graph["e"] = { f: 1 };
graph["f"] = { g: 1 };
graph["g"] = {};
console.log(graph);
function getShortestPath(graph, start, end) {
  // costs from start
  let costs = {};
  let processed = [];
  let neighbors = {};
  Object.keys(graph).map((el) => {
    if (start !== el) {
      let value = graph[start][el];
      costs[el] = value ? value : Infinity;
    }
  });
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    let cost = costs[node];
    neighbors = graph[node];
    processed.push(node);

    Object.keys(neighbors).map((el) => {
      let newCost = cost + neighbors[el];
      if (newCost < costs[el]) {
        costs[el] = newCost;
      }

      console.log(costs);
    });
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}
function findNodeLowestCost(costs, processed) {
  let lowestNode;
  let lowestCost = Infinity;
  Object.keys(costs).map((el) => {
    if (costs[el] < lowestCost && !processed.includes(el))
      (lowestCost = costs[el]), (lowestNode = el);
  });

  return lowestNode;
}
console.log(getShortestPath(graph, "a", "g"));
//an array to keep track of all the nodes you’ve already processed
