const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEL = document.querySelector('#ingredients');

const elem = ingredients.map(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;

  return liEl;
})

ulEL.append(...elem);







