import { TMDB_IMAGE_URL } from "../config/constants/index.js";
import { renderMoviesDetailDialog } from "./renderMoviesDetailDialog.js";

export function renderMoviesInfo(data) {
  const movieElements = data.map((movie, idx) => {
    const divTag = document.createElement("div");
    divTag.setAttribute("id", `movie-item-${movie.id}`);
    divTag.classList.add("movie-content-wrap");
    divTag.addEventListener("click", () => {
      renderMoviesDetailDialog(movie);
      alert(movie.id);
    });

    const titleTag = document.createElement("h4");
    titleTag.textContent = movie.title;

    const voteAverageTag = document.createElement("p");
    voteAverageTag.classList.add("movie-vote-average-text");
    voteAverageTag.textContent = `평점: ${movie.vote_average.toFixed(1)}점`;

    const posterTag = document.createElement("img");
    posterTag.src = `${TMDB_IMAGE_URL}${movie.poster_path}`;

    const releaseDateTag = document.createElement("p");
    const formatReleaseDate = movie.release_date.replace(/-/gi, ".");
    releaseDateTag.classList.add("movie-release-date-text");
    releaseDateTag.textContent = `개봉 일자: ${formatReleaseDate}`;

    const rankTag = document.createElement("p");
    rankTag.classList.add("movie-rank-text");
    rankTag.textContent = idx + 1;

    divTag.appendChild(posterTag);
    divTag.appendChild(titleTag);
    divTag.appendChild(voteAverageTag);
    divTag.appendChild(releaseDateTag);
    divTag.appendChild(rankTag);

    return divTag;
  });

  return movieElements;
}
