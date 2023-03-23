// let str = "red.big.apple";
// let obj = { red: { big: { apple: "🍎" } } };
// function get(str, obj) {
//   str = str.split(".");
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj = obj[str[i]];
//     } else {
//       return;
//     }
//   }
//   return obj;
// }
// console.log(get(str, [3]));
// function cleanString(str, repeats) {
//   let obj = {};
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] && obj[str[i]] < repeats) {
//       obj[str[i]] += 1;
//     }
//     if (!obj[str[i]]) {
//       obj[str[i]] = 1;
//     }
//     if (obj[str[i]] > repeats) {
//       return obj;
//     }
//   }
//   for (let i = 0; i < repeats; i++) {
//     res.push(...Object.keys(obj));
//   }
//   return res.join("");
// }
// console.log(cleanString("aabbcc", 1));

// console.log(cleanString("abcabcabc", 2));
