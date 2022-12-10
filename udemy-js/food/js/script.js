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

  if (localStorage.getItem("index")) {
    indeX = localStorage.getItem("index");
  } else {
    indeX = 0;
    localStorage.setItem("index", 0);
  }

  let sliders = document.querySelectorAll(".offer__slide");
  let prev = document.querySelector(".offer__slider-prev");
  let next = document.querySelector(".offer__slider-next");
  prev.addEventListener("click", moveSlidersPrev);
  next.addEventListener("click", moveSlidersNext);
  let currentIndex = document.querySelector("#current");

  function moveSlidersNext() {
    indeX++;

    if (indeX === sliders.length) {
      indeX = 0;
    }
    localStorage.setItem("index", indeX);
    sliderChange();
  }
  function moveSlidersPrev() {
    indeX--;
    if (indeX === 0) {
      indeX = sliders.length;
    }
    localStorage.setItem("index", indeX);
    sliderChange();
  }
  function sliderChange() {
    currentIndex.innerHTML = `0${+indeX + 1}`;
    sliders.forEach((el) => el.classList.add("hide"));
    sliders[indeX].classList.remove("hide");
  }
  sliderChange();
  //calculator

  let sex = localStorage.getItem("sex")
      ? localStorage.getItem("sex")
      : localStorage.setItem("sex", "female"),
    ratio = localStorage.getItem("ratio")
      ? localStorage.getItem("ratio")
      : localStorage.setItem("ratio", 1.375),
    height,
    weight,
    age;

  let active = "calculating__choose-item_active";
  let result = document.querySelector(".calculating__result span");
  function localSt(parent, active) {
    let all = document.querySelectorAll(parent);
    all.forEach((el) => {
      el.classList.remove(active);
      if (el.getAttribute("id") === localStorage.getItem("sex")) {
        el.classList.add(active);
      } else if (
        el.getAttribute("data-ratio") === localStorage.getItem("ratio")
      ) {
        el.classList.add(active);
      }
    });
  }

  localSt("#gender div", active);
  localSt(".calculating__choose_big div", active);
  function calculate() {
    if (sex && ratio && weight && height && age) {
      if (sex === "male") {
        result.innerHTML = (
          (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) *
          ratio
        ).toFixed(2);
      } else {
        result.innerHTML = (
          (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) *
          ratio
        ).toFixed(2);
      }
    } else {
      result.innerHTML = "___";
    }
  }
  function staticData(parentElement, active) {
    let parent = document.querySelectorAll(`${parentElement} div`);
    parent.forEach((el) => {
      el.addEventListener("click", (e) => {
        parent.forEach((el) => {
          el.classList.remove(active);
        });
        if (e.target.getAttribute("data-ratio")) {
          ratio = e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.id;
          localStorage.setItem("sex", e.target.id);
        }

        e.target.classList.add(active);
        calculate();
      });
    });
  }
  function inputValue(input) {
    let i = document.querySelector(input);
    i.addEventListener("input", () => {
      if (i.value.match(/\D/g)) {
        i.style.border = "1px solid red";
      } else {
        i.style.border = "none";
      }
      switch (i.getAttribute("id")) {
        case "height":
          height = +i.value;
          break;
        case "weight":
          weight = +i.value;
          break;
        case "age":
          age = +i.value;
      }
      calculate();
    });
  }
  inputValue("#height");
  inputValue("#weight");
  inputValue("#age");

  staticData("#gender", active);
  staticData(".calculating__choose_big", active);

  calculate();
});
