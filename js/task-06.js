const inputEl = document.querySelector('#validation-input');

function validationValue(event) {
  if (event.currentTarget.value.length < +inputEl.getAttribute('data-length')) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}

inputEl.addEventListener('blur', validationValue);
