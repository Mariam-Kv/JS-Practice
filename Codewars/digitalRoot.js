function digitalRoot(n) {
  n = String(n);
  if (n.length === 1) {
    return +n;
  }
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += +n[i];
  }
  return digitalRoot(total);
}
console.log(digitalRoot(244));

// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }
// console.log(digital_root(942));
