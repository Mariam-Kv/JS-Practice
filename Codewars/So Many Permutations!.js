function permutations(str) {
  var shuffled = str
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return shuffled;
}
console.log(permutations("sfgdfndsa"));
