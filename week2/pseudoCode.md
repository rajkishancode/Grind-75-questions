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
