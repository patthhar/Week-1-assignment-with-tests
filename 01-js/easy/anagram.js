/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  return sortString(str1.toLowerCase()) == sortString(str2.toLowerCase());
}

function sortString(str) {
  var charArray = str.split('');
  charArray = charArray.sort()

  return charArray.join('');
}

module.exports = isAnagram;
