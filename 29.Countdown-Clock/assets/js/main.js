let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check when function stops
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}
function displayTimeLeft(seconds) {
  const minutes = Math.round(seconds / 60);
  const reSeconds = seconds % 60;
  // console.log(seconds);
  const display = `${minutes}:${reSeconds < 10 ? '0' : ''}${reSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
function displayEndTime(times) {
  const end = new Date(times);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour % 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  // console.log(this.dataset.time);
  const time = this.dataset.time;
  // timer(this.dataset.time);
  timer(time);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.forms['customForm'].addEventListener('submit', function (e) {
  e.preventDefault();
  // minutes
  const minutes = this['minutes'].value;
  this.reset();
  const second = minutes * 60;
  timer(second);
});