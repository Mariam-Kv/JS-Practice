function get(obj, path) {
  let arr = path.split(".");
  if (obj === undefined) {
    return undefined;
  }
  if (arr.length === 1) {
    return obj[arr[0]];
  }
  obj = obj[arr[0]];
  return get(obj, arr.splice(1).join("."));
}
let obj = {
  a: {
    bbb: {
      c: "d",
    },
    e: "f",
  },
};
console.log(get(obj, "a.bbb"));
console.log(get(obj, "a.bbb.c"));
console.log(get(obj, "a.e"));
console.log(get(obj, "a.x.e"));
