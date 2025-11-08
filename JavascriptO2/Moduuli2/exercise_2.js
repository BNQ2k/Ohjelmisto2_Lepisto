'use strict';
const osallistujat = parseInt(prompt("Kuinka monta osallistujaa: "));

const names = [];

for(let i = 1; i <= osallistujat; i++){
    names.push(prompt("Anna osallistujan nimi: " + i));
}

console.log(names);
const nameListElement = document.getElementById("li");
for(let name of names.sort()){
    let nameElement = document.createElement('li');
    nameElement.innerText = name;
    nameListElement.appendChild(nameElement);
}