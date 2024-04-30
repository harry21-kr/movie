import useMovieData from "./hook/useMovieData.js";
import MoviesInfo from "./components/MoviesInfo.js";
import { addShowDialogEvent } from "./utils/index.js";

const { getPopularMovies } = useMovieData();

const popularMovies = await getPopularMovies();

const popularMoviesContainer = document.getElementById("popular-movie-wrap");

const popularMovieElements = MoviesInfo(popularMovies);

popularMoviesContainer.innerHTML = popularMovieElements;

addShowDialogEvent(popularMovies);
