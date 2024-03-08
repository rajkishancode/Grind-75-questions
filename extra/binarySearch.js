let nums = [1,2,3,4,5];
function binarySearch(numbers,target){
    let left = 0
    let right = numbers.length - 1;
    while (left < right){
        let mid = Math.floor((left + right)/2);
        if(numbers[mid] === target){
            return true
        }
        else if (target > numbers[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }

    }
    return false;
}

console.log(binarySearch(nums,1));
