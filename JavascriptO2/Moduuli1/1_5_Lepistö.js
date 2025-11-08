'use strict';
const vuosiStr = prompt('Syötä vuosi:');
const vuosi = parseInt(vuosiStr);

let tulos;
if ((vuosi % 400 === 0) || (vuosi % 4 === 0 && vuosi % 100 !== 0)) {
    tulos = vuosi + ' on karkausvuosi.';
}
    else {
    tulos = vuosi + ' ei ole karkausvuosi.';
}

document.querySelector('#tulos').innerHTML = tulos;