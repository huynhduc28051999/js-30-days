const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHoles;
let timeUp = false;
let score = 0;
function randTime(min, max) {
  return Math.random() * (max - min) + min;
}

function randomHole(holes) {
  // console.log(holes.length);
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHoles) {
    // console.log('yes');
    randomHole(holes);
  }
  lastHoles = hole;
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randomHole(holes);
  // console.log(time,hole);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}
function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  // console.log(this.parentNode);
  scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', bonk));