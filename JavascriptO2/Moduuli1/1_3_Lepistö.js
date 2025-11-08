'use strict';
const int1 = prompt('Luku 1: ')
const int2 = prompt('Luku 2: ')
const int3 = prompt('Luku 3: ')
const sum = parseInt(int1) + parseInt(int2) + parseInt(int3)
    document.querySelector('#summa').innerHTML = 'Lukujen summa, ' + sum +".";
const prod = parseInt(int1) * parseInt(int2) * parseInt(int3)
    document.querySelector('#kerto').innerHTML = 'Lukujen tulo, ' + prod + ".";
const avg = sum / 3
    document.querySelector('#ka').innerHTML = 'Lukujen keskiarvo, ' + avg + ".";
