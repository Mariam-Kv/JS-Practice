let total = 0;
let counter = 0;
fetch("02.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split("");
    console.log(data);

    for (let i of data) {
      if (i === "(" && total !== -1) {
        counter += 1;
        total += 1;
      }
      if (i === ")" && total !== -1) {
        counter += 1;
        total -= 1;
      }
      if (total === -1) {
        console.log(counter);
      }
    }
  });
