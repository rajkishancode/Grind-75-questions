4.
Function longestPalindrome(s):
    // Initialize variables
    palindromeLength = 0
    charCount = {}

    // Loop through each character in the string 's'
    for char in s:
        // Update the count of the current character in the charCount object
        charCount[char] = (charCount[char] or 0) + 1

        // If the count of the current character is even, update the palindrome length
        if charCount[char] % 2 equals 0:
            palindromeLength += 2

    // Determine the final palindrome length considering the odd occurrences
    return s.length > palindromeLength ? palindromeLength + 1 : palindromeLength

-----------------------------------------------------------------------------------------------------
7
Function addBinary(a, b):
    // Initialize variables
    result = ""
    carry = 0

    // Continue the loop until both 'a', 'b', and carry become zero
    while a or b or carry:
        // Get the last digit from 'a', 'b', and add with carry
        sum = +a.slice(-1) + +b.slice(-1) + carry

        // Check if the sum is greater than 1
        if sum > 1:
            // Update result with the remainder of sum divided by 2
            result = (sum % 2) + result
            carry = 1
        else:
            // Update result with the sum
            result = sum + result
            carry = 0

        // Trim the last digit from 'a' and 'b'
        a = a.slice(0, -1)
        b = b.slice(0, -1)

    // Return the final result
    return result

-----------------------------------------------------------------------------------------------------
11
Function containsDuplicate(nums)
    Initialize a new Set called uniqueValues

    For each number in nums
        Add the number to uniqueValues

    If the size of uniqueValues is not equal to the length of nums
        Return true (indicating duplicates exist)
    Else
        Return false (indicating no duplicates)

End Function