let res = {};
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]]) {
      res[arr[i]] += 1;
    } else {
      res[arr[i]] = 1;
    }
  }
  let v = Object.entries(res).map((el) => el[1]);
  return Math.max(v);
}
console.log(flatten(["a", "b", "a", "c"]));
