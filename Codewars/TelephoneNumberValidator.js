function telephoneCheck(str) {
  let check = {};
  check["first"] = /^(1 |)\d{3}-\d{3}-\d{4}$/;
  check["second"] = /^(1|)\(\d{3}\)\d{3}-\d{4}$/;
  check["third"] = /^(1 |)\(\d{3}\) \d{3}-\d{4}$/;
  check["fourth"] = /^\d{3} \d{3} \d{4}$/;
  check["fifth"] = /^\d{10}$/;
  check["last"] = /^1 \d{3} \d{3} \d{4}$/;

  return Object.keys(check)
    .map((el) => {
      if (check[el].test(str)) {
        return true;
      }
    })
    .some((el) => el === true);
}
//заменила на 🔽
function telephoneCheck(str) {
  let regex = /^(1|1 |)(\(\d{3}\)|\d{3})( |-|)\d{3}(-| |)\d{4}$/;

  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("123**&!!asdf#"));
