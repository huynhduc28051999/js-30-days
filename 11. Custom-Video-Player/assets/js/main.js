const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  let method = video.paused ? 'play' : 'pause';
  video[method]();
  // video.play();
}
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

function updateButton() {
  let icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

function skips() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}
skipButtons.forEach(skip => skip.addEventListener('click', skips));

function handleUpdateRange() {
  video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener('change', handleUpdateRange));

function updateProcess() {
  let processLine = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${processLine}%`;
}
video.addEventListener('timeupdate', updateProcess);

function scrub(e) {
  let timeLine = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = timeLine;
}
progress.addEventListener('click', scrub)