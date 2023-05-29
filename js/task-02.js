const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');


const ingrEL = ingredients.map(el => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = el;

  return liEl;
  
});

ulEl.append(...ingrEL);

















