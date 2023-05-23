var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
  this.name = name;
}

var e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);
console.log(e instanceof Object);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function () {};
console.log(typeof z);
console.log(z instanceof Function);
console.log(z instanceof Object);