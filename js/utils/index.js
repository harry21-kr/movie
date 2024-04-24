export async function get(url) {
  try {
    const response = await fetch(url, { method: "GET" }).then((res) =>
      res.json()
    );
    return response;
  } catch (err) {
    throw new Error("check api request.");
  }
}
