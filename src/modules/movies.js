// Import Functions
import { displayMovies } from './functions.js';

// Collect Data from Movies API
 const getMovies = async () => {
   const url = 'https://api.tvmaze.com/shows';
   const list = await fetch(url);
   const data = await list.json();
   console.log(data);
   const images = [];
   const titles = [];
   const ids = [];
   for (let i = 0; i < 35; i++) {
     images.push(data[i].image.medium);
     titles.push(data[i].name);
     ids.push(data[i].id -1);
   }
   console.log(ids);
   displayMovies(images, titles, ids);
 };

 export default getMovies;
