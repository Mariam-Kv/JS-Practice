// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
// 65 start ---- 90(includes)---finish
function ROT13(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let exp = /[A-Z]/;
    if (str[i].match(exp)) {
      let code = str.charCodeAt(i);
      let shift = code + 13;
      if (shift > 90) {
        let m = shift - 91;
        newString += String.fromCharCode(65 + m);
      } else if (shift <= 90) newString += String.fromCharCode(shift);
    } else {
      newString += str[i];
    }
  }
  return newString;
}

console.log(ROT13("SERR CVMMN!")); //FREE PIZZA!
