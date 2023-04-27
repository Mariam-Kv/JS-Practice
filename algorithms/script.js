"use sloopy"

let data = { name: "Mari", age: 23 };
function information(data) {
  console.log(this);
  return this;
}
console.log(information(data));
console.log(this);
