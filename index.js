function getWeather() {
  return new Promise(function (resolve, reject) {
    let a = 12;
    let b = 40;
    if (a > b) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
}

function getWeatherData(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      switch (weather) {
        case "resolved":
          resolve("we get data");
          break;
        case "resolvedone":
          resolve("we did get good data");
          break;
        default:
          reject("find data");
      }
    }, 2000);
  });
}

// first way ******************************************************

// const promise = getWeather();
// console.log(promise);
// promise.then(
//   function (data) {
//     console.log(data);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

//second way ******************************************************

function promiseResolved(data) {
  console.log("Resolved", data);
}
function promiseRejected(error) {
  console.log("Rejected", error);
}
getWeather().then(getWeatherData).then(promiseResolved, promiseRejected);
