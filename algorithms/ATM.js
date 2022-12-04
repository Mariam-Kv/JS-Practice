let arr = [100, 50, 20, 10];
let list = [];
function iWanToGet(money) {
  if (money > 0) {
    for (let i of arr) {
      while (money >= i) {
        list.push(i);
        money = money - i;
      }
    }
  }
  return list;
}

console.log(iWanToGet(40));
