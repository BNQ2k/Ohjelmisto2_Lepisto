'use strict';
const luku = parseInt(prompt("Syötä kokonaisluku: "));
let onkoAlkuluku = true;
if (luku <= 1) {
    onkoAlkuluku = false;
} else {
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            onkoAlkuluku = false;
            break;
        }
    }
}

let tulosViesti;
if (onkoAlkuluku) {
    tulosViesti = luku + ' on alkuluku.';
} else {
    tulosViesti = luku + ' ei ole alkuluku.';
}
document.querySelector('#tulos').innerHTML = tulosViesti;