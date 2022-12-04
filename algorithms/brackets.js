let arr = "({[][]})";
let obj = {
  "}": "{",
  ")": "(",
  "]": "[",
};
let stack = [];
function brackets(arr) {
  for (let i of arr.split("")) {
    if (!obj[i]) {
      stack.push(i);
    }
    if (obj[i] === stack[stack.length - 1]) {
      stack.pop();
    }
  }

  return stack.length === 0;
}
console.log(brackets(arr));
