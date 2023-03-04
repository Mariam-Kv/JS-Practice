let inData =
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";
let obj = {};

function queryObjectify(str) {
  str = str.split("&");
  str = str.map((el) => el.split("="));

  return str;
}
console.log(queryObjectify(inData));
