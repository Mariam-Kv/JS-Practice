//O(n*log(n))
//сортировка Хоара
// разделяй и властвуй  / merge sort
let count = 0;
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let less = [];
  let more = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      more.push(arr[i]);
    }
    count += 1;
  }
  return [...quickSort(less), pivot, ...quickSort(more)];
}
console.log(quickSort([3, 1, 65, 34, 1, 12, 9, 1]));
