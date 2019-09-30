const secoundHand = document.querySelector(".secound-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setHandTime() {
  const now = new Date();
  
  const secound = now.getSeconds();
  const secoundDeg = secound * 6 + 90;
  secoundHand.style.transform = `rotate(${secoundDeg}deg)`;

  const minute = now.getMinutes();
  const minuteDeg = minute * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = hour * 6 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setHandTime, 1000);