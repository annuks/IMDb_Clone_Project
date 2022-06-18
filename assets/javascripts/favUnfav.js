// function for adding data to favourite
function addFavourite(movie){
    console.log("Heyy");
     if (window.localStorage.getItem("favourite")) {
        let favouriteMovieList = JSON.parse(window.localStorage.getItem("favourite"));
        favouriteMovieList.push(movie);
        window.localStorage.setItem("favourite", JSON.stringify(favouriteMovieList));
      } else {
        let favouriteMovieList = [];
        favouriteMovieList.push(movie);
        window.localStorage.setItem("favourite", JSON.stringify(favouriteMovieList));
      }
      window.location.reload();
}

// 
function unFavourite(movie){
    if (window.localStorage.getItem("favourite")) {
        let favouriteMovieList = JSON.parse(window.localStorage.getItem("favourite"));
        favouriteMovieList = favouriteMovieList.filter((value, ind) => {
          return value !== movie;
        });
        window.localStorage.setItem("favourite", JSON.stringify(favouriteMovieList));
    }
    window.location.reload();
}