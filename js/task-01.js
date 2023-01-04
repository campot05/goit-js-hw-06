const listItemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemsRef.length}`);

listItemsRef.forEach((item) => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Element: ${item.querySelectorAll('li').length}`);
});
