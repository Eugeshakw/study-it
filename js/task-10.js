

// const refs = {
//   input: document.querySelector('#controls input'),
//   btnCreate: document.querySelector('button[data-create]'),
//   btnDestroy: document.querySelector('button[data-destroy]'),
//   box: document.getElementById('boxes')
// };


// refs.btnCreate.addEventListener('click', createFunct);
// refs.btnDestroy.addEventListener('click', destroyFunc); 

// function createFunct(){
 
 
//   const inpTxt = Number(refs.input.value);
//  const maxInp = refs.input.max;
 
//  if(inpTxt > maxInp) {
//   alert('Please select')
//   refs.input.value = ''
//   return;
//  }

//  createBoxes(inpTxt);


// }


 


// function createBoxes(inpTxt) {
//   destroyFunc();
//   const obj = [];
//   for(let i = 0; i < inpTxt; i++){
//     const boxEl = document.createElement('div');
//     const size = 30 + i * 10 + 'px';
//     boxEl.style.width = size;
//     boxEl.style.height = size;
//     boxEl.style.marginBottom = '10px';
//     boxEl.style.backgroundColor = getRandomHexColor();
//     obj.push(boxEl);
   
//   }
//   refs.box.append(...obj);
// console.log(...obj);
// };



// function destroyFunc(){
//   refs.input.value = ''
//   refs.box.innerHTML = '';
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  box: document.querySelector('#boxes'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('#controls input')
}


refs.btnCreate.addEventListener('click', createBoxes)


function createBoxes() {
  const inptxt = Number(refs.input.value);
  const inpMaxValue = refs.input.max;
 if(inptxt > inpMaxValue){
  alert('Please select');
 }

newCreateboxes(inptxt);
}

function newCreateboxes(inptxt){
const obj = [];

for(let i = 0; i < inptxt; i++){
  const newBox = document.createElement('div');
  const size = 30 + i * 10 + 'px';
  newBox.style.width = size;
  newBox.style.height = size;
  newBox.style.marginBottom = '10px';
  newBox.style.backgroundColor = getRandomHexColor();
  obj.push(newBox);
}
refs.box.append(...obj);
console.log(...obj);

}



