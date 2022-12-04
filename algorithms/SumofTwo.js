let result = [];
function SumofTwo(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}
console.log(SumofTwo([2, 7, 11, 15], 9));
