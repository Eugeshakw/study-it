const ulEl = document.querySelector('#categories').children
console.log(`Number of Categories: ${ulEl.length}`)



const liEl = document.querySelectorAll('.item');

const elem = liEl.forEach (item => {
    const txtchild = item.firstElementChild.textContent;

    console.log(`Categories: ${txtchild}`)
    const elemEl = item.lastElementChild.children;
    console.log(`Elemments: ${elemEl.length}`)
})





























