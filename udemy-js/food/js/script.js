import tabs from "./tabs";
import calculator from "./calculator";
import slider from "./slider";
import timer from "./timer";

window.addEventListener("DOMContentLoaded", () => {
  tabs();
  calculator();
  slider();
  timer();
  //modal
  let feedback = document.createElement("h2");
  feedback.classList.add("centered");
  let btns = document.querySelectorAll(".btn");
  let modal = document.querySelector(".modal");
  let form1 = document.querySelector("#form1");

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
  }
  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
    if (feedback.innerHTML) {
      feedback.style.display = "none";
      form1.style.display = "block";
    }
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  btns.forEach((el) => {
    if (!el.classList.contains("btn_min"))
      el.addEventListener("click", () => {
        openModal();
      });
  });
  document.querySelector(".modal__close").addEventListener("click", () => {
    closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
  //modalTimer
  let modalTimer = setTimeout(() => {
    openModal();
  }, 3000);
  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  //class

  // class Items {
  //   constructor(img, title, info, price, parent) {
  //     this.img = img;
  //     this.title = title;
  //     this.info = info;
  //     this.price = price;
  //     this.parent = document.querySelector(parent);
  //   }
  //   render() {
  //     let item = document.createElement("div");
  //     item.innerHTML = ` <div class="menu__item">
  //           <img src=${this.img} alt="vegy" />
  //           <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
  //           <div class="menu__item-descr">
  //            ${this.info}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Цена:</div>
  //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
  //           </div>
  //         </div>`;

  //     this.parent.append(item);
  //   }
  // }

  // new Items(
  //   "img/tabs/post.jpg",
  //   "mariam",
  //   "dfdfd",
  //   "ere",
  //   ".menu .container"
  // ).render();

  let forms = document.querySelectorAll("form");

  forms.forEach((el) => {
    el.addEventListener("submit", (e) => {
      let name = el.querySelector(".name");
      let phone = el.querySelector(".phone");
      e.preventDefault();
      fetch(
        "https://react-projects-160bb-default-rtdb.firebaseio.com/js.json",
        {
          method: "POST",
          body: JSON.stringify({ name: name.value, phone: phone.value }),
        }
      ).then((res) => {
        if (res.ok) {
          name.value = "";
          phone.value = "";
          el.style.display = "none";
          feedback.style.display = "block";
          feedback.innerHTML = "СПАСИБО! СКОРО МЫ С ВАМИ СВЯЖЕМСЯ";
          el.insertAdjacentElement("afterend", feedback);
        }
      });
    });
  });
});
