const arr1 = [1, 1, 2];

const arr2 = [0, 0, 1, 6, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
//1
// let removeDuplicates = function (nums) {
//   return [... new Set(nums)]
// };

//2
// let removeDuplicates = function (nums) {
//   return nums.filter((item, index, arr) => index === arr.indexOf(item));
// };

//3
let removeDuplicates = function (nums) {
  let arr = [];
  nums.map((el) => (arr.includes(el) ? arr : arr.push(el)));
  return arr;
};
console.log(removeDuplicates(arr2));
