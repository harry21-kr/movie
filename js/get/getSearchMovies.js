import { API_KEY, TMDB_API_URL } from "../config/constants/index.js";

export const getSearchMovies = async (query) => {
  const queryToUnicode = encodeURIComponent(query);
  const res = await fetch(
    `${TMDB_API_URL}/search/movie?query=${queryToUnicode}&include_adult=false&language=ko-KR&page=1&api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res.results;
};
