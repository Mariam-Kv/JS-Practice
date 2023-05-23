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

  let result = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  return result;
}
console.log(ClassNames(arr));
