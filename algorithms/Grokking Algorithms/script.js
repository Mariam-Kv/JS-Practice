let graph = {};
graph["a"] = { b: 2, c: 1 };
graph["b"] = { f: 7 };
graph["c"] = { d: 5, e: 2 };
graph["d"] = { f: 2 };
graph["e"] = { f: 1 };
graph["f"] = { g: 1 };
graph["g"] = {};

function shortestPath(graph, start, end) {
  let costs = {};
  let processed = [];
  let neighbors = {};
  Object.keys(graph).map((el) => {
    if (el !== start) {
      let value = graph[start][el];
      costs[el] = value || Infinity;
    }
  });
  let node = lowestNodeCost(costs, processed);
  while (node) {
    processed.push(node);
    let cost = costs[node];
    neighbors = graph[node];
    console.log(neighbors);
    Object.keys(neighbors).map((el) => {
      let newCost = cost + neighbors[el];
      console.log(newCost);
      if (newCost < costs[el]) costs[el] = newCost;
    });
    console.log(costs, processed);
    node = lowestNodeCost(costs, processed);
  }
  return costs;
}
function lowestNodeCost(costs, processed) {
  let lowestCost = Infinity;
  let lowestNode;
  Object.keys(costs).map((el) => {
    if (costs[el] < lowestCost && !processed.includes(el)) {
      lowestCost = costs[el];
      lowestNode = el;
    }
  });
  console.log(lowestNode);
  return lowestNode;
}
console.log(shortestPath(graph, "a", "g"));
