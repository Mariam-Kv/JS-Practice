//задача о покрытии множества

//жадный алгоритм

//  при словии никальности массива  / Set
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);
const finalStations = new Set();
console.log(stations);
while (statesNeeded.size) {
  let bestChoice;
  let statesCovered = new Set();
  Object.keys(stations).map((station) => {
    let states = new Set(
      [...statesNeeded].filter((el) => stations[station].has(el))
    );
    if (states.size > statesCovered.size) {
      bestChoice = station;
      statesCovered = states;
    }
  });
  statesNeeded = new Set(
    [...statesNeeded].filter((el) => !statesCovered.has(el))
  );
  finalStations.add(bestChoice);
}
console.log(finalStations);
