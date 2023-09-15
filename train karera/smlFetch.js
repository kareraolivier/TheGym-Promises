// const { useResetProjection } = require("framer-motion");

// function fetchData() {
//   const req = new XMLHttpRequest();
//   req.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
//   req.onload = function () {
//     if (req.status == 200) {
//       console.log(req.response.json());
//     } else {
//       console.log("error", req);
//     }
//   };
//   req.send();
// }
// console.log(fetchData());

function myPromiseReturner(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("error", req.response);
      }
    };
    req.send();
  });
}
myPromiseReturner("https://dummy.restapiexample.com/api/v1/employees");
