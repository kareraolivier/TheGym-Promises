function getWeather() {
  return new Promise(function (resolve, reject) {
    let a = 120;
    let b = 40;
    if (a > b) {
      reject("rejected");
    } else {
      resolve("resolved");
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
        case "rejected":
          reject("we did get good data");
          break;
        default:
          reject("find data");
      }
    }, 2000);
  });
}

function promiseResolved(data) {
  console.log("Resolved", data);
}
function promiseRejected(error) {
  console.log("Rejected", error);
}

function promiseFinally() {
  console.log("Finally Done");
}

getWeather()
  .then(getWeatherData)
  .then(promiseResolved)
  .catch(promiseRejected)
  .finally(promiseFinally);
