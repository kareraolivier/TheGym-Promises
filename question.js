// Create a function called createAlarm that generates a wake-up message for a person after a specified time delay. This function should accept two parameters: the person's name and the delay time in seconds.
// The function should return a promise that resolves with the wake-up message (e.g. Wake up person) but if the delay is less than 2 seconds, the promise should be immediately rejected with an error message stating Delay is not sufficient

//create func
const createAlarm = (name, wakeUpTime) => {
  let time = wakeUpTime * 1000;
  return new Promise((resolve, reject) => {
    if (wakeUpTime > 2) {
      setTimeout(() => {
        resolve(`Wake up ${name}`);
      }, time);
    } else {
      reject("Delay is not sufficient");
    }
  });
};

createAlarm("John", 6)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); // output "Delay is not sufficient"
  });

createAlarm("John", 1)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); // output "Delay is not sufficient"
  });
