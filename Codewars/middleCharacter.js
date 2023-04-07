function getMiddle(str) {
  let middle = Math.floor(str.length / 2);
  return str.length % 2 ? str[middle] : str.slice(middle - 1, middle + 1);
}

console.log(getMiddle("Mari"));
console.log(getMiddle("Maria"));


