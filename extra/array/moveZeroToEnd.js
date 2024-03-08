// Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};
// move zeroes to end

let numbers = [1, 2, 0, 4, 3, 0, 5, 0];
function moveZeroToEnd(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < n) {
    arr[count++] = 0;
  }
  return arr;
}

console.log(moveZeroToEnd(numbers));
