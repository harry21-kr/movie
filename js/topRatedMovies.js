import useMovieData from "./hook/useMovieData.js";
import MoviesInfo from "./components/MoviesInfo.js";
import { addShowDialogEvent } from "./utils/index.js";

const { getTopRatedMovies } = useMovieData();

const topRatedMovies = await getTopRatedMovies();

const topMoviesContainer = document.getElementById("top-rated-movie-wrap");

const topRatedMovieElements = MoviesInfo(topRatedMovies);

topMoviesContainer.innerHTML = topRatedMovieElements;

addShowDialogEvent(topRatedMovies);
