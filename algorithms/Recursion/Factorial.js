// factorial

function factorial(num) {
  //базовый случай
  if (num === 1) {
    return 1;
  }
  //рекурсивный случай
  else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));
