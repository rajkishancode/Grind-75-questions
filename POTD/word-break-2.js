/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

/*
* Input: (s = "catsanddog"), (wordDict = ["cat", "cats", "and", "sand", "dog"]);
* Output: ["cats and dog", "cat sand dog"];

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: []
*/

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict); // Convert wordDict to a set for faster lookup
    const memo = {}; // Object to memoize results

    function helper(sub_s) {
        if (memo[sub_s] !== undefined) { // Return memoized result if available
            return memo[sub_s];
        }
        if (sub_s === '') { // If the substring is empty, return an array with an empty string
            return [''];
        }

        const results = [];
        for (let end = 1; end <= sub_s.length; end++) {
            const word = sub_s.slice(0, end);
            if (wordSet.has(word)) { // Check if the prefix is a valid word
                const suffixes = helper(sub_s.slice(end));
                for (const suffix of suffixes) {
                    results.push(suffix ? word + ' ' + suffix : word);
                }
            }
        }

        memo[sub_s] = results; // Memoize the result
        return results;
    }

    return helper(s);
}

// Example usage
const s1 = "catsanddog";
const wordDict1 = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(s1, wordDict1)); // Output: ["cats and dog", "cat sand dog"]

// const s2 = "pineapplepenapple";
// const wordDict2 = ["apple", "pen", "applepen", "pine", "pineapple"];
// console.log(wordBreak(s2, wordDict2)); // Output: ["pine apple pen apple", "pineapple pen apple", "pine applepen apple"]

// const s3 = "catsandog";
// const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
// console.log(wordBreak(s3, wordDict3)); // Output: []

