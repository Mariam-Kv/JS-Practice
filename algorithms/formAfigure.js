const lines = 5;
let result = "";
let start = 1;
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
  let line = `${" ".repeat(lines - i)}${"*".repeat(start)}` + "\n";
  result += line;
  start += 2;
}
console.log(result);
//     *
//    ***
//   *****
//  *******
// *********
