//O(1/2*n*n)->O(n*n) better than bubble sort

//самый не эффективный
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      count++;
      if (arr[i] > arr[j]) {
        let old = arr[i];

        arr[i] = arr[j];
        arr[j] = old;
      }
    }
  }
  return [arr, count];
}
console.log(selectionSort([3, 45, 1, 64, 13, 23, 64, 121]));
