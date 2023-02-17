
//const display = document.getElementById('display');

const container = document.querySelector('.buttons-container');
let enteredValue = document.getElementById('enter_value');
let finalAnswer = document.getElementById('calculated-answer');


 const signs = ['+', '-', 'x', '÷'];

 let firstValue = '';
 let operend = '';
 let secondValue = '';
 let k=0;
 let answer = '';

 for(let i =0; i<10; i++){
  const button = document.createElement('button');
  button.innerHTML = (i%3 === 0 && i !== 0) ? `${signs[k]}`:`${i}`;
  if(signs.includes(button.innerHTML)){
    button.setAttribute('type', 'operator');
  }
  button.addEventListener('click', (e)=>{
    if(typeof e.target.innerHTML !== Number && !firstValue){
      firstValue = Number(e.target.innerHTML);
      enteredValue.value = firstValue;
    }else if(e.target.innerHTML === signs[k]){
      operend = signs[k];
      enteredValue.value = operend;
    }else {
      secondValue = Number(e.target.innerHTML);
      enteredValue.value = secondValue;
    }
    finalAnswer.value = eval(`${firstValue} ${operend} ${secondValue}`);
 })
 container.appendChild(button);
 }
// const add = (e)=>{
//     const firstValue = enteredValue.innerHTML;
//     const result = enteredValue+ e.target.value;
//     display.innerHTML = result;
// };

// const subtract = (e)=>{
//     const result = e.target.value - e.target.value;
//     display.innerHTML = result;
// };

// const multiply = (e)=>{
//     const result = e.target.value * e.target.value;
//     display.innerHTML = result;
// };

// const divide = (e)=>{
//     const result = e.target.value / e.target.value;
//     display.innerHTML = result;
// };



// button.addEventListener('click', (e)=>{
//     if(!enteredValue.value){
//       firstValue = Number(e.target.innerHTML);
//     };

//     if(e.target.innerHTML === signs[k] ){
//       finalAnswer.value = Number(firstValue)+Number(e.target.innerHTML);
//     }
//     enteredValue.value = firstValue;
    
//   })
//   container.appendChild(button);