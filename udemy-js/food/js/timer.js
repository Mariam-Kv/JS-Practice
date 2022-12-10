export function timer() {
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
}
