function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log("1", data);

    return job(true);
  })
  //success

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }

    return job(true);
  })
  //Defeat

  .then(function (data) {
    console.log("2", data);
  })

  .catch(function (error) {
    console.log("3", error);

    return job(false);
  })

  .then(function (data) {
    console.log("4", data);

    return job(true);
  })

  .catch(function (error) {
    console.log("5", error);

    return "Error caught";
  })

  .then(function (data) {
    console.log("6", data);

    return new Error("test");
  })

  .then(function (data) {
    console.log("7 Success:", data.message);
  })

  .catch(function (data) {
    console.log("8 Error:", data);
  });

//Output
/**
   * 1 success
3 Defeat
5 error
6 Error caught
7 Success: test
   */
