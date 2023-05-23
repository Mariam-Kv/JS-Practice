let result = [];

function sumOfThree(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] < num) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === num) {
            result.push([i, j, k]);
          }
        }
      }
    }
  }
  return result;
}
console.log(sumOfThree([2, 6, 1, 11, -4, 15], 9));

// let result = [];

// function sumOfThree(arr, num) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] < num) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//           if (arr[i] + arr[j] + arr[k] === num) {
//             result.push([arr[i], arr[j], arr[k]]);
//           }
//         }
//       }
//     }
//   }
//   return result;
// }
// console.log(sumOfThree([2, 6, 1, 11, -4, 15], 9));
