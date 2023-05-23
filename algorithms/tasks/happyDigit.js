let num = 26662344366;
let obj = {};
function happyDigit(digits) {
  let str = String(digits).split("");
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let result = 0;
  for (let key in obj) {
    if (obj[key] == key) {
      result = Math.max(result, key);
    }
  }
  return result;
}
console.log(happyDigit(num));
//   let num = Math.max(
//     ...Object.entries(obj)
//       .filter((el) => el[0] == el[1])
//       .map((el) => el[1])
//   );
//   return num;
