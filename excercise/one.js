/**
 * Let's do some practice with a simple exercice. You must modify the code below based on the following rules:

The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
 * @startingFunctionBelow
function job() {
    return 'hello world';
}

module.exports = job;
 */

//answer

function job() {
  return new Promise(function (aaa, bbb) {
    if (2 > 3) {
      bbb("is ok");
    } else {
      aaa("not ok");
    }
  });
}
module.exports = job;

job()
  .catch((er) => console.log("in catch", er))
  .then((res) => {
    console.log("in then", res);
  })

  .finally(console.log("ok"));
