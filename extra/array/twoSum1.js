// Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 

// Examples: 

// Input: arr[] = {0, -1, 2, -3, 1}, x= -2
// Output: Yes
// Explanation:  If we calculate the sum of the output,1 + (-3) = -2


let numbers = [0, -1, 2, -3, 1];


function twoSum(arr,target){
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return true
            }
        }
        
    }
    return false;
}

console.log(twoSum(numbers,13));