let numbers = [1,2,3,4,5];

function twoSum(numbers,sum){
let left = 0;
let right = numbers.length - 1;
while(left < right){
    let numSum = numbers[left] + numbers[right];
    if(numSum === sum) return [left,right]
    else if(numSum < sum){
        left ++
    }
    else{
        right--
    }
}
return false;
}


// console.log(twoSum(numbers,5))


// -------using hashmap---------------

function twoSum1(numbers,target){
    const map = new Map();
    
    for(let i =0;i<numbers.length;i++){
        let num = numbers[i];
        let neededNum = target - num;
        if(map.has(neededNum)){
            let numIndex = map.get(neededNum);
            return [numIndex,i]
        }
        map.set(num,i)
    }
    
    return [-1,-1];
}
console.log(twoSum1(numbers, 5));



