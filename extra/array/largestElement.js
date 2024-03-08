// Recommended Problem
// Largest Element in Array
// Input : 
let numbers = [20, 10, 20, 4, 100]
// Output : 100


function largestNumber(arr){
    let maxNum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxNum ){
            maxNum = arr[i]
        }
    }
    return maxNum;

}

console.log(largestNumber(numbers))