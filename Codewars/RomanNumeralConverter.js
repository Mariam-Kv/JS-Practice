function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";
  Object.keys(roman).map((el) => {
    if (roman[el] <= num) {
      let result = Math.floor(num / roman[el]);
      num -= result * roman[el];
      str += el.repeat(result);
    
    }
  });
  return str;
}

console.log(convertToRoman(36));
