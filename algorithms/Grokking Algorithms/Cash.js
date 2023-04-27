function CashFunction(fn) {
  let cash = {};

  return function (n) {
    if (cash[n]) {
      console.log("cash");
      return cash[n];
    }
    let result = fn(n);
    console.log("browser");
    cash[n] = result;
    return result;
  };
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
  while (n !== 1) {
    sum *= n;
    n--;
  }
  return sum;
}
let cashFactorial = CashFunction(factorial);
console.log(cashFactorial(5));
console.log(cashFactorial(5));
console.log(cashFactorial(5));
