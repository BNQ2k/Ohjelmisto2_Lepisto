'use strict';
const nimi = prompt('Hei uusi opiskelija! Mikä on nimesi?')
const arpa = Math.floor(Math.random() * 4) + 1;
let tupa;
switch(arpa) {
    case 1:
        tupa = "Gryffindor";
        break;
    case 2:
        tupa = "Slytherin";
        break;
    case 3:
        tupa = "Hufflepuff";
        break;
    case 4:
        tupa = "Ravenclaw";
        break;
    default:
        tupa = "Talo tuntematon";
}
const vastaus = nimi + ", olet: " + tupa + ".";
document.querySelector('#vastaus').innerHTML = vastaus;