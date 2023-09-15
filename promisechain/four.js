function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://api.publicapis.org/random");
  req.onload = function () {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  req.send();
}
function myDisplayer(data) {
  console.log(data);
}
getFile(myDisplayer);

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://example.com/api/data", true);

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     // Request was successful
//     console.log(xhr.responseText);
//   } else {
//     // Handle errors
//   }
// };

// xhr.onerror = function () {
//   // Handle network errors
// };

// xhr.send();
