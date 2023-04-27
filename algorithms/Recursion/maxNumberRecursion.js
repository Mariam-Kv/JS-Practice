//max number in array with recursion

function maxRecursion(arr, max = arr[0]) {
  if (arr.length === 0) return max;

  if (max < arr[1]) max = arr[1];

  return maxRecursion(arr.slice(1), max);
}
console.log(maxRecursion([0, 1, 2, 3, 4, 2, -41,5]));
