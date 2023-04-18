function random() {
  let r = () => Math.floor(Math.random() * 256 + 1);

  return `rgb(${r()} ${r()} ${r()})`;
}
console.log(random());
document.querySelector(".random").style.backgroundColor = random();
