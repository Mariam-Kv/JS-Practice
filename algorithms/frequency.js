let res = {};
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]]) {
      res[arr[i]] += 1;
    } else {
      res[arr[i]] = 1;
    }
  }
  let v = Object.entries(res).sort((el, el2) => el2[1] - el[1]);
  return v[0][0];
}
console.log(flatten(["a", "b", "d", "w", "w", "c", "c"]));
