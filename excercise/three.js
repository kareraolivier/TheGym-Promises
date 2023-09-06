/**
 * 
 * @param {*} callback1 
 * @param {*} callback2 
 * The code snippet below is synchronous. It calls callback1 one time and callback2 three times. You must modify this code to make it asynchronous with the following rules:

callback1 must be called only one time, after 2 seconds.
callback2 must be called three times with an interval of 1 second.
 */
function job(callback1, callback2) {
  setTimeout(function () {
    callback1();
  }, 2000);

  let counter = 0;
  function newone() {
    if (counter < 3) {
      callback2();
      counter++;
    }
  }

  setInterval(newone, 1000);
}

module.exports = job;
