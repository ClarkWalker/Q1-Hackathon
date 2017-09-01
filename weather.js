var form = document.getElementsByClassName(`weatherSearch`)[0]; //date data from <form> of class weatherSearch
// var
console.log(form);


form.addEventListener(`submit`, function(event){
  event.preventDefault();
  document.getElementsByClassName(`weatherSearch`)[0].innerHTML = ``;
  console.log(`Hi There`);

  fetch(`https://api.darksky.net/forecast/9ff317831205c851aaadada64dcb85dc/39.7392,-104.9903`)
    .then(function(resolve){
      return resolve.json()

})

// form.addEventListener(`submit`, function(event) {
  // event.preventDefault();
  // document.getElementsByClassName(`movies`)[0].innerHTML = ``;
  movie = event.target.search.value
  fetch(`https://omdb-api.now.sh/?s=` + movie)
    .then(function(movieData){
      return movieData.json()
        .then(function(movies){
          for (var i = 0; i < movies.Search.length; i++) {
            movies.Search[i].Poster
            var imgTag = document.createElement(`img`)
            imgTag.setAttribute(`src`, movies.Search[i].Poster);
            var moviePosterSec = document.getElementsByClassName(`movies`)[0];
            moviePosterSec.append(imgTag);
            // console.log(moviePosterSec);
            // console.log(imgTag);
          }
        })
    })
});
