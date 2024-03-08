//  check if it is sorted in ascending order or not.
// Input : 20 21 45 89 89 90
// Output : Yes

let numbers = [20, 21, 45, 89, 89, 90];
// ---- recursive approach
function arraySortedOrNot(arr, n) {
  if (n === 0 || n === 1) {
    //if array contains 1 or 0 element
    return true;
  }

  if (arr[n - 1] < arr[n - 2]) {
    // Unsorted pair found
    // checking last 2 element
    return false;
  }

  return arraySortedOrNot(arr, n - 1);
}

// console.log(arraySortedOrNot(numbers, 6));

// --iterative approach
function arraySortedOrNot1(arr,n){
    if(n === 0 || n === 1){
        return true;
    }

    for(let i = 1; i < arr.length; i++){
       if(arr[i - 1 ] >  arr[i]){
          return false;
       }
    }
    //no unsorted pair found
    return true;
}

console.log(arraySortedOrNot1(numbers, 6));
