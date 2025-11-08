'use strict';

const numerot = []
while(true) {
    const numero = parseFloat(prompt("Anna numero: "))
    if (numerot.some(a => a===numero)) {
        console.log("Numero annettu JO")
        break;
    }
    numerot.push(numero)
}
numerot.sort((a, b) => a - b)
for(let numero of numerot){
    console.log(numero)
}