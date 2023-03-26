//max number in array with recursion

function maxRecursion(arr, max = 0) {
  if (arr.length === 0) {
    return max;
  } else {
    if (max < arr[0]) {
      max = arr[0];
    }
    arr.splice(0, 1);
    return maxRecursion(arr, max);
  }
}
console.log(maxRecursion([55, 2, 72, 3, 16, 62, 5676, 563, 45]));
