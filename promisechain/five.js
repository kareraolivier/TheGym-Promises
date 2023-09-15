// const myCallback = (accumulator, currentValue = 0, index = 0, array) => {

//     for (let i=0; i<=array.length; i++){

//     }
//   return [accumulator, currentValue, index, array];
// };
// // console.log(myCallback(1, 2, 1, [1,4,5,2,7,8]))
// const myCallbackValue = myCallback(1, 2, 1, [1, 4, 5, 2, 7, 8]);

// const myReduce = (myCallbackValue, initialValue) => {
//   return myCallbackValue;
// };
// console.log(myReduce(myCallback(1, 2, 1, [1, 4, 5, 2, 7, 8]), 5));

// ................................................................................................................
// function customReduce(arr, callback, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : arr[0];

//   const startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i], i, arr);
//   }

//   return accumulator;
// }

// ....................................................................................................................................................................

// const numbers = [1, 2, 3, 4, 5, 23, 90];
// const test = (arr) => {
//   return arr.customReduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// };
// console.log(test([2, 4, 7, 12, 9]));

// const sum = customReduce(
//   numbers,
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(sum);

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const test = (arr) => {
  return arr.customReduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

console.log(test([2, 4, 7, 12, 9])); // Output: 34
