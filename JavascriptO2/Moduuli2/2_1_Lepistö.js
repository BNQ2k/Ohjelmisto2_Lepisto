'use strict';
const luvut = [];
const maara = 5;

for (let i = 0; i < maara; i++) {
    const syote = prompt(`Syötä luku ${i + 1}/${maara}:`);
    luvut.push(parseInt(syote));
}

console.log("Syötetyt luvut (alkuperäinen järjestys):", luvut);
console.log("---");
console.log("Luvut käänteisessä järjestyksessä:");

for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i]);
}
document.querySelector('#tulos').innerHTML = 'Luvut löydät konsolista tulostettuna. ';