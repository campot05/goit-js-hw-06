const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map((name) => {
  const newItem = document.createElement('li');
  newItem.textContent = name;
  newItem.classList.add('item');
  return newItem;
});

ingredientsList.append(...elements);
