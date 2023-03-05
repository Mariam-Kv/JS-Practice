function subset(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return false;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false;
    }
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
  return true;
}
console.log(subset([1, 1, 1, 3], [1, 3, 3]));
