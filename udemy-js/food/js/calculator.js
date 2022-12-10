export function calculator() {
  //calculator

  let sex, ratio, height, weight, age;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }
  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

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
}
