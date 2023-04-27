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
// recursion
function sumOfTree(arr) {
  let sum = 0;

  arr.map((el) => {
    if (el.v) {
      sum += el.v;
    }
    if (el.c) {
      sum += sumOfTree(el.c);
    }
  });
  return sum;
}
console.log(sumOfTree(tree));

// iteration
function iterationOfTree(arr) {
  let sum = 0;
  let stack = [];
  arr.forEach((node) => stack.push(node));
  while (stack.length > 0) {
    let current = stack.shift();
    sum += current.v;
    if (current.c) {
      current.c.forEach((el) => {
        stack.push(el);
      });
    }
  }
  return sum;
}
console.log(iterationOfTree(tree));
