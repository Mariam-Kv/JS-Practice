window.addEventListener("DOMContentLoaded", () => {
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
  //timer
  let deadLine = "2023-01-01";
  function getTimeRemaining(endTime) {
    let time = Date.parse(endTime) - Date.parse(new Date());

    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let sec = Math.floor((time / 1000) % 60);
    return {
      time,
      days,
      hours,
      minutes,
      sec,
    };
  }
  function setOclock(timer, endtime) {
    let timerBlock = document.querySelector(timer);
    let t = getTimeRemaining(endtime);
    timerBlock.querySelector("#days").innerHTML = getZero(t.days);
    timerBlock.querySelector("#hours").innerHTML = getZero(t.hours);
    timerBlock.querySelector("#minutes").innerHTML = getZero(t.minutes);
    timerBlock.querySelector("#seconds").innerHTML = getZero(t.sec);
  }

  let interval = setInterval(() => {
    setOclock(".timer", deadLine);
  }, 1000);
  if (Date.parse(deadLine) - Date.parse(new Date()) < 0) {
    clearTimeout(interval);
  }
  function getZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }
  //modal
  let btns = document.querySelectorAll(".btn");
  let modal = document.querySelector(".modal");
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
  }
  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  btns.forEach((el) => {
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
  let title = document.querySelector(".modal__title");
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
          closeModal();
        }
      });
    });
  });
  //slider

  let index = 0;
  let sliders = document.querySelectorAll(".offer__slide");
  let prev = document.querySelector(".offer__slider-prev");
  let next = document.querySelector(".offer__slider-next");
  prev.addEventListener("click", moveSlidersPrev);
  next.addEventListener("click", moveSlidersNext);
  let currentIndex = document.querySelector("#current");
  currentIndex.innerHTML = `0${+index + 1}`;

  function moveSlidersNext() {
    index++;

    if (index === sliders.length) {
      index = 0;
    }

    sliderChange(index);
  }
  function moveSlidersPrev() {
    index--;
    if (index === 0) {
      index = sliders.length;
    }

    sliderChange(index);
  }
  function sliderChange(index) {
    currentIndex.innerHTML = `0${index + 1}`;
    sliders.forEach((el) => el.classList.add("hide"));
    sliders[index].classList.remove("hide");
  }
});
