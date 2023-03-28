//O(n*n) -> worse than selection sort
let count = 0;
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      count+=1
    }
  }
  return arr;
}

console.log(bubbleSort([4, 1, 6,  1, 13]));