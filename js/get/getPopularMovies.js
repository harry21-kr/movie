import { TMDB_API_URL } from "../config/constants/index.js";
import { options } from "../config/themovie.js";

export const getPopularMovies = async (page = 1) => {
  const res = await fetch(
    `${TMDB_API_URL}/movie/popular?language=ko-KR&page=${page}`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res.results;
};
