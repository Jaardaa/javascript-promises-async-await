import { fetchWithTimeout } from "./services";

const movies = require("./data/movies.json");

export function fetchMovies() {
    const resolveFunction = () => movies;
    fetchWithTimeout(1000)
    .then(resolveFunction())
 };

let moviePromise = fetchMovies();

moviePromise
    .then(res => console.log(res));



