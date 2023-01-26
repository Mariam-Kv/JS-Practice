let array = [2, 4, 6, 27, 2, 4, 6];
let result = [];
function uniqueCharacter(nums) {
  //let newNums = Array.from(new Set(nums));
  let newNums = [...new Set(nums)];
  let allNum = nums.reduce((acc, item) => item + acc, 0);
  let unique = newNums.reduce((acc, item) => item + acc, 0) * 2;
  return unique - allNum;
}
console.log(uniqueCharacter(array));
// let str = "llaa";
// function uniqueCharacter(str) {
//   for (let i of str.split("")) {
//     if (str.indexOf(i) === str.lastIndexOf(i)) {
//       return str.indexOf(i);
//     }
//   }
//   return -1;
// }
// console.log(uniqueCharacter(str));
