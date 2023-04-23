//sum of array with recursion

function sumRecursion(arr) {
  if (arr.length < 1) {
    return 0;
  }

  return arr[0] + sumRecursion(arr.slice(1));
}

console.log(sumRecursion([1, 2, 3]));



//old
// function sumRecursion(arr) {
//   let total = 0;
//   if (arr.length === 0) {
//     return total;
//   } else {
//     total += arr[0];
//     arr.splice(0, 1);
//     return total + sumRecursion(arr);
//   }
// }
// console.log(sumRecursion([1, 2, 3]));
