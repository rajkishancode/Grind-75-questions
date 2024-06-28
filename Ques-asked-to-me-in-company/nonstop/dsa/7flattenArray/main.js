//Flatten an array without using inbuilt js methods

function FlattenArray(arr) {
  //1.return arr.flat(Infinity); with built in method

  let result = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      for (let i of item) {
        flatten(i);
      }
    } else {
      result.push(item);
    }
  }

  flatten(arr);
  return result;
}

//using reduce function

// function flatArr(arr) {
//   return arr.reduce((accu, curr) => {
//     if (Array.isArray(curr)) {
//       accu = [...accu, ...flatArr(curr)];
//     } else {
//       accu = [...accu, curr];
//     }
//     return accu;
//   }, []);
// }

console.log(
  FlattenArray([
    [1, 2],
    [3, 4, [5, 6, [7, [8, [9]]]]],
  ])
);
