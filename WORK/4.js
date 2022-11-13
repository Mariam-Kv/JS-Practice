let num = 77;
let index = 0;
console.log(9);
fetch("011.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(", ");
    let data2 = data;
    for (let i in data) {
      if (Number(data[i]) <= 77) {
        for (let j in data2) {
          if (Number(data[j]) <= 77) {
            console.log(data[j]);
            if (Number(data[i]) + Number(data[j]) === 77 && i !== j && i < j) {
              console.log(i, j);
            } else {
              data2 = data2.slice(i);
            }
          }
        }
      }

      data2 = data;
    }
  });
/*
 if (data[i].split("").includes("-")) {
        console.log(data[i]);
      }
*/
