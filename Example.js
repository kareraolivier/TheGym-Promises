function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
      )
        .then((res) => res.json())
        .then((data) => resolve(data));
    }, 3000);
  });
}
let data = getWeather()
  .then((res) => console.log("karera", res))
  .catch((er) => console.log(er))
  .finally(() => "done");

// data.then((res) => {
//   console.log(res);
// });
