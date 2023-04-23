let count1 = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      count1++;
      if (arr[i] > arr[j]) {
        let old = arr[i];

        arr[i] = arr[j];
        arr[j] = old;
      }
    }
  }
  return [arr, count1];
}
console.log(selectionSort([3, 45, 1, 64, 13, 23, 64, 121]));
let count2 = 0;
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      count2 += 1;
    }
  }
  return [arr, count2];
}

console.log(bubbleSort([3, 45, 1, 64, 13, 23, 64, 121]));

let count3 = 0;
function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let middle = arr[Math.floor(arr.length / 2)];
  let less = [];
  let more = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      less.push(arr[i]);
    }
    if (arr[i] > middle) {
      more.push(arr[i]);
    }
    count3++;
  }

  return [...quickSort(less), middle, ...quickSort(more)];
}
console.log(quickSort([3, 45, 1, 6, 13, 23, 64, 121]));
console.log(count3);
