let arr = [
  "header",
  "link",
  "menu-item",
  "footer",
  "menu",
  "link",
  "menu",
  "link",
  "menu-item",
  "menu-item",
  "link",
];
let obj = {};
let result = [];
function ClassNames(arr) {
  for (let i of arr) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  let newArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let i of newArr) {
    result.push(i[0]);
  }
  return result;
}
console.log(ClassNames(arr));
