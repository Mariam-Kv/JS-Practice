let arr1 = [4, 9, 5, 4,8];
let arr2 = [9, 4, 9, 8, 4, 8, 8];
let inter = [];
let obj = {};
function intersection(arr1, arr2) {
  for (let i in arr1) {
    obj[arr1[i]] ? (obj[arr1[i]] += 1) : (obj[arr1[i]] = 1);
  }
  for (let i in arr2) {
    if (obj[arr2[i]]) {
      obj[arr2[i]] -= 1;
      inter.push(arr2[i]);
    }
  }
  return inter;
}
console.log(intersection(arr1, arr2));
