<!-- what are all the search algorithm explain in js? -->
<!-- what are all the sort algorithm explain in js? -->
<!-- which algorithm is used behind the scene in sort method? -->
<!-- what are step to revert the code you pushed to the git? -->
<!-- how to persist data on frontend app on refresh without using local,session or cookie storage etc -->
<!-- redux working -->
<!-- write  a function that add two numbers without using + operator -->
<!-- explain linked list and types of linked list -->
 <!-- what are interfaces in OOPS? -->
 <!-- how to implement redux in class-based component -->

<!-- code i write for write a optimise search algorithm -->
function binarySearch(arr,target){
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right){
     let mid = Math.floor((left + right)/2);
     if(arr[mid] === target){
     return mid;
     }
     if(target > left){
       left = left + mid 
     }
     if(target < right){
     right = right - mid
     }
  }
  return -1;
}

binarySearch([3,4,11,25,22,12,31,17,81],22)