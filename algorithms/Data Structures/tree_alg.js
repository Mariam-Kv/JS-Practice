const tree = [
  {
    v: 5,
    c: [
      { v: 10, c: [{ v: 11 }] },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];
function recursive(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].v;
    if (arr[i].c) {
      sum += recursive(arr[i].c);
    }
  }
  return sum;
}
console.log(recursive(tree));