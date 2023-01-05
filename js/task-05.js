const inputTextEl = document.querySelector('#name-input');
const spanTextEl = document.querySelector('#name-output');

inputTextEl.addEventListener('input', changeName);

function changeName() {
  spanTextEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    spanTextEl.textContent = 'Anonymous';
  }
}
