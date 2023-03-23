function weight(arr) {
  let obj = {};
  arr = arr.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += +arr[i][j];
    }
    obj[arr[i]] = sum;
    sum = 0;
  }
  let o = Object.entries(obj).sort((a, b) => {
    if (a[0] === b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  return o;
}
console.log(weight("103 123 4444 99 99 2000"));
