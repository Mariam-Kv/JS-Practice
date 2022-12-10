export default function tabs() {
  //tabs
  let tabs = document.querySelectorAll(".tabheader__item");
  let tabParent = document.querySelector(".tabheader__items");
  let contents = document.querySelectorAll(".tabcontent");
  function hide() {
    tabs.forEach((el) => {
      el.classList.remove("tabheader__item_active");
    });
    contents.forEach((el) => {
      el.style.display = "none";
    });
  }

  function show() {
    let id = localStorage.getItem("id");
    if (!id) {
      tabs[0].classList.add("tabheader__item_active");
      contents[0].style.display = "block";
      return;
    }
    tabs[id].classList.add("tabheader__item_active");
    contents[id].style.display = "block";
  }
  hide();
  show();
  tabParent.addEventListener("click", (e) => {
    if (e?.target?.classList.contains("tabheader__item")) {
      tabs.forEach((el, i) => {
        if (e.target === el) {
          localStorage.setItem("id", i);
          hide();
          show();
        }
      });
    }
  });
}

