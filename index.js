function isPalindrome(word) {
  // Step 1: Reverse the string
  const reversedWord = word.split('').reverse().join('');

  // Step 2: Compare the original word with the reversed word
  return word === reversedWord;
}

/*
  Pseudocode:
  1. Take the string input.
  2. Reverse the string using split, reverse, and join methods.
  3. Check if the original string is the same as the reversed string.
  4. Return true if they are the same, otherwise return false.
*/

/*
  Explanation:
  We reverse the input string using JavaScript methods. If the reversed string matches the original string,
  the word is a palindrome, and we return true. Otherwise, return false.
*/

// Export the function so it can be accessed by the test file
module.exports = isPalindrome;
