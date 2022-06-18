


function getFavLIst(){
    if (window.localStorage.getItem("favourite")) {
    let favouriteMovieList = JSON.parse(window.localStorage.getItem("favourite"));
    favouriteMovieList.map((data)=>{
        fetch(`https://www.omdbapi.com/?i=${data}&apikey=3b9420f8`)
        .then((response) => {
            return response.json();
        })                                      
        .then((data) => {
            console.log(data);
            if(data.Response==='True'){
                addMovieToFavContainer(data);
            }
            
        }, true);

    })
}  
}
getFavLIst();




function addMovieToFavContainer(movie){
    let favMovieCheck = [];
    if (window.localStorage.getItem("favourite")) {
        favMovieCheck = JSON.parse(window.localStorage.getItem("favourite"));
    }
    let imdb = movie.imdbID;
    let movieContainer=document.getElementById("favourite-movie-list-container");
    let movieHTML = ` <div class="search-movie-card">
    ${
        favMovieCheck.includes(imdb)
          ? "<button style='background:red' class='add-favourite'  onclick='unFavourite("+
          JSON.stringify(imdb)+
          ")'><i class='fa-solid fa-heart-circle-xmark'></i></button>"
          : "<button class='add-favourite' onclick='addFavourite("+
                JSON.stringify(imdb)+
                ")'><i class='fa-solid fa-shield-heart'></i></button>"
            
      }
    <div  class="search-movie-image"><a href="#tt0371746"><img src="${movie.Poster}"></a></div>
    <div class="search-movie-title">${movie.Title}</div>
    <div class="search-movie-year">(${movie.Year})</div>
</div>`

    movieContainer.innerHTML+=movieHTML;

}