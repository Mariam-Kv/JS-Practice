function greedyThief(items, n) {
  let dynamic = items
    .map((el) => {
      return {
        el: el.weight,
      };
    })
    .sort((a, b) => a - b);
  items.map((item) => {
    if (item < n) {
      d;
    }
  });

  return dynamic;
}
console.log(
  greedyThief(
    [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 6, price: 5 },
      { weight: 5, price: 4 },
      { weight: 4, price: 6 },
    ],
    10
  )
);
