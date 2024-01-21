let movies = [];
axios.get('https://www.omdbapi.com/?s=all&type=movie&apikey=e95f2e70')
  .then(response => {
    // movies = response.data;
    console.log(response.data)

  })
  .catch(error => {
    console.log(error);
    
  });
  
const parent = document.getElementById('video-container');
parent.innerHTML += 'Hello Hello World'
movies.map((movie) => {parent.innerHTML += `<div class="video-box">
<img src=${movie.Poster} />
<h2>${movie.Title}</h2>
<p>${movie.Year}</p>
</div>})

`}
);
