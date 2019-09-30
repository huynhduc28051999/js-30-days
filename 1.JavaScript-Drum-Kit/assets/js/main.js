
function playSound(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const tagkey = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; // key false
  tagkey.classList.add("playing");
  audio.currentTime = 0; // set time load again 0s
  audio.play();
}
function removeTransition(e) {
  // console.log(e);
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");

}

window.addEventListener('keydown', playSound);
const tagKeys = document.querySelectorAll(".key");
tagKeys.forEach(key => key.addEventListener('transitionend', removeTransition));