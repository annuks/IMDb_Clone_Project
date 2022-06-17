function searchMovies(searchString){

    let moviesList;
    // url api link
    let url = `https://www.omdbapi.com/?s=${searchString}&apikey=3b9420f8`      
    let movies = fetch(url).then((response)=> response.json()).then((data)=>data);
    console.log(movies);

    // fetching url api
    fetch(url)
    .then((response) => {
        return response.json();
    })                                      
    .then((data) => {
        console.log(data);
        moviesList = data;
    }, true);
    return moviesList;
}
searchMovies();











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