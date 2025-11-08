'use strict';
const numerot = []
let numero;
do {
    numero = parseFloat(prompt("Anna numero: "))
    if(numero !== 0){
        numerot.push(numero)
    }
} while (numero !== 0)
numerot.sort((a, b) =>  b - a)
for(let numero of numerot){
    console.log(numero)
}