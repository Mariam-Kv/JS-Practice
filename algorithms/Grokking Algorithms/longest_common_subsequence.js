function createMatrix(row, column) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = Array(column).fill(0);
  }
  return matrix;
}

function longestSubstring(str1, str2) {
  let matrix = createMatrix(str1.length, str2.length);
  let indexOfSubstring = 0;
  let lengthOfSubstring = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        matrix[i][j] = i && j > 0 ? matrix[i - 1][j - 1] + 1 : 1;
        if (matrix[i][j] >= lengthOfSubstring) {
          lengthOfSubstring = matrix[i][j];
          indexOfSubstring = i + 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  return str1.slice(indexOfSubstring - lengthOfSubstring, indexOfSubstring);
}
// console.log(longestSubstring("vista", "hish"));
// console.log(longestSubstring("fish", "hish"));
// console.log(longestSubstring("google", "hiddgfdgooglesh"));
console.log(longestSubstring("fish", "fosh"));
function longestCommonSubsequence(str1, str2) {
  let matrix = createMatrix(str1.length, str2.length);

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        matrix[i][j] = (i && j) > 0 ? matrix[i - 1][j - 1] + 1 : 1;
      } else {
        matrix[i][j] = Math.max(
          i > 0 ? matrix[i - 1][j] : 0,
          j > 0 ? matrix[i][j - 1] : 0
        );
      }
    }
  }
  return matrix[str1.length - 1][str2.length - 1];
}
console.log(longestCommonSubsequence("fish", "fosh"));
console.log(longestCommonSubsequence("fort", "fosh"));
console.log(longestCommonSubsequence("forttttttttt", "fosht"));
console.log(longestCommonSubsequence("fort", "foshoooooooooooooooo"));
