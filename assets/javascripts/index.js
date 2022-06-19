
async function searchMovies(e){

    // console.log(e.target.value);
    
    let moviesList;
    // url api 
    let searchString = e.target.value;
    if(searchString.length==0){
        document.getElementById("search-h2").style.display = "none";
        let searchResultContainer = document.getElementById("search-result-container");
        searchResultContainer.style.display="none";
    }
    else if(searchString.length<=2){
        let searchResultContainer = document.getElementById("search-result-container");
        searchResultContainer.style.display="none";
        let searchH2 = document.getElementById("search-h2")
        searchH2.innerText = 'Search Results'
        searchH2.style.display = "block";
        let displayHTML = `<h5 style="color:red">Please enter atlease size of three key.....</h5>`
        searchH2.innerHTML += displayHTML;
    }
    else{
        let searchH2 = document.getElementById("search-h2")
        searchH2.innerText = 'Search Results'
        searchH2.style.display = "block";
        let searchResultContainer = document.getElementById("search-result-container");
        searchResultContainer.style.display="flex";
    }
    searchString = searchString.trim();
    let url = `https://www.omdbapi.com/?s=${searchString}&apikey=3b9420f8`      
    let movies = fetch(url).then((response)=> response.json()).then((data)=>data);
    // console.log(movies);

    // fetching url api
    await fetch(url)
    .then((response) => {
        return response.json();
    })                                      
    .then((data) => {
        console.log(data);
        if(data.Response==='True'){
            searchResult(data.Search);
        }
        
    }, true);
}

function searchResult(moviesList){
    let searchResultContainer = document.getElementById("search-result-container");
    searchResultContainer.innerHTML ='';
    let favMovieCheck = [];
    if (window.localStorage.getItem("favourite")) {
        favMovieCheck = JSON.parse(window.localStorage.getItem("favourite"));
    }
    if(moviesList.length>0){
        moviesList.map((movie)=>{
            let imdb = movie.imdbID;
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
            <div  class="search-movie-image"><a href="./html/moviepage.html?movie=${movie.imdbID}"><img src=${movie.Poster}></a></div>
            <div class="search-movie-title">${movie.Title}</div>
            <div class="search-movie-year">(${movie.Year})</div>
            
        </div>`
        searchResultContainer.innerHTML += movieHTML;
        })
    }
    
}










function closeTrailor(){
    let vid= document.getElementById("trailer-embed");
    vid.innerHTML = '';
    
    document.getElementById("trailer-play-container").style.display = "none";
}

function trailorPlay(movie){
    document.getElementById("trailer-play-container").style.display = "block";
    let trailerContainer = document.getElementById("trailer-embed");
    if(movie==1){
        trailerContainer.innerHTML = ` <iframe id="trailor" style="width: 100%;" height="385" src="https://www.youtube.com/embed/AgS_6UbQ8JM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }else if(movie==2){
        trailerContainer.innerHTML = ` <iframe id="trailor" style="width: 100%;" height="385" src="https://www.youtube.com/embed/gim2kprjL50" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }else{
        trailerContainer.innerHTML = ` <iframe id="trailor" style="width: 100%;" height="385" src="https://www.youtube.com/embed/a6VVrAZUnsc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

}




