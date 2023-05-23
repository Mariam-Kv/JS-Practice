// o(n**2)
//let result = [];
// function SumofTwo(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// }
// console.log(SumofTwo([2, 7, 11, 15], 9));

//o(n)
let obj = {};
let result = [];
function SumofTwo(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let diff = num - arr[i];
    if (obj[diff] && obj[diff] > i) {
      result.push([obj[diff], i]);
    }
  }
  return result;
}
console.log(SumofTwo([2, 7, 4, 5], 9));
