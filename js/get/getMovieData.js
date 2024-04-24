import { API_KEY, TMDB_API_URL } from "../config/constants/index.js";
import { get } from "../utils/index.js";

export const getMovieData = async () => {
  const getPopularMovies = async (page = 1) => {
    const res = await get(
      `${TMDB_API_URL}/movie/popular?language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  const getTopRatedMovies = async (page = 1) => {
    const res = await get(
      `${TMDB_API_URL}/movie/top_rated?language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  const getUpcomingMovies = async (page = 1) => {
    const res = await get(
      `${TMDB_API_URL}/movie/upcoming?language=ko-KR&page=${page}&api_key=${API_KEY}`
    );
    return res.results;
  };

  const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  return {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  };
};
