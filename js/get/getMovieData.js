import { API_KEY, TMDB_API_URL } from "../config/constants/index.js";

export const getMovieData = async () => {
  const getPopularMovies = async (page = 1) => {
    const res = await fetch(
      `${TMDB_API_URL}/movie/popular?language=ko-KR&page=${page}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return res.results;
  };

  const getTopRatedMovies = async (page = 1) => {
    const res = await fetch(
      `${TMDB_API_URL}/movie/top_rated?language=ko-KR&page=${page}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return res.results;
  };

  const getUpcomingMovies = async (page = 1) => {
    const res = await fetch(
      `${TMDB_API_URL}/movie/upcoming?language=ko-KR&page=${page}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return res.results;
  };

  const getSearchedMovies = async (page, query) => {
    const queryToUnicode = encodeURIComponent(query);
    const res = await fetch(
      `${TMDB_API_URL}/search/movie?query=${queryToUnicode}&include_adult=false&language=ko-KR&page=${page}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return res.results;
  };

  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  return {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    getSearchedMovies,
  };
};
