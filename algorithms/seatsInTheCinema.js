let input1 = [1, 0, 0, 0, 1, 0, 1];
let input2 = [0, 0, 0, 1, 0];
let input3 = [1, 1, 0, 0, 0, 1, 0];
let maxDistToClosest = function (seats) {
  //in the middle
  let max = 0;
  let count = 0;
  let i = 0;
  if (seats[0] === 0) {
    while (seats[i] === 0) {
      i++;
      count++;
    }
    max = Math.max(max, count);
  }
  for (i; i < seats.length; i++) {
    if (seats.length - 1 === i && seats[i] === 0) {
      count++;
      max = Math.max(max, count);
      break;
    } else if (seats[i] === 1) {
      count = 0;
    } else {
      count++;
      max = Math.max(max, Math.ceil(count / 2));
    }
  }

  return max;
};
console.log(maxDistToClosest(input3));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// let count = 0;
// let i = 0;
// if (seats[i] === 0) {
//   while (seats[i] === 0) {
//     i++;
//     count++;
//     max = Math.max(max, count);
//   }
// }
// for (let i = 0; i < seats.length; i++) {
//   let current = seats[i];

//   if (current === 0 && i === seats.length - 1) {
//     count++;
//     max = Math.max(max, count);
//     break;
//   }

//   if (current === 1) {
//     count = 0;
//   } else {
//     count++;
//     max = Math.max(max, Math.ceil(count / 2));
//   }
// }
