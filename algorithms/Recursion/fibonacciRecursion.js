//1 1 2 3 5 8 13 21

function f(n) {
  if (n <=2){
    return 1;
  }
  return f(n - 1) + f(n - 2);
}
console.log(f(6));
