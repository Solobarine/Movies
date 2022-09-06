// Import Functions
import { displayMovies } from "./functions.js";

// Collect Data from Movies API
const getMovies = async() => {
  const url ='https://api.tvmaze.com/shows/1/images';
  const list = await fetch(url);
  const data = await list.json();
  const images = [];
  for (let i = 0; i < data.length; i++) {
    images.push(data[i].resolutions.original.url);
  }
  console.log(images);
  displayMovies(images);
}

export default getMovies;
