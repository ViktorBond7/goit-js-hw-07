`use strict`;

const listItems = categories.children;
console.log(`Number of categories: ${listItems.length}`);
const categoryItemsRef = document.querySelectorAll('li.item');
categoryItemsRef.style.color = 'red';

categoryItemsRef.forEach(element => {
  const categoriTitleRef = element.querySelector('h2').textContent;
  const categoriElementsRef = element.querySelectorAll('ul li');

  console.log(`Category: ${categoriTitleRef}`);
  console.log(`Elements: ${categoriElementsRef.length}`);
});
