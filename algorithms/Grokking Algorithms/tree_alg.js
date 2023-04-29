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
//my
// function sumOfTree(arr, sum = 0) {
//   let el = arr.shift();

//   if (!el) return sum;
//   sum += el.v;
//   if (el.c) arr = [...arr, ...el.c];

//   return sumOfTree(arr, sum);
// }
// console.log(sumOfTree(tree));


// iteration
function iterationOfTree(arr) {
  let sum = 0;
  let stack = [...arr];

  while (stack.length) {
    let current = stack.shift();
    sum += current.v;
    if (current.c) stack = [...stack, ...current.c];
  }
  return sum;
}
console.log(iterationOfTree(tree));
