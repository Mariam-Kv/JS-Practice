let num = 121;

function NumericPalindrome(number) {
  let rev = 0;
  if (number < 0) {
    return false;
  }
  if (number < 10) {
    return true;
  }
  while (number > rev) {
    rev *= 10;
    rev += number % 10;
    number = Math.trunc(number / 10);
  }
  return number === rev || number === Math.trunc(rev / 10);
  /*
  let str = number.toString().split("");
  if (str.join() === str.reverse().join()) {
    return true;
  }
  return false;*/
}
console.log(NumericPalindrome(num));
