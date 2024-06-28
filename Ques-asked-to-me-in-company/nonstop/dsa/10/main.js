//Write a function which takes an array and returns sub arrays.
//for eg if we pass [1, 1, 2, 2, 4, 4, 5, 5, 5] as input
// we should get [[1,1,2,2], [4,4,5,5,5]] as output.
//Basically sub array can only contain one pair of consecutive elements
// but those elements should repeat as many times as they repeated in original array.

function extractSubarrays(arr) {
  if (arr.length === 0) {
    return []; // Return empty array if input array is empty
  }

  let result = [];
  let currentSubarray = [arr[0]]; // Start with the first element in the subarray

  for (let i = 1; i < arr.length; i++) {
    // If the current element is the same as the previous one, or it's the next in sequence
    if (
      arr[i] === arr[i - 1] ||
      arr[i] === currentSubarray[currentSubarray.length - 1]
    ) {
      currentSubarray.push(arr[i]); // Add to the current subarray
    } else {
      // Push the current subarray to the result if a new sequence starts
      result.push(currentSubarray);
      // Start a new subarray with the current element
      currentSubarray = [arr[i]];
    }
  }

  // Push the last subarray to the result
  result.push(currentSubarray);

  return result;
}

// Example usage
const inputArray = [1, 1, 2, 2, 4, 4, 5, 5, 5];
console.log(extractSubarrays(inputArray)); // Output: [[1, 1, 2, 2], [4, 4, 5, 5, 5]]
