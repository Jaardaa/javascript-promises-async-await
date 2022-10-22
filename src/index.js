
import { fetchMovies, fetchBooks, fetchWithTimeout } from "./services";

const movies = require("./data/movies.json");

function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies]) => ([
            books,
            movies
        ]))
        .catch(error => console.log("Error fetching books and movies", error));
}


const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then(
    results => { console.log('getBooksAndMoviesPromise', results)}
)

function getBooksorMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
      .then(results => results)
      .catch((error) =>
        console.log("Error waiting for the promise race", error)
      );
}

const getBooksOrMoviesPromise = getBooksorMovies();

getBooksOrMoviesPromise.then(
    results => {console.log("getBooksOrMoviesPromise", results);}
)


/* export function fetchMovies() {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
} */

/* const moviePromise = fetchMovies();
moviePromise.then((results) => {
  console.log(results);
}); */
