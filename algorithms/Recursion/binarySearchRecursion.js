function binary(arr, target) {
  let start = 0;
  let end = arr.length ;
  let middle = Math.floor((start + end) / 2);

  if (arr.length === 1 && arr[0] !== target) {
    return false;
  }
  if (arr[middle] === target) {
    return true;
  }

  if (arr[middle] < target) {
    return binary(arr.splice(middle, arr.length), target);
  }
  if (arr[middle] > target) {
    return binary(arr.splice(0, middle), target);
  }
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
