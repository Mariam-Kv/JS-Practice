let way_ = [];
let line = 0;
let house = 0;
let map_ = { 1: 1 };
let xx = 1;
let yy = 1;
let map = [];
fetch("011.txt")
  .then((response) => response.text())
  .then((text) => {
    let way = text.split("");

    for (let i in way) {
      if (way[i] === ">") {
        xx += 1;
        let mapp = String(yy) + String(xx);
        map.push(String(mapp));
      }
      if (way[i] === "<") {
        xx -= 1;
        let mapp = String(yy) + String(xx);
        map.push(String(mapp));
      }
      if (way[i] === "^") {
        yy += 1;
        let mapp = String(yy) + String(xx);
        map.push(String(mapp));
      }
      if (way[i] === "v") {
        yy -= 1;
        let mapp = String(yy) + String(xx);
        map.push(String(mapp));
      }
    }
    let origin = [];
    for (let i in map) {
      if (origin.includes(map[i]) === false) {
        origin.push(map[i]);
      }
    }
    console.log(origin.length);
  });
