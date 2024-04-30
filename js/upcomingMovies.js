import useMovieData from "./hook/useMovieData.js";
import MoviesInfo from "./components/MoviesInfo.js";
import { addShowDialogEvent } from "./utils/index.js";

const { getUpcomingMovies } = useMovieData();

const upcomingMovies = await getUpcomingMovies();

const upcomingMoviesContainer = document.getElementById("upcoming-movie-wrap");

const upcomingMoviesElements = MoviesInfo(upcomingMovies);

upcomingMoviesContainer.innerHTML = upcomingMoviesElements;

addShowDialogEvent(upcomingMovies);
