const spanRef = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action=decrement]');
const incrementBtnEl = document.querySelector('[data-action=increment');

let counterValue = 0;

decrementBtnEl.addEventListener('click', dectementValue);
incrementBtnEl.addEventListener('click', incrementValue);

function dectementValue() {
  counterValue -= 1;
  spanRef.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  spanRef.textContent = counterValue;
}
