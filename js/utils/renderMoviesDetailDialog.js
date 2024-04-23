import { TMDB_IMAGE_URL } from "../config/constants/index.js";

export function renderMoviesDetailDialog(data) {
  const oldWrapTag = document.querySelector(".movie-detail-dialog-wrap");

  if (oldWrapTag) {
    oldWrapTag.remove();
  }

  const dialogTag = document.getElementById("movie-detail-dialog");

  const wrapTag = document.createElement("div");
  wrapTag.classList.add("movie-detail-dialog-wrap");

  const textWrapTag = document.createElement("div");
  textWrapTag.classList.add("movie-detail-dialog-text-wrap");

  const titleTag = document.createElement("h4");
  titleTag.classList.add("movie-detail-dialog-title-text");
  titleTag.textContent = data.title;

  const descriptionTag = document.createElement("p");
  descriptionTag.classList.add("movie-detail-dialog-description-text");
  descriptionTag.textContent = data.overview;

  const posterTag = document.createElement("img");
  posterTag.classList.add("movie-detail-dialog-img");
  posterTag.src = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;

  const releaseDateTag = document.createElement("p");
  const formatReleaseDate = data.release_date.replace(/-/gi, ".");
  releaseDateTag.classList.add("movie-detail-dialog-release-date-text");
  releaseDateTag.textContent = formatReleaseDate;

  textWrapTag.appendChild(titleTag);
  textWrapTag.appendChild(releaseDateTag);
  textWrapTag.appendChild(descriptionTag);
  wrapTag.appendChild(posterTag);
  wrapTag.appendChild(textWrapTag);
  dialogTag.appendChild(wrapTag);

  dialogTag.addEventListener("click", () => dialogTag.close());

  dialogTag.showModal();

  return dialogTag;
}
