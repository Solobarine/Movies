// Create Function to Get special id
/* const getUniqueId = async () => {
   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
   fetch(url, {
     method: 'POST',
   }).then((response) => response.text()).then((json) => console.log(json));
 };
 */
// sZdlIyu4dVy3uNIhS8YY

// Post Likes to Api
export const postLike = async (a) => {
   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/likes';
   fetch(url, {
     method: 'POST',
     body: JSON.stringify({
       item_id: 'item' + a,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   }).then((reply) => reply.json()).then((resp) => console.log(resp));
 };

// Get Likes from API
export const getLikes = async (a) => {
  console.log(a);
   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/likes';
   const data = await fetch(url);
   const parseData = await data.json();
   showLikes(parseData, a);
 };

// Display Number of Likes\
export const showLikes = (data, inp) => {
  const idIndex = 'item' + inp;
  console.log(idIndex);
  console.log(data);
  console.log(data[2].item_id);
  const likes = document.getElementsByClassName('l-num');
  console.log(likes[2]);
  for (let i = 0; i < data.length; i++) {
    if (idIndex === data[i].item_id) {
      likes[inp].innerHTML = data[i].likes
    }
  }
}

