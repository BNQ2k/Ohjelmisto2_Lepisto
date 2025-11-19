'use strict';

document.getElementById('haku').addEventListener('click', function() {
  const hakusana = document.getElementById('query').value.trim();
  const results = document.getElementById('results');
  if (hakusana === '') {
    alert('Kirjoita jokin sarjan nimi!');
    return;
  }
  results.innerHTML = '<p>Ladataan...</p>';
  fetch('https://api.tvmaze.com/search/shows?q=' + hakusana)
    .then(response => response.json())
    .then(data => {
      results.innerHTML = '';
      data.forEach(item => {
        const show = item.show;
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = show.name;
        article.appendChild(h2);
        const linkki = document.createElement('a');
        linkki.href = show.url;
        linkki.target = '_blank';
        linkki.textContent = 'TVmaze';
        article.appendChild(linkki);
        article.appendChild(document.createElement('br'));
        article.appendChild(document.createElement('br'));
        const img = document.createElement('img');
        img.src = show.image?.medium || 'https://placehold.co/210x295?text=Not%20Found';
        img.alt = show.name;
        article.appendChild(img);
        article.appendChild(document.createElement('br'));
        article.appendChild(document.createElement('br'));
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = show.summary || '<em>Yhteenveto puuttuu</em>';
        article.appendChild(summaryDiv);
        results.appendChild(article);
      });
    })
    .catch(err => {
      results.innerHTML = '<p>Virhe!</p>';
    });
});