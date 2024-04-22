import { getTopRatedMovies } from "./get/getTopRatedMovies.js";
import { renderMoviesInfo } from "./utils/renderMoviesInfo.js";

const topRatedMovies = await getTopRatedMovies();

const topMoviesContainer = document.getElementById("top-rated-movie-wrap");

const topRatedMovieElements = renderMoviesInfo(topRatedMovies);

topRatedMovieElements.forEach((topRatedMovieElement) => {
  topMoviesContainer.appendChild(topRatedMovieElement);
});
