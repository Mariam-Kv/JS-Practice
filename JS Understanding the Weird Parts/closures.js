// function count(n) {
//   return function f(n2) {
//     return 2 * n + n2;
//   };
// }

// console.log(count(3)(4));

function buildClosureVar() {
  var arr = [];
  //var rewrites itself
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        console.log(j);
      })(i)
    );
  }
  return arr;
}
let f = buildClosureVar();
// f[0]();
// f[1]();
// f[2]();

console.log("-------------------");
function buildClosureLet() {
  var arr = [];
  //var doesn't rewrite itself, it creates a new location in memory
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
let f2 = buildClosureLet();
f2[0]();
f2[1]();
f2[2]();

console.log("-------------------");
  function makeGreeting(lang) {
    return function (f, s) {
      if (lang === "en") {
        console.log("Hello " + f + s);
      }
      if (lang === "ru") {
        console.log("Привет " + f + s);
      }
    };
  }
  makeGreeting("en")("m", "k");
  makeGreeting("ru")("м", "к");
