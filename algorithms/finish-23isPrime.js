let arr = [];
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
function isPrimeHrad(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  return arr;
}
console.log(isPrimeHrad(34));
