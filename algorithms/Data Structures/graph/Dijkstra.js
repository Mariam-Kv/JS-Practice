//Алгоритм Дейкстры для поиска кратчайшего пути

let graph = {};
graph["a"] = { b: 2, c: 1 };
graph["b"] = { f: 7 };
graph["c"] = { d: 5, e: 2 };
graph["d"] = { f: 2 };
graph["e"] = { f: 1 };
graph["f"] = { g: 1 };
graph["g"] = {};
function shortPath(graph, start, end) {
  let costs = {};
  let processed = [];
  Object.keys(graph).forEach((el) => {
    if (el !== start) {
      let value = graph[start][el];
      costs[el] = value || Infinity;
    }
  });
  let node = findLowestCost(costs, processed);
  return node;
}
function findLowestCost(costs, processed) {
  let lowestCost = Infinity;
  let lowestNode;
  Object.keys(costs).forEach((el) => {
    let value = costs[el];
    if (value < lowestCost && !processed.includes(el)) lowestCost = value;
    lowestNode = el;
  });
  return lowestNode;
}
console.log(shortPath(graph, "a", "g"));
