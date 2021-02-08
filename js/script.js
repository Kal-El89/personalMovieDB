const numbersOfFilms = +prompt("How many movies have you watched?", "");
let askMovie;
let askScore;


const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <= 2; i++){
    askMovie = prompt("One of the last watched films?", "");
    askScore = prompt("How much would you rate it?", "");
    
    if(askMovie !== null && askScore !== null && askMovie.length <= 50 && askMovie !== "" && askScore !== ""){
        personalMovieDB.movies[askMovie] = askScore;
        console.log(personalMovieDB);
    } else {
        console.log("error");
        i--;
    }
}

if(personalMovieDB.count <= 10){
    console.log("You are noob");
}else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30){
    console.log("You are norm");
}else if(personalMovieDB.count > 30){
    console.log("You are pro");
}else{
    console.log("...");
}




