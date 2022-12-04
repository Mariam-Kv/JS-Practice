/*let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };
let arr = {};
function iWantToGet(money, limits) {
  for (let [key, value] of Object.entries(limits).sort((a, b) => b[0] - a[0])) {
    while (money >= key && value !== 0) {
      money -= key;
      value -= 1;
      if (arr[key]) {
        arr[key] += 1;
      } else {
        arr[key] = 1;
      }
    }
  }
  if (money === 0) {
    return arr;
  } else {
    return [];
  }
}
console.log(iWantToGet(60, limits));
*/
