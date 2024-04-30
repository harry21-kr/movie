import MoviesDetailDialog from "../components/MoviesDetailDialog.js";

export async function get(url) {
  try {
    const response = (await fetch(url, { method: "GET" })).json();
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export function addShowDialogEvent(movies) {
  movies.forEach((movie) => {
    const container = document.getElementById(`movie-item-${movie.id}`);
    container.addEventListener("click", () => {
      MoviesDetailDialog(movie);
      alert(movie.id);
    });
  });
}
