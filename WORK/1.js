let total = 0;
fetch("01.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(/\r?\n/);
    console.log(data);
    for (let i of data) {
      if (i[0] === "+") {
        total += Number(i.slice(1));
      }
      if (i[0] === "-") {
        total -= Number(i.slice(1));
      }
    }
    console.log(total);
  });
