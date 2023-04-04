let parents = {
  name: "Parents",
  age: 65,
  money: Infinity,
  hello: function () {
    return `${this.name} hello`;
  },
};
let me = {
  name: "Mari",
  age: 23,
};
// старый формат
// me.__proto__ = parents;
//fisrt - child / second - parents

// Object.setPrototypeOf(me, parents);
// console.log(me.money); //Infinity
// console.log(me.hello());
// let child = Object.create(parents);
// console.log(child.age);
 console.log(Object.getPrototypeOf(me));

