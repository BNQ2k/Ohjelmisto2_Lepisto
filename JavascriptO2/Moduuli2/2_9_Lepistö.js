'use strict';
function even(taulukko) {
  let parilliset = [];
  for (let i = 0; i < taulukko.length; i++) {
    if (taulukko[i] % 2 === 0) {
      parilliset.push(taulukko[i]);
    }
  }
  return parilliset;
}
let alkuperainen = [2, 7, 4];
let tulos = even(alkuperainen);
console.log("Alkuperäinen taulukko:", alkuperainen);
console.log("Parilliset numerot:", tulos);