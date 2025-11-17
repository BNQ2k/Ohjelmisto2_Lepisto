'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const startBtn = document.getElementById('start');
const result = document.getElementById('result');

startBtn.addEventListener('click', function () {
  const a = Number(num1.value);
  const b = Number(num2.value);
  const op = operation.value;

  let tulos = '';

  if (op === 'add') {
    tulos = a + b;
  } else if (op === 'sub') {
    tulos = a - b;
  } else if (op === 'multi') {
    tulos = a * b;
  } else if (op === 'div') {
    if (b === 0) {
      tulos = 'Ei voi jakaa nollalla!';
    } else {
      tulos = a / b;
    }
  }

  result.textContent = 'Result: ' + tulos;
});