[ Question  - 1 ]
Function: twoSum1

Input: 
   - nums: array of integers
   - target: target sum

Output:
   - Array containing the indices of the two numbers whose sum is equal to the target, or [-1, -1] if not found

Pseudo Code:
   1. Initialize an empty Map to store the indices of numbers.
   2. Loop through the array 'nums' using index 'i' from 0 to the length of 'nums'.
      a. Get the current number 'num' at index 'i'.
      b. Calculate 'moreNeeded' as the difference between 'target' and 'num'.
      c. Check if 'moreNeeded' is present in the Map.
         i. If yes, get the index of 'moreNeeded' from the Map and the current index 'i'.
         ii. Return [index of moreNeeded, i].
      d. If 'moreNeeded' is not in the Map, set the current number 'num' in the Map with index 'i'.
   3. If no pair is found during the loop, return [-1, -1].

-----------------------------------------------------------------------------------------------------
2
Function: isValid

Input: 
   - s: string containing parentheses, square brackets, and curly braces

Output:
   - Boolean indicating whether the input string has valid pairing of parentheses, square brackets, and curly braces

Pseudo Code:
   1. Initialize an empty stack to keep track of open parentheses, square brackets, and curly braces.
   2. Loop through each character 'ch' in the input string 's'.
      a. If 'ch' is an open parenthesis, square bracket, or curly brace:
         i. Push 'ch' onto the stack.
      b. If 'ch' is a closing parenthesis, square bracket, or curly brace:
         i. If the stack is empty, return false (unmatched closing parenthesis).
         ii. Pop the top element 'topElement' from the stack.
         iii. Check if 'topElement' matches the corresponding opening character for 'ch'.
             - If yes, continue to the next iteration.
             - If no, return false (mismatched parentheses, square brackets, or curly braces).
   3. After the loop, check if the stack is empty.
      - If yes, return true (all parentheses, square brackets, and curly braces are properly matched).
      - If no, return false (unmatched open parentheses, square brackets, or curly braces remaining).

-----------------------------------------------------------------------------------------------------
3
Function: mergeTwoLists

Input:
   - list1: head of the first sorted linked list
   - list2: head of the second sorted linked list

Output:
   - head of the merged sorted linked list

Pseudo Code:
   1. Create a dummy node to serve as the starting point of the merged list. Initialize 'dummy' with a value of -1.
   2. Initialize a 'current' pointer to point to the dummy node.
   3. Traverse both input linked lists ('list1' and 'list2') until either of them becomes null:
      a. If the value of the current node in 'list1' is less than the value of the current node in 'list2':
         i. Set 'current.next' to 'list1'.
         ii. Move 'list1' to the next node in its list.
      b. If the value of the current node in 'list2' is less than or equal to the value of the current node in 'list1':
         i. Set 'current.next' to 'list2'.
         ii. Move 'list2' to the next node in its list.
      c. Move 'current' to the next node in the merged list.
   4. After the loop, check if there are remaining nodes in either 'list1' or 'list2'.
      a. If 'list1' is not null, append the remaining nodes of 'list1' to the merged list.
      b. If 'list2' is not null, append the remaining nodes of 'list2' to the merged list.
   5. Return the head of the merged list, which is the next node after the dummy node.


-----------------------------------------------------------------------------------------------------
4
Function: maxProfit

Input:
   - prices: array of stock prices

Output:
   - maximum profit that can be obtained by buying and selling stocks

Pseudo Code:
   1. Initialize 'mini' variable to the first element of the 'prices' array.
   2. Initialize 'maxProfit' variable to 0.
   3. Loop through the 'prices' array starting from the second element:
      a. Calculate the 'currentProfit' as the difference between the current price and the 'mini'.
      b. Update 'maxProfit' to be the maximum of its current value and the 'currentProfit'.
      c. Update 'mini' to be the minimum of its current value and the current price.
   4. Return the final value of 'maxProfit'.


-----------------------------------------------------------------------------------------------------
5
Function: isPalindrome

Input:
   - s: string to check for palindrome property

Output:
   - Boolean indicating whether the input string is a palindrome

Pseudo Code:
   1. Convert the input string 's' to lowercase.
   2. Remove non-alphanumeric characters from the string using a regular expression: `s = s.replace(/[^a-z0-9]/g, "");`
   3. Check if the modified string is the same when read forward and backward:
      a. Convert the string into an array of characters: `let charArray = s.split("");`
      b. Reverse the array of characters: `let reversedArray = charArray.reverse();`
      c. Join the reversed array of characters back into a string: `let reversedString = reversedArray.join("");`
      d. Compare the original string with the reversed string: `return s === reversedString;`


-----------------------------------------------------------------------------------------------------
6
Function: invertTree

Input:
   - root: the root node of a binary tree

Output:
   - the root node of the inverted binary tree

Pseudo Code:
   1. Base case: If the 'root' is null, return null.
   2. Swap the left and right subtrees of the current 'root':
      a. Create a temporary variable 'temp' and assign it the value of 'root.left'.
      b. Set 'root.left' to 'root.right'.
      c. Set 'root.right' to 'temp'.
   3. Recursively invert the left and right subtrees by calling 'invertTree' on 'root.left' and 'root.right'.
   4. Return the modified 'root'.


-----------------------------------------------------------------------------------------------------
7
Function: isAnagram

Input:
   - s: first string
   - t: second string

Output:
   - Boolean indicating whether the input strings are anagrams

Pseudo Code:
   1. Check if the lengths of strings 's' and 't' are not equal:
      a. If not equal, return false (they cannot be anagrams).
   2. Convert both strings to lowercase for case-insensitive comparison.
   3. Convert each string into an array of characters, sort the arrays, and then join them back into strings:
      a. Create 'sortedS' by splitting 's', sorting the array, and joining it.
      b. Create 'sortedT' by splitting 't', sorting the array, and joining it.
   4. Check if the modified strings 'sortedS' and 'sortedT' are equal:
      a. If equal, return true (they are anagrams).
      b. If not equal, return false (they are not anagrams).


-----------------------------------------------------------------------------------------------------
8
Function: search

Input:
   - nums: a sorted array of integers
   - target: the target value to search for in the array

Output:
   - Index of the target in the array if found, otherwise -1

Pseudo Code:
   1. Initialize 'left' to 0, and 'right' to the index of the last element in 'nums'.
   2. While 'left' is less than or equal to 'right':
      a. Calculate the middle index 'mid' using: `mid = Math.floor((left + right) / 2);`
      b. If 'nums[mid]' is equal to 'target', return 'mid' as the index of the target.
      c. If 'nums[mid]' is less than 'target', update 'left' to 'mid + 1' (search in the right half).
      d. If 'nums[mid]' is greater than 'target', update 'right' to 'mid - 1' (search in the left half).
   3. If the while loop exits, return -1 (target not found in the array).

Time Complexity Analysis:
   - The time complexity of this binary search algorithm is O(log n), where 'n' is the size of the input array 'nums'.
   - In each iteration, the search space is halved by adjusting 'left' or 'right', leading to a logarithmic time complexity.
   - This efficiency makes binary search particularly advantageous for sorted arrays when compared to linear search, which has a time complexity of O(n).
-----------------------------------------------------------------------------------------------------
9