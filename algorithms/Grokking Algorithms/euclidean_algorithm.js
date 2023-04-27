//iteration
function getGCD(a, b) {
  while (a != 0 && b != 0) {
    if (a > b) a = a % b;
    else if (a < b) b = b % a;
  }

  return Math.max(a, b);
}
console.log(getGCD(7, 4));
//recursion
function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
console.log(gcd(14, 9));
