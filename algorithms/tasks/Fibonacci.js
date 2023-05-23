let index = 10;
function Fibonacci(index) {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= index; i++) {
    let c = a + b;
    [a, b] = [b, c];
    //[a, b] = [b, a+b];
  }
  return b;
}

console.log(Fibonacci(index));
