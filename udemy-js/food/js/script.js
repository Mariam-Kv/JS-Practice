window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tabheader__items").addEventListener("click", (e) => {
    console.log(e.target.classList.add("tabheader__item_active"));
  });
});
