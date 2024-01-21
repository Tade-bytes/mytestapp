
let movies = [];
const axios = require('axios');
axios.get('https://www.omdbapi.com')
  .then(response => {
    movies = response.data;
  })
  .catch(error => {
    console.log(error);
    
  });
  
const parent = document.getElementById('video-container');
movies.map((movie) => {parent.innerHTML += `<div class="video-box">
<img src=${movie.Poster} />
<h2>${movie.Title}</h2>
<p>${movie.Year}</p>
</div>})`});
