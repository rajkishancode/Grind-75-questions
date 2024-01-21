/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Input: (nums = [2, 7, 11, 15]), (target = 9);
// Output: [0, 1];
// var twoSum = function (nums, target) {};

// -------------------------brute force-------------------------------------

//time complexity - two loops so - O(N^2);
var twoSum = function (nums, target) {
    let result = [];
    for(let i = 0 ; i < nums.length; i++){
        for (let j = i + 1; j < nums.length ; j++ ){
           if(nums[i] + nums[j] === target){
            result.push(i);
            result.push(j)
            return result;
           }
        }
    }
    return [-1,-1];
};

// console.log(twoSum([1,12,3,4,12],24));

// --------------------Better Approach(using Hashing): -------------------------------

var twoSum1 = function (nums, target) {
   
    let map = new Map();

    for(let i = 0; i< nums.length; i ++){
        let num = nums[i];
        let moreNeeded = target - num;
        if(map.has(moreNeeded)){
            let numIndex = map.get(moreNeeded); 
            return [numIndex, i];
        }
        map.set(num,i)
    }
    return [-1,-1];
}

console.log(twoSum1([0, 7, 11, 15], 9));