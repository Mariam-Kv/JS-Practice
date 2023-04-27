// поиск в ширину
//FIFO
let graph = {};
graph["a"] = ["b", "c"];
graph["b"] = ["f"];
graph["c"] = ["d", "e"];
graph["d"] = ["f"];
graph["e"] = ["f"];
graph["f"] = ["g"];
function breadthSearch(graph, start, end) {
  let queue = [start];
  while (queue.length > 0) {
    let current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) return true;
    else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}
console.log(breadthSearch(graph, "a", "g"));
//mango seller


// const graph = {};
// graph.you = ["alice", "bob", "claire"];
// graph.bob = ["anuj", "peggy"];
// graph.alice = ["peggy"];
// graph.claire = ["thom", "jonny"];
// graph.anuj = [];
// graph.peggy = [];
// graph.thom = [];
// graph.jonny = [];
// let mangoSeller = (str) => {
//   return str[str.length - 1] === "m";
// };

// function breadth_first_search(start) {
//   let stack = [...graph[start]];
//   while (stack.length !== 0) {
//     let current = stack.shift();
//     let result = mangoSeller(current);
//     if (result) return current;
//     if (graph[current]) {
//       graph[current].map((el) => {
//         if (!stack.includes(el)) stack.push(el);
//       });
//     }
//   }

//   return false;
// }
// console.log(breadth_first_search("you"));
