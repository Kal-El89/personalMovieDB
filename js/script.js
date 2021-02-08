let numbersOfFilms;
let askMovie;
let askScore;
let askGenre;

function start(){
    while(numbersOfFilms == "" || numbersOfFilms == null){
        numbersOfFilms = +prompt("How many movies have you watched?", "");
    }
}
start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function myMoviesScores(){
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
}

myMoviesScores();


function myDB(){
if(personalMovieDB.count <= 10){
    console.log("You are noob");
}else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30){
    console.log("You are norm");
}else if(personalMovieDB.count > 30){
    console.log("You are pro");
}else{
    console.log("...");
}
}

myDB();

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
    askGenre = prompt(`Your favoruite genre ${i}?`);
    personalMovieDB.genres[i - 1] = askGenre;
    }

}
writeYourGenres();