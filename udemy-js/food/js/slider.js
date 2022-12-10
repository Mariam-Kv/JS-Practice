export function slider() {
  //slider
  let indeX;
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
}
