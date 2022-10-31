// Import Elements
import {getComments, postComments} from './comments.js';
import movies, {commentPopup, reservePopup} from './elements.js';
import { getLikes, postLike } from './likes.js';
import {getReservation, postReservation} from './reservations.js';

// Import Functions

const closeModal = (modal, overlay) => {
  modal.innerHTML = '';
  modal.classList.remove('popup');
  overlay.classList.remove('overlay');
}

// Function top display images on Home Page
export const displayMovies = (input, input2, input3) => {
   for (let index = 0; index < input.length; index++) {
     movies.innerHTML += `<div class="movie-div">
                           <div class="sub-div">
                             <img src="${input[index]}" alt="" width="" height="" class="poster">
                             <p class="m-name">${input2[index]}</p>
                             <i class="fa-regular fa-he"></i>
                             <button class="fa-heart">Like</button>
                             <p class="l-num" id="${input3[index]}"></p>
                             </div>
                           <button class="commentBtn-1">Comment</button>
                           <button class="reserveBtn-1">Reservation</button>
                          </div>`;
   }
  //console.log(movies.children);
  likesGalore();
 };

// Event Listener Function for Comment Button
movies.addEventListener('click', (e) => {
  const allButtons = Array.from(document.querySelectorAll('.commentBtn-1'));
  console.log(allButtons);
  if (e.target.classList.contains('commentBtn-1')) {
    const target = e.target;
    const index = allButtons.indexOf(target);
    const item = e.target.parentElement;
    commentPopup.innerHTML = '';
    commentPopup.innerHTML = `<div class="c-popup">
                                <p class="x">x</p>
                                <img src="" alt="" class="poster">
                                <div class="bio"></div>
                                <h2 class="comm-1">Comments</h2>
                                <div class="comm"></div>
                                <h2 class="add-com">Add Comments</h2>
                                <input type="text" name="name" class="un" placeholder="Enter Your Name">
                                <input type="text" name="comments" class="uc" placeholder="Write Comments">
                                <button class="submit">Comment</button>
                                </div>`
  }
  const pic = document.querySelector('.pic');
  const overlay = document.querySelector('#lay');
  const close = document.querySelector('.x');
  console.log(pic);
  commentPopup.classList.add('popup');
  overlay.classList.add('overlay');
  close.addEventListener('click', () => closeModal(commentPopup, overlay));
})

/// Event Listener for Comment Section Button
commentPopup.addEventListener('click', (e) => {
   if (e.target.classList.contains('submit')) {
    const item = e.target.parentElement;
     e.target.classList.add('test');
     // Get Index of comment button
    const buttons = document.getElementsByClassName('commentBtn-1')
    const list = [];
    for (let i = 0; i < buttons.length; i++) {
       list.push(buttons[i].className);
    }
    const index = list.indexOf('commentBtn-1 test');
    // Get data from input fields
    const userName = document.querySelector('.un')
    const userComment = document.querySelector('.uc')
    // Send Comments to API
    postComments(userName.value, userComment.value, index)
    // Recieve Comments from API
    e.target.classList.remove('test');
   }
})

// Event Listener for Like Button
movies.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
    e.target.classList.add('love');
    // Get Index of Like Button
    const likeBtns = document.getElementsByClassName('fa-heart')
    const likeArray = [];
    for (let i = 0; i < likeBtns.length; i++) {
       likeArray.push(likeBtns[i].className);
    }
    const index = likeArray.indexOf('fa-heart love');
    //  Post a Like
    postLike(index);
    // Get number of Likes
    getLikes(index);
    likesGalore();
       e.target.classList.remove('love');
  }
})

// Show Likes without clicking Like Button
export const likesGalore = async() => {
  // Get Likes from API
   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/likes';
   const data = await fetch(url);
   const parseData = await data.json();
   const val = movies.getElementsByClassName('l-num');
   const arr = Array.from(val)
   console.log(arr);
   arr.forEach(element => {
     const iden = element.id;
     const gary = 'item' + iden;
     namy(parseData, gary, element)
  });

  }

// Show comments when loading the page

const listComment = (m) => {
  if (m.target.classList.contains('commentBtn-1')) {
    m.target.classList.add('maybe');
    const btns = movies.getElementsByClassName('commentBtn-1');
    const lis = [];
    for (let i = 0; i < btns.length; i++) {
        lis.push(btns[i].className);
    }
    const ind = lis.indexOf('commentBtn-1 maybe');
    // Get Comments
    getComments(ind);
    m.target.classList.remove('maybe');
  }
}

movies.addEventListener('click', listComment)

// Return Number of Likes
function namy(array, b, c) {
  for (let index = 0; index < array.length; index++) {
    if (b === array[index].item_id) {
     c.innerHTML = array[index].likes; 
    }
    
  }
}

// See Reservations Page
movies.addEventListener('click', (e) => {
  if (e.target.classList.contains('reserveBtn-1')) {
    const item = e.target;
    console.log('click');
    console.log(item);
    reservePopup.classList.add('popup');
    reservePopup.innerHTML = `<div class="reserve-page">
                                <p class="close">&#9447</p>
                                <img src="" alt="" class="movie-poster">
                                <div class="desc"></div>
                                <h2 class="r-header">Reservations</h2>
                                <div class="r-made"></div>
                                <h3 class="add-reservation">Make Reservations</h3>
                                <input type="date" class="start-date" placeholder="Start Date">
                                <input type="date" class="end-date" placeholder="End Date">
                                <input type="text" class="userName" placeholder="Enter your Name">
                                <button class="resBtn">Reserve</button>
                                </div>`
  }
  const close = document.querySelector('.close');
  const overlay = document.querySelector('#lay');
  close.addEventListener('click', () => closeModal(reservePopup, overlay));
})

// Send and Display Reservations on click
reservePopup.addEventListener('click', (e) => {
  if (e.target.classList.contains('resBtn')) {
   // Asign id
   e.target.classList.add('id-sake');
   const rButtons = document.getElementsByClassName('reserveBtn-1')
   const res = [];
   for (let i = 0; i < rButtons.length; i += 1) {
     res.push(rButtons[i].classList)
   }
   const index = res.indexOf('reserveBtn-1 id-sake');
   console.log(index)
   // Make Reservations
  const startDate = document.querySelector('.start-date');
  const user = document.querySelector('.userName');
  const endDate = document.querySelector('.end-date');
  postReservation(user.value, startDate.value, index, endDate.value);
  // Get and Display Reservations
  getReservation(index);
  }
})

// Show Reservations on page Load

