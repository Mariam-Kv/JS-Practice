let data = { name: "Mari", age: 23 };
let arg = "My name is ";
function information(arg) {
  let n = arg + this.name;
  return n;
}
console.log(information.apply(data, [arg])); //array
console.log(information.call(data, arg)); //string
console.log(information.bind(data)(arg)); //a new function

// function currying

function multiply(a, b) {
  console.log(a);
  console.log(b);
  return a * b;
}

let m = multiply.bind(this, 4);//first parameter
console.log(m(2));//second parameter
