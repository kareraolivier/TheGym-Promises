// const solvingArray = (array) => {
//   return array.map((ar) => (ar === "$" ? "\\" + ar : ar));
// };
// console.log(solvingArray(["y", "/", "?", "!", "$"]));

const solvingArray = (array) => {
  return array.map((ar) => (ar === "$" ? "\\$" : ar));
};

const result = solvingArray(["y", "/", "?", "!", "$"]);
console.log(result);
// result.forEach((item) => {
//   console.log(item, "Length:", item.length);
// });

//   Solve the question below level : [karera kata]
//   your are given an array of strings like this ["karera", "/", "david", "!", "$", ""]
//   Task is to add backslash("\") where you find any special characterlike: example (!,@,#,?,$,*,%,&,...)
//   also if the string is empty("") add backslash ('\')

//   const solvingArray = (array:string[]):string[] => {
//   return;
//   };

//   expected output ["karera", "\/", "david", "\!", "\$", "\"] from ["karera", "/", "david", "!", "$", ""]
//   expected output ["karera", "kimon", "david", "\!", "\$", "noella"] from ["karera", "kimon", "david", "!", "$", "noella"]
//   expected output ["divine", "\", "fabien", "\!", "\%",] from ["divine", "", "fabien", "!", "%"]
