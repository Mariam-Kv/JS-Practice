const arr1 = [1, 1, 2];

const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

let removeDuplicates = function (nums) {
  for (let i = 0; nums.length > i; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums;
};
console.log(removeDuplicates(arr2));
