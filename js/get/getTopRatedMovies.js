import { API_KEY } from "../../env.js";
import { TMDB_API_URL } from "../config/constants/index.js";

export const getTopRatedMovies = async (page = 1) => {
  const res = await fetch(
    `${TMDB_API_URL}/movie/top_rated?language=ko-KR&page=${page}&api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return res.results;
};
