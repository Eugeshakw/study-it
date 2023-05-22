const total = document.querySelector('[data-action="increment"]')

const parsEd = document.querySelector('#value');

total.addEventListener('click', parsedValue);

function parsedValue() {
    parsEd.textContent = parseInt(parsEd.textContent) + 100
}
