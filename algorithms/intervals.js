let inputs = [
  [1, 3],
  [2, 6],
  [15, 18],
  [8, 10],
];
let arr = [];

function intervals(input) {}
console.log(intervals(inputs));

/*  input.sort((a, b) => a[0] - b[0]);

  if (input.length === 1) {
    return input;
  }
  arr.push(input[0]);
  for (let i of input) {
    let recent = arr[arr.length - 1][1];
    if (i[0] <= recent) {
      recent = Math.max(i[1], recent);
    } else {
      arr.push(i);
    }
  }
  return arr;*/
