//O(n*log(n))
//сортировка Хоара
// разделяй и властвуй
let count=0;
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let less = [];
  let more = [];
  let middle = arr[Math.floor(arr.length / 2)];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      less.push(arr[i]);
    }
    if (arr[i] > middle) {
      more.push(arr[i]);
    }
    count+=1
  }
  return [...quickSort(less), middle, ...quickSort(more)];
}
console.log(quickSort([3, 65, 34, 1, 12, 9]));
