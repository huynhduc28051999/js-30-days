
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
function findMatches(wordFind,cities) {
  return cities.filter(place => {
    let reg = new RegExp(wordFind,'gi')
    return place.city.match(reg) || place.state.match(reg);
  })
}
function displayMatches() {
  // console.log(this.value);
  let arrMatch = findMatches(this.value, cities);
  let content = arrMatch.map(place => {
    let reg= new RegExp(this.value,'gi');
    let placeName = place.city.replace(reg, `<span class="hl">${this.value}</span>`);
    let placeState = place.state.replace(reg, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${placeName} , ${placeState}</span>
        <span class="population">${place.population}</span>        
      </li>
    `;
  }).join('');
  tagShow.innerHTML = content;
  // console.log(content);
  
}

let searchInput = document.querySelector('.search');
let tagShow = document.querySelector('.suggestions');

// searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);