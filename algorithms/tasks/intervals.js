let inputs = [
  [1, 3],
  [2, 6],
  [15, 18],
  [8, 10],
];
let arr = [];

function intervals(inputs) {
  inputs.sort((a, b) => a[0] - b[0]);
  if (inputs.length === 1) {
    return inputs;
  }
  arr.push(inputs[0]);
  for (let i in inputs) {
    if (inputs[i][0] <= arr[arr.length - 1][1]) {
      arr[arr.length - 1][1] = 
        Math.max(arr[arr.length - 1][1], inputs[i][1])
      
    } else {
      arr.push(inputs[i]);
    }
  }
  return arr;
}
console.log(intervals(inputs));
