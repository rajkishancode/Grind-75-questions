// Given an integer array nums, return all the triplets [nums[i], nums[j],
//  nums[k]] such that i != j, i != k, and j != k,
//   and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let hashset = new Set();
    for (let j = i + 1; j < n; j++) {
        //calculate third element
      let third = -(nums[i] + nums[j]);
      //find element in the set
      if (hashset.has(third)) {
        let temp = [nums[i],nums[j],third];
        temp.sort((a,b) => a-b)
        ans.push(temp);  
    }
      hashset.add(nums[j]);
    }
  }
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));  //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));  //[]
console.log(threeSum([0, 0, 0]));  //[[0,0,0]]
