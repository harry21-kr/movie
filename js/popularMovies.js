import { getMovieData } from "./get/getMovieData.js";
import { renderMoviesInfo } from "./utils/renderMoviesInfo.js";

const { popularMovies } = await getMovieData();

const popularMoviesContainer = document.getElementById("popular-movie-wrap");

const popularMovieElements = renderMoviesInfo(popularMovies);

popularMovieElements.forEach((popularMovieElement) => {
  popularMoviesContainer.appendChild(popularMovieElement);
});
