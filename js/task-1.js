const ref = {
  list: document.querySelector('#categories'),
};

console.log(`Namber of categories: ${ref.list.children.length}`);

[...ref.list.children].forEach(elem => {
  const text = elem.querySelector('h2').textContent;

  console.log(`Category: ${text}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
