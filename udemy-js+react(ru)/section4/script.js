let btns = document.querySelectorAll("button");
console.log(btns[0].className);
// в user находится ссылка на объект
let user = {
  name: "John",
};

let admin = user;

user.age = 4;

console.log(admin);
