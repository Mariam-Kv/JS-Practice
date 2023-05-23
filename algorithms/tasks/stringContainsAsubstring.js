let string = "crossroad";
let subString = "road";
// insludes
console.log(string.includes(subString));
// indexOf
console.log(string.indexOf(subString) !== -1);
//RegExp.test()
let regexp = /Road/i;
console.log(regexp.test(string));
