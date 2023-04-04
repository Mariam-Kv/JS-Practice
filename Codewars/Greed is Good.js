let greed = {
  111: 1000,
  666: 600,
  555: 500,
  444: 400,
  333: 300,
  222: 200,
  1: 100,
  5: 50,
};
function score(dice) {

  let total = 0;
  let obj = {};
  for (let i = 0; i < dice.length; i++) {
    if (obj[dice[i]]) {
      obj[dice[i]] += `${dice[i]}`;
    } else {
      obj[dice[i]] = `${dice[i]}`;
    }
  }
  for (let i in obj) {
    if (obj[i].length > 3) {
      if (greed[obj[i].slice(0, 3)]) {
        total += greed[obj[i].slice(0, 3)];
      }

      let f = obj[i].slice(3).split("");

      for (let i = 0; i < f.length; i++) {
        if (greed[f[i]]) {
          total += greed[f[i]];
        }
      }
    }
    if (obj[i].length <= 3)
      if (greed[obj[i]]) {
        total += greed[obj[i]];
      } else {
        let f = obj[i].split("");
        for (let i = 0; i < f.length; i++) {
          if (greed[f[i]]) {
            total += greed[f[i]];
          }
        }
      }
  }
  return total;
}
console.log(score([1, 1, 1, 5, 4]));
