let hero = document.querySelector('.hero');
let text = hero.querySelector('h1');
let walk = 100;

function shadow(e) {
  // console.log(e);
  // let width = hero.offsetWidth;
  // let height = hero.offsetHeight;
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;
  // console.log(x,y);
  
  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  // console.log(x,y);
  let xWalk = Math.round((x / width * walk) - (walk / 2));
  let yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255, .2)`;
}
hero.addEventListener('mousemove', shadow);