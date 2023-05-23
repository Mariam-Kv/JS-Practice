//if array has only brackets
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
//if array has more  elements than brackets
let start = "{[(";
let end = "}])";
let stack2 = [];
function brackets2(str) {
  for (let i of str.split("")) {
    if (start.includes(i) && !obj[i]) {
      stack2.push(i);
    }
    if (end.includes(i) && obj[i] === stack2[stack2.length - 1]) {
      stack2.pop(i);
    }
  }
  return stack2;
}
console.log(brackets2("(2+3)}}}})+(4)"));
