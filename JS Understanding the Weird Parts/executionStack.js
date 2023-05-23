let arr = [];
function a() {
  b();
  let m = 2;
  arr.push(m);
}

function b() {
  let k = 1;
  arr.push(k);
}

a();
let n = 3;
arr.push(n);
console.log(arr);
