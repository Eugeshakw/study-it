const ulEL = document.querySelector('#categories')
const liEL = document.querySelectorAll('.item')
const item = ulEL.children


console.log(`item: ${item.length}`)



liEL.forEach( item => {
    const litxt = item.firstElementChild.textContent;
    const listEL = item.lastElementChild.children;
    console.log(`Elements: ${listEL.length}`);
    console.log(`category: ${litxt}`);
});