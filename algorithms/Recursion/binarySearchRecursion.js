

function binary(arr, target) {
  let middle = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[middle] !== target) return false;

  if (arr[middle] === target) return true;

  if (arr[middle] < target) {
    return binary(arr.slice(middle + 1), target);
  }
  if (arr[middle] > target) {
    return binary(arr.slice(0, middle), target);
  }
}

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
