let total = 0;
let counter = 0;
let alp = {};
fetch("06.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split("\n");
    console.log(data);
    for (let i of data) {
      let letter = i[5];
      console.log(alp[letter]);
      if (!alp[letter]) {
        alp[letter] = 1;
      } else {
        alp[letter] += 1;
      }
    }
    console.log(alp);
  });
//letter2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
