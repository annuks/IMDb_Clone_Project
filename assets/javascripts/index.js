async function searchMovies(e){

    // console.log(e.target.value);
    
    let moviesList;
    // url api 
    let searchString = e.target.value;
    if(searchString.length==0){
        let searchResultContainer = document.getElementById("search-result-container");
        searchResultContainer.style.display="none";
    }
    else{
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
    if(moviesList.length>0){
        moviesList.map((movie)=>{
            let movieHTML = ` <div class="search-movie-card">
            <button class="add-favourite"><i class="fa-solid fa-shield-heart"></i></button>
            <div  class="search-movie-image"><a href="#tt0371746"><img src=${movie.Poster}></a></div>
            <div class="search-movie-title">${movie.Title}</div>
            <div class="search-movie-year">(${movie.Year})</div>
            
        </div>`
        searchResultContainer.innerHTML += movieHTML;
        })
    }
    
}










function closeTrailor(){
    document.getElementById("trailer-play-container").style.display = "none";
}

function trailorPlay(movie){
    document.getElementById("trailer-play-container").style.display = "block";
    let trailerContainer = document.getElementById("trailer-embed");
    if(movie==1){
        trailerContainer.innerHTML = ` <iframe style="width: 100%;" height="385" src="https://www.youtube.com/embed/AgS_6UbQ8JM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }else if(movie==2){
        trailerContainer.innerHTML = ` <iframe style="width: 100%;" height="385" src="https://www.youtube.com/embed/gim2kprjL50" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }else{
        trailerContainer.innerHTML = ` <iframe style="width: 100%;" height="385" src="https://www.youtube.com/embed/a6VVrAZUnsc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

}
