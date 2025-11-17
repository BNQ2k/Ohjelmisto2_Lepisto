'use strict';
const target = document.getElementById('target');

const li1 = document.createElement('li');
li1.textContent = 'First item';
target.appendChild(li1);
const li2 = document.createElement('li');
li2.textContent = 'Second item';
li2.classList.add('my-item');
target.appendChild(li2);
const li3 = document.createElement('li');
li3.textContent = 'Third item';
target.appendChild(li3);