// construct an object via a function

function Person(f, s) {
  console.log(this); //Object {  }
  this.firstname = f
  this.lastname = s;
  // if we don't return anything
  // return { d: 3 };
}
let p1 = new Person("m", "k");
let p2 = new Person("k", "k");
console.log(p1);
console.log(p2);
Person.prototype.full = function () {
  return this.firstname + " " + this.lastname;
};
console.log(p1 instanceof Person);
console.log(p2 instanceof Person);
console.log(p1.full());
console.log(p2.full());
