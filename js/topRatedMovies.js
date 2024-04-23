import { getMovieData } from "./get/getMovieData.js";
import { renderMoviesInfo } from "./utils/renderMoviesInfo.js";

const { topRatedMovies } = await getMovieData();

const topMoviesContainer = document.getElementById("top-rated-movie-wrap");

const topRatedMovieElements = renderMoviesInfo(topRatedMovies);

topRatedMovieElements.forEach((topRatedMovieElement) => {
  topMoviesContainer.appendChild(topRatedMovieElement);
});
