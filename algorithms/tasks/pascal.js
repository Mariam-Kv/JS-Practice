function pascal(num) {
  let f = [1];
  let curr = [1, 1];
  let res = [];
  let totalRes = [f, curr];
  for (let i = 0; i < num - 2; i++) {
    for (let j = 0; j < curr.length - 1; j++) {
      let sum = curr[j] + curr[j + 1];

      res.push(sum);
    }

    totalRes.push([1, ...res, 1]);
    curr = [1, ...res, 1];
    res = [];
  }
  totalRes.forEach((el) => console.log(el));
}
pascal(7);
