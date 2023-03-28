function CashFunction(fn) {
  return fn(5);
}

// recursion
//function factorial(n) {
//   if (n < 2) {
//     return n;
//   }
//   return n * factorial(n - 1);
// }

// loop
function factorial(n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n -= 1;
  }
  return sum;
}
console.log(CashFunction(factorial));
