function subset(arr1, arr2) {
  return arr2.every((e) => arr1.includes(e));
}
console.log(subset([1, 1, 1, 3], [1, 3, 3]));
