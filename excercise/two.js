/**
 * Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:

Your function must always return a promise
If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
 * @param {*} data 
 * @returns
 * 
 */

function job(data) {
  return new Promise(function (resolve, reject) {
    if (isNaN(data)) {
      reject("error");
    }
    if (data % 2 != 0) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    } else {
      setTimeout(() => {
        reject("even");
      }, 2000);
    }
  });
}

module.exports = job;

job()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
