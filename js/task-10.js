const boxesEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('[type=number]');

boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';

createBtnEl.addEventListener('click', onCreateBoxes);

destroyBtnEl.addEventListener('click', onClearItems);

function onCreateBoxes() {
  const amount = inputEl.value;
  const collectionsBoxes = createBoxes(amount);
  inputEl.value = '';
  boxesEl.append(...collectionsBoxes);
}

function createBoxes(amount) {
  const collections = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');
    item.style.height = `${size}px`;
    item.style.width = `${size}px`;
    item.style.marginRight = `10px`;
    item.style.backgroundColor = `${getRandomHexColor()}`;
    size += 10;
    collections.push(item);
  }
  return collections;
}

function onClearItems() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ===== вроде норм =====

// const boxesEl = document.querySelector('#boxes');
// const createBtnEl = document.querySelector('[data-create]');
// const destroyBtnEl = document.querySelector('[data-destroy]');
// const inputEl = document.querySelector('[type=number]');

// boxesEl.style.display = 'flex';
// boxesEl.style.flexWrap = 'wrap';

// createBtnEl.addEventListener('click', () => {
//   const items = createBoxes(inputEl.value);
//   boxesEl.append(...items);
// });

// destroyBtnEl.addEventListener('click', clearItems);

// function createBoxes(amount) {
//   const collections = [];
//   let size = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const item = document.createElement('div');
//     item.style.height = `${size}px`;
//     item.style.width = `${size}px`;
//     item.style.marginRight = `10px`;
//     item.style.backgroundColor = `${getRandomHexColor()}`;
//     size += 10;
//     collections.push(item);
//   }
//   return collections;
// }

// function clearItems() {
//   boxesEl.innerHTML = '';
//   inputEl.value = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// ===== стрёмный вариант, бо элементы добавляются по одному, а это вроде не хорошо =======

// createBtnEl.addEventListener('click', createBoxes);
// destroyBtnEl.addEventListener('click', clearItems);

// function createBoxes(amount) {
//   amount = inputEl.value;
//   let size = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const item = document.createElement('div');
//     item.style.height = `${size}px`;
//     item.style.width = `${size}px`;
//     item.style.marginRight = `10px`;
//     item.style.backgroundColor = `${getRandomHexColor()}`;
//     boxesEl.insertAdjacentElement('beforeend', item);
//     size += 10;
//   }
// }

// function clearItems() {
//   boxesEl.innerHTML = '';
//   inputEl.value = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
