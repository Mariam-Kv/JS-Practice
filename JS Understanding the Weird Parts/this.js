// "use strict";
console.log(this); //window
console.log("----------------1");
function f() {
  console.log(this); //window
}
let g = function func() {
  console.log(this);
};
f();
console.log("----------------2");
g();
console.log("----------------3");
let obj = {
  name: "mari",
  log: function () {
    console.log(this); //object

    function l() {
      console.log(this); //window
    }
    l();
    let l2 = () => {
      console.log(this); //object
    };
    l2();
  },
};
obj.log();
console.log("----------------4");

