
//const display = document.getElementById('display');

const container = document.querySelector('.buttons-container');
let enteredValue = document.getElementById('enter_value');
let finalAnswer = document.getElementById('calculated-answer');
let operation = document.getElementById('operation');


 const signs = ['+', '-', 'x', '÷'];

 for(let i = 0; i <signs.length; i++){
  if(signs[i] === '+'){

    operation.addEventListener('click', ()=>{
      
      finalAnswer.appendChild()
    })
  }
 }

 let firstValue = '';
 let operend = '';
 let secondValue = '';
 let k=0;
 let answer = '';

 for(let i =0; i<10; i++){
  const button = document.createElement('button');
  button.innerHTML = (i%3 === 0 && i !== 0) ? `${signs[k]}`:`${i}`
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
 };

 
