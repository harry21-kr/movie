import { TMDB_API_URL } from "../config/constants/index.js";
import { options } from "../config/themovie.js";

export const getUpcomingMovies = async (page = 1) => {
  const res = await fetch(
    `${TMDB_API_URL}/upcoming?language=ko-KR&page=${page}`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res.results;
};
