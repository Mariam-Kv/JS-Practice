let total = 0;
let counter = 0;
fetch("04.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(", ");
    console.log(data);
  });
