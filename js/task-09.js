const btnEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const body = document.body;

btnEl.addEventListener('click', () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
