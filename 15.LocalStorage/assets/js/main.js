let addItem = document.querySelector('.add-items');
let itemList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function handleAddItem(e) {
  e.preventDefault();
  let text = this.querySelector('[name="item"').value;
  // console.log(e);
  let item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
  // console.log(item);
  // console.log(items);
  this.reset();
}

addItem.addEventListener('submit', handleAddItem);

populateList(items, itemList);

function toggleDone(e) {
  if (!e.target.matches('input')) return; // this is not tag input
  // console.log(e.target);
  let tag = e.target;
  // console.log(tag.dataset.index);
  let index = tag.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemList);
}

itemList.addEventListener('click', toggleDone);