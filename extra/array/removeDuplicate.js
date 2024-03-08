// Input: arr[] = {2, 2, 2, 2, 2}
// Output: arr[] = {2}
// Explanation: All the elements are 2, So only keep one instance of 2.

// removeDuplicate / removeDuplicate;


function removeDuplicate(arr){
   let unique = [];
   
    for(let i = 0 ; i < arr.length; i++){
        let isUnique = true;
        for(let j = 0; j < i ; j++){
            if(arr[i] === arr[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            unique.push(arr[i]);
        }
    }
   return unique;
}


let numbers = [2, 2, 2, 2, 5];
let uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers); // Output: [2, 5]

