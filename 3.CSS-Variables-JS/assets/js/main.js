const inputs = document.querySelectorAll(".controls input");
const img = document.querySelector("img");
function handleUpdate() {
  // console.log(this.value);
  const suffix = this.dataset.sizing || "";
  // console.log(this.dataset);
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
  
}
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));