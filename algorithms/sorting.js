function sorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}
console.log(sorting([3, 52, 1, 34, 21, 54, 252, 5]));
// function sortRecursion(arr) {
//   let start = arr[0];
//   let less = [];
//   let more = [];
//   if (arr.length < 2) {
//     return arr;
//   }
//   for (let i = 1; i < arr.length; i++) {
//     if (start > arr[i]) {
//       less.push(arr[i]);
//     }
//     if (start < arr[i]) {
//       more.push(arr[i]);
//     }
//   }

//   return [...sortRecursion(less), start, ...sortRecursion(more)];
// }
// console.log(sortRecursion([4, 76, 1, -2, 45, 25, 18, 35]));