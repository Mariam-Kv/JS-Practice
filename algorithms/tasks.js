//your map function

let arr = [2, 7, 4, 64, -4, 23];
Array.prototype.myMap = function (callback) {
  let result = [];
  let thisArray = this;
  for (let i = 0; i < thisArray.length; i++) {
    result.push(callback(thisArray[i], i, thisArray));
  }
  return result;
};
console.log(arr.myMap((el, i, arr) => el + "$"));

// wow
let obj1 = { a: 1 };
let obj2 = obj1;
obj1.a = 5;
console.log(obj1 === obj2);
let a = 5;
let b = a;
a = 10;
console.log(b);

let obj = {};
console.log(obj.a?.b);
