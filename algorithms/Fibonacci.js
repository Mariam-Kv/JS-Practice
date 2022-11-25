let index = 10;
function Fibonacci(index) {
  let a = 0;
  let b = 1;
  let arr = [a, b];
  while (arr.length !== index) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
    //for let i =3 ////i++
    //[a,b]=[b,a+b]
  }
  return arr[arr.length - 1];
}
console.log(Fibonacci(index));
