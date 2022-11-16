let str = "llaa";
function uniqueCharacter(str) {
  for (let i of str.split("")) {
    if (str.indexOf(i) === str.lastIndexOf(i)) {
      return str.indexOf(i);
    }
  }
  return -1;
}
console.log(uniqueCharacter(str));
