//O(n*n)-> better than bubble sort


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort([44, -23, 0, 3, 1, 2, 1, 8]));
