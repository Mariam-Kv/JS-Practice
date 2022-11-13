let x = "1113222113";
let index = 0;
let counter = 0;
let str = "";
x = x.split("");
let step = 0;
while (step <= 40) {
  for (let i of x) {
    if (index === 0 && x[index] !== x[index + 1]) {
      str += `1${x[index]}`;
      index += 1;
    }
    if (index !== 0 && x[index - 1] !== x[index] && x[index] !== x[index + 1]) {
      str += `1${x[index]}`;
      index += 1;
      counter = 0;
    }
    if (x[index] === x[index + 1]) {
      counter += 1;
      index += 1;
      if (x[index] !== x[index + 1]) {
        counter += 1;
        str += `${counter}${x[index]}`;
        counter = 0;
        index += 1;
      }
    }
  }
  console.log(str.split(""));
  index = 0;
  counter = 0;
  step += 1;
  x = str.split("");
  str = "";
}
