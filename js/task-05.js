const inpEL = document.getElementById('name-input');
const spEl = document.getElementById('name-output');

inpEL.addEventListener('input', onFuctInp);

function onFuctInp(evt) {
if(inpEL.value === ''){
    spEl.textContent = 'Anonymous'
}
 spEl.textContent = inpEL.value;

}