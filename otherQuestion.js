// Imagine you are developing a real-time news application, and you need to fetch posts from three different sources
//to provide users with the latest updates.

// The API endpoints for getting posts are:

// - https://dummyjson.com/posts
// - https://this-may-not-exist.com/posts
// - https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents
// data from the source that responds the quickest, while ignoring slower or potentially unreliable sources.
// getFastPosts().then((posts) => {
// 	console.log(posts)
// })

//fetch data from apis

//get data from 3 apis

const fetchOnce = () => {
  return new Promise((resolve, reject) => {
    let data = fetch("https://dummyjson.com/posts");
    resolve(data.Json());
  });
};
const fetchTwo = () => {
  return new Promise((resolve, reject) => {
    let data = fetch("https://this-may-not-exist.com/posts");
    resolve(data.Json());
  });
};
const fetchThree = () => {
  return new Promise((resolve, reject) => {
    let data = fetch("https://jsonplaceholder.typicode.com/posts");
    resolve(data.Json());
  });
};

function getFastPosts() {
  return Promise.any([fetchOnce(), fetchTwo(), fetchThree()]);
}

getFastPosts().then((posts) => {
  console.log(posts);
});
