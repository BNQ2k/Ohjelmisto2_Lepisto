'use strict';
console.log("Heippa! Kysyn numeroita kunnes järjestelmään syötetään 0");
window.alert("0:lla lopettaa");
let numerot = [];
let syote = prompt("Anna numero (0 lopettaa):");
syote = Number(syote);
while (syote !== 0) {
    numerot.push(syote);
    syote = prompt("Anna numero (0 lopettaa):");
    syote = Number(syote);
}
numerot.sort(function(a, b) {
    return b - a;
});
console.log("Numerot isoimmasta pienimpään:");
for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
}