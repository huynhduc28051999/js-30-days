let checkboxs = document.querySelectorAll('.item input[type=checkbox]');
// console.log(checkboxs);
let lastChecked;
function handleCheck(e) {
  // console.log(e);
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxs.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween =!inBetween;
        console.log('now');
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  } 
  lastChecked = this;
}
checkboxs.forEach(checkbox => checkbox.addEventListener('click',handleCheck));