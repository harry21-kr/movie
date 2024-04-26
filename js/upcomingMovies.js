import { useMovieData } from "./hook/useMovieData.js";
import { renderMoviesInfo } from "./utils/renderMoviesInfo.js";

const { getUpcomingMovies } = useMovieData();

const upcomingMovies = await getUpcomingMovies();

const upcomingMoviesContainer = document.getElementById("upcoming-movie-wrap");

const upcomingMoviesElements = renderMoviesInfo(upcomingMovies);

upcomingMoviesElements.forEach((upcomingMoviesElement) => {
  upcomingMoviesContainer.appendChild(upcomingMoviesElement);
});
