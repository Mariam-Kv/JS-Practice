//recursion
let array = [1, [[[[3], 4]], 5]];
let res = [];
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(flatten(array));

//flat
console.log(array.flat(4));
