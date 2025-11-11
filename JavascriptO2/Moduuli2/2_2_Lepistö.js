let maara = prompt("Osallistujien määrä: ");
maara = Number(maara);
let nimet = [];
for (let i = 0; i < maara; i++) {
    let nimi = prompt("Syötä nimi " + (i + 1) + ":");
    nimet.push(nimi);
}
nimet.sort();
document.write("<ol>");

for (let i = 0; i < nimet.length; i++) {
    document.write("<li>" + nimet[i] + "</li>");
}
document.write("</ol>");