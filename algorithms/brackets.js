let arr = "()";
let stack = [];
function valid(arr) {
  let brackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  if (arr.length % 2 === 1) {
    return false;
  }
  for (let i in arr.split("")) {
    if (arr[i] === "{" || arr[i] === "[" || arr[i] === "(") {
      stack.push(arr[i]);
    } else if (brackets[arr[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.length === 0;
}
console.log(valid(arr));
