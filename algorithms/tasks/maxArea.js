let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let area = [];
let maxValue = 0;
function maxArea(columns) {
  for (let i = 0; i < columns.length; i++) {
    for (let j = 1; j < columns.length; j++) {
      let value = Math.min(columns[i], columns[j]) * (j - i);
      if (value > maxValue) {
        maxValue = value;
      }
    }
  }
  return maxValue;
}
console.log(maxArea(arr));
