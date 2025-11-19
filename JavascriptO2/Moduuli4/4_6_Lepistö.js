'use strict';

const form = document.getElementById('searchForm');
const results = document.getElementById('results');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const hakusana = document.getElementById('query').value.trim();
  results.innerHTML = '<p>Kokataan vitsejä</p>';
  fetch('https://api.chucknorris.io/jokes/search?query=' + hakusana)
    .then(response => response.json())
    .then(data => {
      results.innerHTML = '';
      if (data.total === 0) {
        results.innerHTML = '<p>Ei vitsiä sanalla: ' + hakusana + '</p>';
        return;
      }
      data.result.forEach(joke => {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = joke.value;
        article.appendChild(p);
        results.appendChild(article);
      });
    })
    .catch(() => {
      results.innerHTML = '<p>Virhe!</p>';
    });
});