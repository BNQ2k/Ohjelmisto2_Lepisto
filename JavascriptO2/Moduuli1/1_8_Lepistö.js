'use strict';

const alkuVuosi = parseInt(prompt("Syötä alkuvuosi:"));
const loppuVuosi = parseInt(prompt("Syötä loppuvuosi:"));

let lista = "";
for (let vuosi = alkuVuosi; vuosi <= loppuVuosi; vuosi++) {
    if ((vuosi % 400 === 0) || (vuosi % 4 === 0 && vuosi % 100 !== 0)) {
        lista += '<li>' + vuosi + '</li>';
    }
}

document.querySelector('#karkausvuodet').innerHTML = lista;