// function pigIt(str) {
//   str = str.split(" ");
//   let newStr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/\w+/g)) {
//       let first = str[i][0];
//       newStr.push(`${str[i].slice(1)}${first}ay`);
//     } else {
//       newStr.push(str[i]);
//     }
//   }
//   return newStr.join(" ");
// }

//more easy
function pigIt(str) {
  return str.replace(/\w+/g, (w) => w.slice(1) + w[0] + "ay");
}
console.log(pigIt("This is my string")); // hisTay siay ymay tringsay
