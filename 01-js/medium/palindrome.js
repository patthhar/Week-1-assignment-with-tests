/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // First lower case it, then remove white spaces and
  // then replace the punctuation marks from the original string

  var str1 = str.toLowerCase().replace(/\s/g, '').replace(/[^\w\s]|_/g, "");

  var first  = 0;
  var last = str1.length - 1;

  while (first < last) {
    if (str1[first] == str1[last]) {
      first ++;
      last --;
    } else return false
  }

  return true;
}

module.exports = isPalindrome;
