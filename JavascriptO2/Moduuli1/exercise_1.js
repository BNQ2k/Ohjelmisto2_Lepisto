const numerot = []
for(let i = 1; i <= 5; i++) {
    numerot.push(parseFloat(prompt("Anna numero: ")))
}
for(let i = numerot.length -1; i >= 0; i --){
    console.log(numerot[i])
}