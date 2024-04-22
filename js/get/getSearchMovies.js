import { TMDB_API_URL } from "../config/constants/index.js";
import { options } from "../config/themovie.js";

export const getSearchMovies = async (query) => {
  const queryToUnicode = encodeURIComponent(query);
  const res = await fetch(
    `${TMDB_API_URL}/search/movie?query=${queryToUnicode}&include_adult=false&language=ko-KR&page=1`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res.results;
};
