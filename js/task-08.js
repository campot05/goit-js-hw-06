const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formData);

function formData(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (mail === '' || password === '') {
    return alert('Заполните все поля, пожалуйста');
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  formEl.reset();
}
