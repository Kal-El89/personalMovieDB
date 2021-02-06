const numbersOfFilms = +prompt("How many movies have you watched?", ""),
    askMovie = prompt("One of the last watched films?", ""),
    askScore = prompt("How much would you rate it?", "");

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



personalMovieDB.movies[askMovie] = askScore;

console.log(personalMovieDB);
