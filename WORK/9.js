let arr = [];
let counter = 0;
fetch("09.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(/\r?\n/);

    for (let i of data) {
      i = i.split(" ");
      arr.push(i);
      for (let j of arr) {
        if (i[0] === j[1] && j !== i) {
          j = j.push(i);
        }
      }
    }
    console.log(arr);
  });
/*Arbre: [],
  Faerun: [],
  Norrath: [],
  Snowdin: [],
  Tambi: [],
  Tristram: [],
   for (let [k, v] of Object.entries(obj)) {
        console.log(v);
        if (k === i[0]) {
          if (obj[k] === []) {
            obj[k] = i;
          } else {
            obj[k] == v.push(i);
          }
        }
      } console.log(data);
    for (let i of data) {
      i = i.split(" ");
      if (i[0] === "Лондон") {
        AlphaCentauri.push(i);
      }
      for (let item of AlphaCentauri) {
        if (item[1] === i[0]) {
        }
      }
    }*/
