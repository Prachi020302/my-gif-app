const API_KEY = "YOUR_GIPHY_API_KEY";
const BASE_URL = "https://api.giphy.com/v1/gifs";

async function searchGifs(query) {
  const response = await fetch(`${BASE_URL}/search?q=${query}&api_key=${API_KEY}`);
  const data = await response.json();
  return data.data;
}

export { searchGifs };
