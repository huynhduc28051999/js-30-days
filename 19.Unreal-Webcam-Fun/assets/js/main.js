const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // console.log(localMediaStream);
      // video.src = window.URL.createObjectURL(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error('oh no!', err);
    })
}
function paintToCanvas() {
  let width = video.videoWidth;
  let height = video.videoHeight;
  console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // debugger;

  }, 16);
}

function takePhoto() {
  //played the sound
  snap.currentTime = 0;
  snap.play();
  //take the data out of the canvas
  let data = canvas.toDataURL('image/jpeg');
  // console.log(data);
  let link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man">`
  strip.insertBefore(link, strip.firstChild);
}
getVideo();
video.addEventListener('canplay', paintToCanvas);