// Post Comments to API
// const postComments = async (a, b) => {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/comments';
//   fetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: 'item1',
//       username: a,
//       comment: b,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then((reply) => reply.json()).then((val) => console.log(val));
// };

// // Retrieve Comments from API
// const getComments = async () => {
//   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/comments';
//   const recieve = await fetch(url);
//   const data = await recieve.json();
//   console.log(data);
// };
