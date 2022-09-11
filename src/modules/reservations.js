// Post Comments to API
export const postReservation = async (a, b,c, d) => {
   const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/reservations';
  const id = 'item' + c
   fetch(url, {
     method: 'POST',
     body: JSON.stringify({
       item_id: id,
       username: a,
       date_start: b,
       date_end: d,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   }).then((reply) => reply.json()).then((val) => console.log(val));
 };

// Retrieve Comments from API
export const getReservation = async (c) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sZdlIyu4dVy3uNIhS8YY/reservations?item_id=item' + c;
   const recieve = await fetch(url);
  const data = await recieve.json();
   console.log(data);
   resvPop(data);
 };

// Populate DOM with comments
const resvPop =(arg) => {
  const list = document.querySelector('.comm');
  console.log(list);
  for (let i = 0; i < arg.length; i += 1) {
    list.innerHTML += `<p id="res-1" class="indi-comment">${arg[i].date_start}</p>
                       <p id="res-2" class="indi-comment">${arg[i].date_end}</p>
                       <p id="res-3" class="indi-comment">${arg[i].username}</p>`
  }
}
