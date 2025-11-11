'use strict';

let numerot = [];

while (true) {
  let syote = prompt("Anna numero:");
  let luku = Number(syote);

  if (numerot.includes(luku)) {
    console.log("Numero " + luku + " on jo annettu!");
    break;
  }

  numerot.push(luku);
}

numerot.sort(function(a, b) {
  return a - b;
});

console.log("Annetut numerot järjestyksessä:");
for (let i = 0; i < numerot.length; i++) {
  console.log(numerot[i]);
}