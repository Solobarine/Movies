// Create Function to Get special id
// const getUniqueId = async () => {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
//   fetch(url, {
//     method: 'POST',
//   }).then((response) => response.text()).then((json) => console.log(json));
// };

// getUniqueId();

// sZdlIyu4dVy3uNIhS8YY

// Post Likes to Api
// const postLike = async () => {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/likes';
//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: '1',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then((reply) => reply.json()).then((resp) => console.log(resp));
// };

// Get Likes from API
// const getLikes = async () => {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/likes';
//   const data = await fetch(url);
//   const parseData = await data.json();
//   console.log(parseData);
// };
