let urlParams = new URLSearchParams(window.location.search);
let imdbID = urlParams.get("movie");

fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=3b9420f8`)
.then((response) => {
    return response.json();
})                                      
.then((data) => {
    console.log(data);
    if(data.Response==='True'){
        movieDetail(data);
    }
    
}, true);




async function movieDetail(movie){
    let favMovieCheck = [];
    let mainContainer =  document.getElementById("main-container");
    if (window.localStorage.getItem("favourite")) {
        favMovieCheck =await JSON.parse(window.localStorage.getItem("favourite"));
    }
    
    
    let imdb = movie.imdbID;

    console.log(favMovieCheck,imdb)
    
    let movieHTML = `<div id="movie-container">

    <div id="title-container">
        <h1 >${movie.Title}</h1>

        ${
            favMovieCheck.includes(imdb)
              ? "<button onclick='unFavourite("+
              JSON.stringify(imdb)+
              ")'><i class='fa-solid fa-heart'></i> Un Favourite</button>"
              : "<button onclick='addFavourite("+
                    JSON.stringify(imdb)+
                    ")'><i class='fa-solid fa-heart'></i> Add Favourite</button>"
                
          }

        

    </div>

    <div id="movie-detail-container">
        <div id="image-container">
            <img src="${movie.Poster}" alt="poster">
        </div>
        <div id="movie-detail">
            <div id="title-container-detail"><b style="font-size: xx-large;"> ${movie.Title} </b> | ${movie.Year} | ${movie.Rated} </div>
            <div id="releasing-year"><b>Release date: </b>${movie.Released}</p>
            
            <div class="movie-item-detail"><b>Genre :</b> ${movie.Genre}</div>
            <div class="movie-item-detail"><b>Runtime :</b> ${movie.Runtime}</div>
            <div class="movie-item-detail"><b>Language :</b> ${movie.Language}</div>
            <div class="movie-item-detail"><b>Director :</b> ${movie.Director}</div>
            <div class="movie-item-detail"><b>Actors :</b> ${movie.Actors}</div>
            <h2><b>Ratings</b></h2>
            <div id="rating-movie-detail">
                <div>
                    IMDB Rating : <i class="fa-solid fa-star" style="color: #ff9e04;"></i> ${movie.imdbRating}/10
                </div>
                <div>
                    Rotten Tomatoes : <img src="https://cdn-icons-png.flaticon.com/512/1202/1202125.png" width="12px"> 94%
                </div>
            </div>
            <div class="movie-item-detail"><b>BoxOffice :</b> ${movie.BoxOffice}</div>
            <div class="movie-item-detail"><b>Awards :</b> ${movie.Awards}</div>
            <h2>Plot</h2>
            <h6 id="plot-item-detail">${movie.Plot}</h6>
            
            
                


        </div>
    </div>
    <div id="movie-plot-detail"></div>
</div>
`

mainContainer.innerHTML = movieHTML;

}


