// const isPalindrome = (s) => {
//      let s = s.toLowerCase().replace(/[^a-z0-9]/g,"");
//     //  let s = s.toLowerCase().replace(/[^a-z0-9]/g,"");
//     console.log(s)
// }




function triplet(n, arr) {
  let st = new Set();
  let ans = [];

  // check all possible triplets:
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  //store the set in the answer:
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}



