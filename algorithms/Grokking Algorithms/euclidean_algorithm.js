//iteration
function euclidean(a, b) {
  while (a % b > 0) {
    let c = a % b;
    a = b;
    b = c;
  }

  return b;
}
console.log(euclidean(18, 30));

//recursion
function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}
console.log(gcd(14, 9));
//same
// function gcd(a, b) {
//   if (!a) {
//     return b;
//   }

//   return gcd(b % a, a);
// }
// console.log(gcd(7, 14));
