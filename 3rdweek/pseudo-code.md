4.
Function lengthOfLongestSubstring(s):
    // Check if the input string is empty
    if not s:
        return 0

    // Initialize variables
    start = 0
    end = 0
    maxLength = 0
    uniqueCharacters = new Set()

    // Iterate through the string using two pointers (start and end)
    while end < length of s:
        // If the character at 'end' is not in the set
        if not uniqueCharacters.has(s[end]):
            // Add the character to the set, move 'end' pointer, and update maxLength
            uniqueCharacters.add(s[end])
            end++
            maxLength = max(maxLength, size of uniqueCharacters)
        else:
            // If the character is in the set, remove the character at 'start' and move 'start' pointer
            uniqueCharacters.delete(s[start])
            start++

    // Return the maximum length of the substring with unique characters
    return maxLength

----------------------------------------------------------------
3) link - [https://www.youtube.com/watch?v=DhFh8Kw7ymk]
