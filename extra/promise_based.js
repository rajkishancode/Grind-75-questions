/*
microtask_queue:[
(value = 8) => console.log(value + 1),
() => console.log(3),
() => console.log(5)


]
macrotask_queue:[
() => console.log(2),
() => console.log(6),
() => console.log(4)


]



first - 8
second - 1
third - 7
forth - 9
fifth - 3
sixth - 5
seventh -2
eight - 6
ninth - 4




*/

new Promise((resolve) => {
  console.log(8);
  resolve(8);
}).then((value) => console.log(value + 1));

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
