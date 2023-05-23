/*/function commonPrefix(prefix, arr) {
  let str = "";
  for (let i = 0, j = 0; i < prefix.length, j < arr.length; i++, j++) {
    if (prefix[i] !== arr[j]) {
      break;
    }
    str += prefix[i];
  }
  return str;
}
function theLongestPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix = commonPrefix(prefix, arr[i]);
  }
  return prefix;
}
console.log(theLongestPrefix(["abc123", "abcad123", "abcde123", "abcdef123"]));
*/
//optimal option
function theLongestPrefix(arr) {
  arr.sort();
  let str = "";
  for (
    let i = 0, j = 0;
    i < arr[0].length, j < arr[arr.length - 1].length;
    i++, j++
  ) {
    if (arr[0][i] !== arr[arr.length - 1][j]) {
      break;
    }
    str += arr[0][i];
  }
  return str;
}
console.log(theLongestPrefix(["abc123", "abcad123", "abcde123", "abcdef123"]));
