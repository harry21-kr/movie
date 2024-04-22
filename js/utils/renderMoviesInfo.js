import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export function renderMoviesInfo(data) {
  const movieElements = data.map((movie) => {
    const divTag = document.createElement("div");
    divTag.setAttribute("id", `movie-item-${movie.id}`);
    divTag.classList.add("movie-content-wrap");

    const titleTag = document.createElement("h4");
    titleTag.textContent = movie.title;

    // const overviewTag = document.createElement("p");
    // overviewTag.textContent = movie.overview;

    const voteAverageTag = document.createElement("p");
    voteAverageTag.classList.add("movie-vote-average-text");
    voteAverageTag.textContent = movie.vote_average;

    const posterTag = document.createElement("img");
    posterTag.src = `${TMDB_IMAGE_URL}${movie.poster_path}`;

    const releaseDateTag = document.createElement("p");
    const formatReleaseDate = movie.release_date.replace(/-/gi, ".");
    releaseDateTag.classList.add("movie-release-date-text");
    releaseDateTag.textContent = formatReleaseDate;

    divTag.appendChild(posterTag);
    divTag.appendChild(titleTag);
    // divTag.appendChild(overviewTag);
    divTag.appendChild(voteAverageTag);
    divTag.appendChild(releaseDateTag);

    return divTag;
  });

  return movieElements;
}
