// Longest Common Prefix using Sorting

function longestCommonPrefix(arr){
    

    let size = arr.length;
    
    if(arr.length === 0) return "";
    if(arr.length === 1 ) return arr[0];
    
    arr.sort()

    let end = Math.min(arr[0].length, arr[size - 1].length); // smallest element b/w 1st & last

    
    let i = 0;
    while(i < end && arr[0][i] === arr[size - 1][i]){
        i++;
    }
    let pre = arr[0].substring(0,i);
   
    return pre;

}

let input = ["geeksforgeeks", "geeks", "geek", "geezer",];
// Your code here
console.log(longestCommonPrefix(input));