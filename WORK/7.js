let counter = 0;
fetch("07.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(/\r?\n/);
    console.log(data);
    for (let i in data) {
      if (data[i].split(" ")[0] === "turn") {
        data[i] = data[i].split(" ").slice(1);
      } else {
        data[i] = data[i].split(" ");
      }

      if (data[i][0] === "toggle") {
        let item1 = data[i][1].split(",");
        let item3 = data[i][3].split(",");

        let x = Number(item3[0]) - Number(item1[0]);
        let y = Number(item3[1]) - Number(item1[1]);
        let total = x * y * 2;

        counter += total;
      }
      if (data[i][0] === "off") {
        let item1 = data[i][1].split(",");
        let item3 = data[i][3].split(",");

        let x = Number(item3[0]) - Number(item1[0]);
        let y = Number(item3[1]) - Number(item1[1]);
        let total = x * y;

        if (counter - total >= 0) {
          counter -= total;
        }
      }
      if (data[i][0] === "on") {
        let item1 = data[i][1].split(",");
        let item3 = data[i][3].split(",");

        let x = Number(item3[0]) - Number(item1[0]);
        let y = Number(item3[1]) - Number(item1[1]);
        let total = x * y;

        counter += total;
      }
    }
    console.log(counter);
    console.log(data);
  });
