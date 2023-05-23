let n = new Number("3");
console.log(n);
console.log(typeof n);

let s = new String("dfg");
console.log(s);
console.log(typeof s);

// i want to add a feature to all numbers in JS
console.log("----------------------Number");
//with number we can't directly call our feature cause JS convert a numeber to a string
Number.prototype.multiplyBy2 = function () {
  return this * 2;
};

let num = 4;
console.log(num.multiplyBy2()); //8
console.log("----------------------------String");
//with string we can directly call our feature
String.prototype.ourLength = function () {
  return this.length;
};
console.log("num".ourLength()); //3

console.log("----------------------------dangerous aside");
//dangerous aside
let a = 3;
let b = new Number(3);
console.log(a == b);
console.log(a === b);
