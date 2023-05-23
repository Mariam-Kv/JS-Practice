let person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi " + this.firstname;
  },
};
let john = Object.create(person);
john.firstname = "John";
console.log(john);
console.log(john.greet());
