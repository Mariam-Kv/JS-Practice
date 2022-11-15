let obj = {};
let bit = 65535;
fetch("08.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(/\r?\n/);
    for (let i of data) {
      let word = i.split(" -> ")[0];
      let letter = i.split(" -> ")[1];

      if (!obj[letter]) {
        obj[letter] = word;
      } else {
        obj[letter] += 1;
      }
    }
    for (let [k, v] of Object.entries(obj)) {
      v = v.split(" ");
      if (v.length === 2 && v[0] === "NOT") {
        let num = v[1];

        if (obj[num]) {
          obj[k] = bit - obj[num];
        } else {
          obj[k] = bit - num;
        }
      }
      if (v.includes("AND")) {
        let num = v[0];
        let num2 = v[2];

        if (obj[num] && obj[num2]) {
          obj[k] = obj[num] & obj[num2];
        }
        if (obj[num] !== undefined && obj[num2] === undefined) {
          obj[k] = obj[num] & num2;
        }
        if (obj[num] === undefined && obj[num2] !== undefined) {
          obj[k] = num & obj[num2];
        }
      }
      if (v.includes("OR")) {
        let num = v[0];
        let num2 = v[2];

        if (obj[num] && obj[num2]) {
          obj[k] = obj[num] | obj[num2];
        }
        if (obj[num] !== undefined && obj[num2] === undefined) {
          obj[k] = obj[num] | num2;
        }
        if (obj[num] === undefined && obj[num2] !== undefined) {
          obj[k] = num | obj[num2];
        }
      }
      if (v.includes("LSHIFT")) {
        let num = v[0];
        let num2 = v[2];

        if (obj[num] && obj[num2]) {
          obj[k] = obj[num] << obj[num2];
        }
        if (obj[num] !== undefined && obj[num2] === undefined) {
          obj[k] = obj[num] << num2;
        }
        if (obj[num] === undefined && obj[num2] !== undefined) {
          obj[k] = num << obj[num2];
        }
      }
      if (v.includes("RSHIFT")) {
        let num = v[0];
        let num2 = v[2];

        if (obj[num] && obj[num2]) {
          obj[k] = obj[num] >> obj[num2];
        }
        if (obj[num] !== undefined && obj[num2] === undefined) {
          obj[k] = obj[num] >> num2;
        }
        if (obj[num] === undefined && obj[num2] !== undefined) {
          obj[k] = num >> obj[num2];
        }
      }
    }
    console.log(obj);
  });
