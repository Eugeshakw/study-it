const ulEl = document.querySelector('#categories').children;

console.log(`Number of categories: ${ulEl.length}`);

const liEl = document.querySelectorAll('.item');

liEl.forEach(el => {
    const category = el.firstElementChild.textContent;
    console.log(`Category: ${category}`);
    const elements = el.lastElementChild.children.length;
    console.log(`Elements: ${elements}`);

});































