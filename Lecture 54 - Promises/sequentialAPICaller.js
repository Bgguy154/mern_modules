// It means:
// Call API-1
// when it finishes → call API-2
// when it finishes → call API-3
// each API depends on the previous result
// With callbacks, each API call starts inside the previous callback.


function fetchUser(cb) {
  setTimeout(() => {
    cb(null, { id:1, name: "Tanmay" });
  }, 500);
}

function fetchPosts(user, cb) {
  setTimeout(() => {
    cb(null, ["post1", "post2"]);
  }, 500);
}

function fetchComments(posts, cb) {
  setTimeout(() => {
    cb(null, ["nice", "great"]);
  }, 500);
}


// fetchUser((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fetchPosts(user, (err, posts) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fetchComments(posts, (err, comments) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("User:", user);
//             console.log("Posts:", posts);
//             console.log("Comments:", comments);
//           }
//         });
//       }
//     });
//   }
// });



function onComments(err, comments) {
  if (err) return console.log(err);
  console.log(comments);
  console.log("All data fetched");
}

function onPosts(err, posts) {
  if (err) return console.log(err);
  console.log(posts);
  fetchComments(posts, onComments);
}

function onUser(err, user) {
  if (err) return console.log(err);
  console.log(user);
  fetchPosts(user, onPosts);
}

fetchUser(onUser);


// “Sequential API calling with callbacks leads to callback hell due to deeply nested dependent callbacks, 
// repetitive error handling, and poor readability, which is why Promises and async/await were introduced.”
