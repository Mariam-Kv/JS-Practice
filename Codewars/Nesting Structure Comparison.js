function valueArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      // we don't return - второй раз не будет вызываться!
      valueArr(arr[i]);
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}
function same(arr1, arr2) {
  return JSON.stringify(valueArr(arr1)) === JSON.stringify(valueArr(arr2));
}

console.log(same([[3, 5], 4], [[2, 2], 2]));

