const input = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gbp", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 10000],
  ["usd", "sell", 25000],
];
let obj = {};

function currency(data) {
  for (let i of data) {
    let [currency, type, amount] = i;
    if (obj[currency]) {
      type === "buy"
        ? (obj[currency][0] += amount)
        : (obj[currency][1] += amount);
    } else {
      type === "buy"
        ? (obj[currency] = [amount, 0])
        : (obj[currency] = [0, amount]);
    }
  }
  return obj;
}

console.log(currency(input));
