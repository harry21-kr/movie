import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export function renderMoviesDetailDialog(data) {
  const oldTitleTextTag = document.querySelector(
    ".movie-detail-dialog-title-text"
  );
  const oldVoteAverageTag = document.querySelector(
    ".movie-detail-dialog-vote-average-text"
  );
  const oldImgTag = document.querySelector(".movie-detail-img");
  const oldReleaseDateTag = document.querySelector(
    ".movie-detail-dialog-release-date-text"
  );

  if (oldImgTag && oldTitleTextTag && oldVoteAverageTag && oldReleaseDateTag) {
    oldImgTag.remove();
    oldReleaseDateTag.remove();
    oldTitleTextTag.remove();
    oldVoteAverageTag.remove();
  }

  const dialogTag = document.getElementById("movie-detail-dialog");

  const titleTag = document.createElement("h4");
  titleTag.classList.add("movie-detail-dialog-title-text");
  titleTag.textContent = data.title;

  const voteAverageTag = document.createElement("p");
  voteAverageTag.classList.add("movie-detail-dialog-vote-average-text");
  voteAverageTag.textContent = `평점: ${data.vote_average.toFixed(1)}점`;

  const posterTag = document.createElement("img");
  posterTag.classList.add("movie-detail-img");
  posterTag.src = `${TMDB_IMAGE_URL}${data.poster_path}`;

  const releaseDateTag = document.createElement("p");
  const formatReleaseDate = data.release_date.replace(/-/gi, ".");
  releaseDateTag.classList.add("movie-detail-dialog-release-date-text");
  releaseDateTag.textContent = `개봉 일자: ${formatReleaseDate}`;

  dialogTag.appendChild(posterTag);
  dialogTag.appendChild(titleTag);
  dialogTag.appendChild(voteAverageTag);
  dialogTag.appendChild(releaseDateTag);

  dialogTag.addEventListener("click", () => dialogTag.close());

  dialogTag.showModal();

  return dialogTag;
}
