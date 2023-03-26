//задача о покрытии множества

//жадный алгоритм

//  при словии никальности массива  / Set
let states = ["mt", "wa", "or", "id", "nv", "ut", "ca", "az"];
let stations = {
  one: ["id", "nv", "ut"],
  two: ["wa", "mt", "id"],
  three: ["or", "nv", "ca"],
  four: ["nv", "ut"],
  five: ["ca", "az"],
};
let finalStation = [];
console.log(stations);
