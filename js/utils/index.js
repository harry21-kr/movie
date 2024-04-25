export async function get(url) {
  try {
    const response = (await fetch(url, { method: "GET" })).json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
