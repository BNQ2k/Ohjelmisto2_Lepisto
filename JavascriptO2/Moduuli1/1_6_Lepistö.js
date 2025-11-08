'use strict';
let t;
const k = confirm("Lasketaanko neliöjuuri?");
if (k) {
    const l = parseFloat(prompt('Syötä luku: '));
    if (l < 0) {
        t = "Luku ei voi olla negatiivinen.";
    } else {
        const n = Math.sqrt(l);
        t = "Neliöjuurella " + l + " = " + n;
    }
} else {
    t = "Virhe.";
}
document.querySelector('#tulos').innerHTML = t;