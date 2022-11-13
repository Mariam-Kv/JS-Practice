let counter = 0;
let obj = {};
fetch("05.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(/\r?\n/);
    for (let i in data) {
      for (let k of data[i].split(" ")) {
        let word = k.split("").sort();

        if (!obj[word]) {
          obj[word] = 1;
        } else {
          obj[word] += 1;
        }
      }
      console.log(Object.values(obj));
      if (Object.values(obj).every((el) => el === 1)) {
        counter += 1;
      }
      obj = {};
    }
    console.log(counter);
  });
