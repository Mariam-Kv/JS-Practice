

console.log("90");

function matrix90(matrix) {
  let fRow = [];
  let sRow = [];
  let thRow = [];
  let j = 0;
  for (let i = matrix.length - 1; i >= 0; i--) {
    fRow.push(matrix[i][j]);
    sRow.push(matrix[i][j + 1]);
    thRow.push(matrix[i][j + 2]);
  }

  return [fRow, sRow, thRow];
}

console.log(
  matrix90([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log("180");

function matrix180(matrix) {
  return matrix90(matrix90(matrix));
}

console.log(
  matrix180([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log("270");
function matrix270(matrix) {
  return matrix180(matrix90(matrix));
}

console.log(
  matrix270([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
