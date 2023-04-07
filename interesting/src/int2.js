export default function int2() {
  function permutations(string) {
    var results = [];

    function permute(arr, memo) {
      var cur,
        memo = memo || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur).join(""));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }

      return [...new Set(results)];
    }

    return permute(string.split(""));
  }
  permutations("aa");
  let a = 5;
  console.log(a);
  
}
