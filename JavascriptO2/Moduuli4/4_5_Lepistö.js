fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(joke => console.log(joke.value));