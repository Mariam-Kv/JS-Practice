// sorting array with recursion

function sortRecursion(arr) {
  let start = arr[0];
  let less = [];
  let more = [];
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++) {
    if (start > arr[i]) {
      less.push(arr[i]);
    }
    if (start < arr[i]) {
      more.push(arr[i]);
    }
  }

  return [...sortRecursion(less), start, ...sortRecursion(more)];
}
console.log(sortRecursion([4, 76, 1, -2, 45, 25, 18, 35]));
