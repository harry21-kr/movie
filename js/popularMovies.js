import { getPopularMovies } from "./get/getPopularMovies.js";
import { renderMoviesInfo } from "./utils/renderMoviesInfo.js";

const popularMovies = await getPopularMovies();

const popularMoviesContainer = document.getElementById("popular-movie-wrap");

const popularMovieElements = renderMoviesInfo(popularMovies);

popularMovieElements.forEach((popularMovieElement) => {
  popularMoviesContainer.appendChild(popularMovieElement);
});
