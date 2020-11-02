const buttonAdd = document.getElementById('button-add');
const buttonSub = document.getElementById('button-sub');
const buttonMul = document.getElementById('button-mul');
const buttonDiv = document.getElementById('button-div');
const box = document.getElementById('box');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

buttonAdd.addEventListener('click', () => {
  const result = num1.value + num2.value;
  box.textContent = result;
});

buttonSub.addEventListener('click', () => {
  const result = num1.value - num2.value;
  box.textContent = result;
});

buttonMul.addEventListener('click', () => {
  const result = num1.value * num2.value;
  box.textContent = result;
});

buttonDiv.addEventListener('click', () => {
  const result = num1.value / num2.value;
  box.textContent = result;
});