function hae() {
  const sana = document.getElementById("haku").value;
  const paikka = document.getElementById("tulos");
  paikka.innerHTML = "ladataan..";

  fetch("https://api.tvmaze.com/search/shows?q=" + sana)
    .then(response => response.json())
    .then(data => {
      let teksti = "";
      for (let i = 0; i < data.length; i++) {
        const sarja = data[i].show;
        let kuva = "https://placehold.co/210x295?text=Not%20Found";

        if (sarja.image !== null) {
          kuva = sarja.image.medium;
        }
        teksti += "<h2>" + sarja.name + "</h2>";
        teksti += "<img src='" + kuva + "'><br>";
        teksti += "<a href='" + sarja.url + "' target='_blank'>Linkki sarjaan</a><hr>";
      }
      paikka.innerHTML = teksti;
    });
}