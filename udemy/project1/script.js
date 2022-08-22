let number = Math.ceil(Math.random() * 20);
document.querySelector('.check').addEventListener('click', yourNum);
let num = 20;
let high = 0;
function yourNum() {
  let guess = document.querySelector('.guess').value;
  let message = document.querySelector('.message');
  let label = document.querySelector('.label-score');
  let highscore = document.querySelector('.label-highscore');
  let showNum = document.querySelector('.number');

  if (num > 0) {
    if (guess !== '' && number == guess) {
      message.innerHTML = '🎉 Correct number!';
      showNum.innerHTML = number;
      if (num > high) {
        high = num;
        highscore.innerHTML = `Highscore: ${high}`;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (guess !== '' && number != guess) {
      number < guess
        ? (message.innerHTML = 'Too high!')
        : (message.innerHTML = 'Too low!');
      num -= 1;
      label.innerHTML = `Score: ${num}`;
    }
  } else {
    message.innerHTML = '💥 You lost the game !Please start again';
  }
}
document.querySelector('.again').addEventListener('click', reset);
function reset() {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.label-score').innerHTML = `💯 Score: 20`;

  num = 20;
  document.querySelector('body').style.backgroundColor = '#222';
}
