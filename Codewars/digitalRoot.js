function digitalRoot(n) {
  n = "" + n;
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
