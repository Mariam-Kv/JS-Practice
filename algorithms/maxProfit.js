let total = 0;
function maxProfit(stocks) {
  for (let i in stocks) {
    if (stocks[i] > stocks[i - 1]) {
      total += stocks[i] - stocks[i - 1];
    }
  }
  return total;
}
console.log(maxProfit([7, 1,5,3,6,4]));
