// all objects have a prototype property
// let a = {};
// console.log(a);

let person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};
let john = {
  firstname: "John",
  lastname: "Doe",
};
let jane = {
  firstname: "Jane",
};
//don't do it in real development
john.__proto__ = person;
jane.__proto__ = person;
console.log(john.getFullName());
console.log(jane.getFullName());

console.log("---------------------");

//hasownproperty
for (let prop in jane) {
  console.log(prop);
}
//firstname
// lastname
// getFullName

console.log("---------------------");
for (let prop in jane) {
  if (jane.hasOwnProperty(prop)) console.log(prop);
}
//firstname