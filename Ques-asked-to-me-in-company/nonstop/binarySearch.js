function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 5)); // 2
console.log(binarySearch(arr, 8)); // -1
