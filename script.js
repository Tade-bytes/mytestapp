
let movies = [];
let series = [];
let searchedMovies = [];
let iyanu = "iyanu"
axios.get('https://www.omdbapi.com/?s=all&type=movie&apikey=e95f2e70')
  .then(response => {
    movies = response.data.Search;
    console.log(movies)
    parentCategories1.innerHTML += `<h1>${movies[0].Type + 's'}</h1>`
    movies.map((movies) => {parentMovies.innerHTML += `
    <div class="video-box">
    <img src=${movies.Poster} />
    <h2>${movies.Title}</h2>
    </div>
`}
);

    console.log(response.data)

  })
  .catch(error => {
    console.log(error);
    
  });
  axios.get('https://www.omdbapi.com/?s=all&type=series&apikey=e95f2e70')
  .then(response => {
    series = response.data.Search;
    parentCategories2.innerHTML += `<h1>${series[0].Type}</h1>`
    series.map((series) => {parentSeries.innerHTML += `<div class="box-header">

    </div>
   
    <div class="video-box">
      <img src=${series.Poster} />
      <h2>${series.Title}</h2>
    </div>
    
`}
    
);

    console.log(response.data)

  })
  .catch(error => {
    console.log(error);
    
  });
  axios.get('https://www.omdbapi.com/?t=all&type=series&apikey=e95f2e70')
  .then(response =>{
   movies = response.data.Type;
   
  })
  function searchFunction(){
    axios.get('https://www.omdbapi.com/?s=all&apikey=e95f2e70')
    .then(response=>{
    let x = document.getElementById("search").value.toLowerCase()
    searchedMovies = response.data.Search
    let filteredMovies = searchedMovies.filter(movie => movie.Title.toLowerCase().includes(x))
    console.log(filteredMovies)
    parentMovies.innerHTML = ""
    filteredMovies.map((filteredMovie) => {parentMovies.innerHTML += `
    <div class="video-box">
    <img src=${filteredMovie.Poster} />
    <h2>${filteredMovie.Title}</h2>
    </div>
`})

})
    .catch(error=>{
      console.log(error)
    })

}
  
  
const parentMovies = document.getElementById('video-container');
const parentSeries = document.getElementById('video-container2');
const parentCategories1 = document.getElementById('categories1');
const parentCategories2 = document.getElementById('categories2');



