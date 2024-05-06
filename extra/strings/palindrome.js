function isPalindrome(str){
  let updatedStr = str.toLowerCase();
  let reversedStr = ""
  let last = str.length - 1;
  for(let i = last; i >= 0; i--){
    if(str[i] !== ""){
        
        reversedStr += str[i];
    }
  }
  return updatedStr === reversedStr.toLowerCase();
}



let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
