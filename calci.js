const div = document.createElement('div');
div.setAttribute('class', 'display');
document.body.append(div);

div.innerHTML = `<h1>Basic Calculator</h1> <br/>
<input type= 'text' id='num1'/> <br/>
<input type= 'text' id='num2'/> <br/>
<button onclick='add()'>+</button>
<button onclick='subtract()'>-</button>
<button onclick='multiply()'>x</button>
<button onclick='divide()'>÷</button> <br/>
<input type='text' id='result'/>
`
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');

const add = ()=>{
    if(num1.value === !Number && num2.value === !Number){
      alert('Sorry, Please enter a number');
    }else{
        result.value = Number(num1.value) + Number(num2.value);
    }
};
const subtract = ()=>{
    if(num1.value === !Number && num2.value === !Number){
      alert('Sorry, Please enter a number');
    }else{
        result.value = Number(num1.value) - Number(num2.value);
    }
};
const multiply = ()=>{
    if(num1.value === !Number && num2.value === !Number){
      alert('Sorry, Please enter a number');
    }else{
        result.value = Number(num1.value) * Number(num2.value);
    }
};
const divide = ()=>{
    if(num1.value === !Number && num2.value === !Number){
      alert('Sorry, Please enter a number');
    }else{
        result.value = Number(num1.value) / Number(num2.value);
    }
}