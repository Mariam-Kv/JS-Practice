let persone = {
  name: "Mari",
  age: 23,
  get userAge() {
    return this.age;
  },
  set userAge(value) {
    this.age = value;
  },
};

console.log((persone.userAge = 30)); // 30
