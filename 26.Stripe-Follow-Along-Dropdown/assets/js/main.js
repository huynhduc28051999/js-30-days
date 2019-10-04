const triggers = document.querySelectorAll('.cool > li');
const backgroud = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  // console.log('Enter!!!');
  this.classList.add('trigger-enter');
  setTimeout(() =>{
    if(this.classList.contains('trigger-enter'))
    this.classList.add('trigger-enter-active');
  },150);
  backgroud.classList.add('open');
  const dropdown = this.querySelector('.dropdown');
  let dropdownCoords = dropdown.getBoundingClientRect();
  let navCoords = nav.getBoundingClientRect();
  let coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }
  // console.log(dropdownCoords);
  // console.log(backgroud.getBoundingClientRect());
  
  backgroud.style.setProperty('width',`${coords.width}px`);
  backgroud.style.setProperty('height',`${coords.height}px`);
  backgroud.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  this.classList.remove('trigger-enter','trigger-enter-active');  
  backgroud.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));