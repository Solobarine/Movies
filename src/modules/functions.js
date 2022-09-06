// Import Elements
import movies from './movies.js';

// Function top display images on Home Page
const displayMovies = (array) => {
  for (let index = 0; index < array.length; index++) {
    movies.innerHTML += `<div class="movie-div">
                          <div class="sub-div">
                            <img src="${array[i]}" alt="" width="" height="" class="poster">
                            <p class="m-name"></p>
                            <i class="fa-regular fa-heart"></i>
                            <p class="l-num"></p>
                            </div>
                          <button class="commentBtn-1">Comment</button>
                         </div>`
  }
}

export { displayMovies };

// Function to 
