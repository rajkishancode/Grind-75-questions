// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for(let i = 0; i<s.length;i++){
        if(s[i] === "(" || s[i] === "["  ||  s[i] === "{" ){
            stack.push(s[i])
        }
        else{
            if(s.length === 0) return false;
            let topElement = stack.pop();
            if( (s[i] === ")" && topElement === "(" )  || (s[i] === "}" && topElement === "{" ) || (s[i] === "]" && topElement === "[" )){
                continue;
            }
            else{
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));