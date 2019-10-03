let nav = document.querySelector('#main');
let topNav = nav.offsetTop;

function fixNav() {
  if(topNav <=window.scrollY){
    document.body.style.paddingTop = nav.offsetHeight+'px';
    document.body.classList.add('fixed-nav');
    
  }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
window.addEventListener('scroll',fixNav);