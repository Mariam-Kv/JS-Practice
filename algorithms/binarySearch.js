let array = [-1, 0, 3, 5, 7, 8, 9, 12];
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.round((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 8));
