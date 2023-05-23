b(); //called b
console.log(a); //undefined
var a = 46543;

function b() {
  console.log("called b");
}
let f;
console.log(f);

console.log("----------------------------------");
greet(); //hi
//function declaration
function greet() {
  console.log("hi");
}
console.log(func); //undefined
// func(); // func is not a function //it's undefined
//function expression
var func = function greet() {
  console.log("hello");
};
func();
console.log("----------------------------------");