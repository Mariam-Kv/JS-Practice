export default function int() {
  // console.log("String" > "StrinG");
  // console.log("a" > "b");
  // let data = {
  //   name: "Mari",
  // };
  // let reg = /\w+/g;
  // let str = "fd!";
  // let res = str.match(reg);
  // console.log(res);

  let obj = {
    name: "Test",
    [{ 2: 4 }]: 22,
  };
  // let id = Symbol("id");

  // obj[id] = 1;
  // Object.freeze(obj);
  // obj.age = 3;
  // let arr = [45];
  // for (let key in obj) {
  //   console.log(obj[key]);
  // }
  // console.log(obj.hasOwnProperty("name"));
  // console.log(obj);
  // let map = new Map();
  // map.set("age", 23);

  // console.log(map.keys()[0]);
  // let arr = [3, 4, 1, 5, 2, 4, 2, 2, 2, 2];
  //find return first value(not index) that corresponds to condition
  // console.log(arr.find((el) => el>3));
  // console.log(Number.MAX_SAFE_INTEGER);
  // let b = BigInt(35);
  // console.log(b + 34);
  // ("use strict");
  // let user = { name: "Ivan" };
  // let map = new WeakMap();
  // map.set(user, "data");
  // user = null;
  // console.log(map);
  // function User() {
  //   this.name = "dsd";
  // }
  // User.prototype.hello = function () {
  //   return "312" + this.name;
  // };
  // let t = new User();
  // console.log(t.hello());
  // function incrementString(strng) {
  //   let regN = /\d/g;
  //   let regL = /[a-zA-Z]+/g;
  //   let incrementedString = "";
  //   let litters = strng.match(regL)?.join("");

  //   let numbers = strng
  //     .split("")
  //     ?.splice(strng.lastIndexOf(litters[litters.length - 1]))
  //     ?.join("")
  //     ?.match(regN)
  //     ?.join("");

  //   if (numbers) {
  //     incrementedString = `${litters ? litters : ""}${+numbers + 1}`;
  //   } else {
  //     incrementedString = `${litters ? litters : ""}1`;
  //   }
  //   return incrementedString;
  // }
  // console.log(incrementString("fo99obar1"));
  // console.log(000 + 3);
  let a = 3;
  console.log(a);
}
