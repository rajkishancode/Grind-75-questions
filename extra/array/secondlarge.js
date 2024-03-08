// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.

let numbers = [12, 35, 1, 10, 34, 1,41]; 
//sort array in descending order // check arr[1] !== arr[0] // return second element
function secondLargest(arr){

 let first = arr[0]; //store first element 
 let second = first; // store value of first in other variable named second
 for(let i = 1; i < arr.length; i++){
    if(arr[i] > first){   // if number is more than first 
        second = first    // then update the second variable with current first variable value
        first = arr[i]    // update first variable  with current element
    }
    else if (arr[i] > second ) { // if number is more than second and less the first , update second variable with it.
      second = arr[i];
    }
 }
 return second;

}

console.log(secondLargest(numbers));
