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
//

let city = "Лондон";
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
fetch("011.txt")
  .then((response) => response.text())
  .then((text) => {
    let array = [];
    let obj = { 1: [] };
    let data = text.split("\n");

    for (let i of data) {
      i = i.split(" ");
      if (i.includes(city)) {
        arr1.push(i);
      }
      array.push(i);
    }
    for (let i of array) {
      if (i.includes(city)) {
        arr2.push(i);
      }
    }

    for (let i of array) {
      for (let a of arr2) {
        if (i[0] === a[1] && a[1] !== i[1]) {
          a.push(i);
        }
      }
      console.log(arr2);
    }

    //console.log(array);
  });
