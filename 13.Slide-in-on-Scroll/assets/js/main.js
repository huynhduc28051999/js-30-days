function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
let sliderImg = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImg.forEach(slide => {
    //half way the image
    let slideAt = (window.scrollY + window.innerHeight) - slide.height / 2;
    //bottom img
    let bottomAt = slide.offsetTop + slide.height;
    let isHalfShow = slideAt > slide.offsetTop;
    let isNotScrollPast = window.scrollY < bottomAt;
    if(isHalfShow && isNotScrollPast){
      slide.classList.add('active');
    }else{
      slide.classList.remove('active');
    }
  });  
}
window.addEventListener('scroll',debounce(checkSlide));