window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
let word = document.querySelector('.words');
word.appendChild(p);

recognition.addEventListener('result',e => {
  // console.log(e.results);
  let transcript = Array.from(e.results)
    .map(resul => resul [0])
    .map(resul => resul.transcript)
    .join('');
    p.textContent = transcript;
    if(e.results[0].isFinal){
      p = document.createElement('p');
      word.appendChild(p);
    }
    console.log(transcript);
});
recognition.addEventListener('end',recognition.start);
recognition.start();