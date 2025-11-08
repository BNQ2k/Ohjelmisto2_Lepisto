'use strict';
const rollsStr = prompt("Kuinka monta noppaa heitetään? ")
const rolls = parseInt(rollsStr);
let summa = 0;
for (let i = 0; i < rolls; i++) {
    const heitto = Math.floor(Math.random() * 6) + 1;
    summa += heitto;
}
console.log("Kaikkien heittojen yhteinen summa: " + summa);
document.querySelector("#tulos").innerHTML = "Määrällä " + rolls + " nopan heittojen summa on: <strong>" + summa