import { getMovieData } from "./get/getMovieData.js";
import { renderMoviesInfo } from "./utils/renderMoviesInfo.js";

const { upcomingMovies } = await getMovieData();

const upcomingMoviesContainer = document.getElementById("upcoming-movie-wrap");

const upcomingMoviesElements = renderMoviesInfo(upcomingMovies);

upcomingMoviesElements.forEach((upcomingMoviesElement) => {
  upcomingMoviesContainer.appendChild(upcomingMoviesElement);
});
