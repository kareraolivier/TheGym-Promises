const fetchPromise = fetch(
  "https://handlers.education.launchcode.org/static/weather.json"
);
fetchPromise
  .then(function (response) {
    return response;
  })
  .then(function (response) {
    console.log(response);
  });
