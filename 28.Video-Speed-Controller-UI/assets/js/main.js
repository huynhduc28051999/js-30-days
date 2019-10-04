const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleVideo(e) {
  const y = e.pageY - this.offsetTop;
  
  const percent = y / this.offsetHeight;
  
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + 'X';
  video.playbackRate = playbackRate;
}
let isDown = false;
speed.addEventListener('mousedown',() =>{
  isDown = true;
});
speed.addEventListener('mouseup',()=>{
  isDown = false;
})
speed.addEventListener('mousemove',function(e){
  if(!isDown) return;
  const y = e.pageY - this.offsetTop;
  
  const percent = y / this.offsetHeight;
  
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + 'X';
  video.playbackRate = playbackRate;
});