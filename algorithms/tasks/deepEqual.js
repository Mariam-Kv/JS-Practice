function deepEqual(first, second) {
  first = JSON.stringify(first);
  second = JSON.stringify(second);
  return first === second;
}
let obj1 = { a: 3, b: { c: 55 } };
let obj2 = { a: 3, b: { c: 55 } };
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(null, null));
console.log(deepEqual());
