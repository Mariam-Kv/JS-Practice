let index = 10;
function Fibonacci(index) {
  let a = 0;
  let b = 1;
  let arr = [a, b];
  while (arr.length !== index) {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  return arr;
}
console.log(Fibonacci(index));
