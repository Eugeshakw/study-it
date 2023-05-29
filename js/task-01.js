const ulEL = document.querySelector('#categories');
const liEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${ulEL.children.length}`)


liEl.forEach(item => {
    
    const categoriesTxt = item.firstElementChild.textContent;
    console.log(`Categories: ${categoriesTxt}`);
    const elementsValue = item.lastElementChild.children.length;
    console.log(`Elements: ${elementsValue}`)

})































