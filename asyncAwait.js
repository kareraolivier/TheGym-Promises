function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, username: "example_user" });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    // reject("karera");
    setTimeout(() => {
      resolve([
        { id: 101, title: "Post 1" },
        { id: 102, title: "Post 2" },
      ]);
    }, 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        postId: postId,
        comments: [
          { id: 1001, text: "Comment 1" },
          { id: 1002, text: "Comment 2" },
        ],
      });
    }, 1000);
  });
}

// async function fetchData() {
//   try {
//     const userData = await fetchUserData();
//     console.log("User data:", userData);

//     const userPosts = await fetchUserPosts(userData.id);
//     console.log("User posts:", userPosts);

//     const postWithComments = await fetchComments(userPosts[0].id);
//     console.log("Comments on the first post:", postWithComments);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// fetchData();

// function getData() {
fetchUserData()
  .then((res) => {
    console.log("User data:", res);
    return fetchUserPosts();
  })
  .then((res) => {
    console.log("User posts: ", res);
    return fetchComments(1);
  })
  .then((res) => {
    console.log("User posts: ", res);
  })
  .catch((er) => console.error("Error", er));
// }
// getData();
