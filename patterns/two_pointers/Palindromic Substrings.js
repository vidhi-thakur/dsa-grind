/* 
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/

var countSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += expandFromMiddle(s, i, i + 1) + expandFromMiddle(s, i - 1, i + 1) + 1;
    }
    return count;
};

const expandFromMiddle = (s, i, j) => {
    let left = i;
    let right = j;
    let count = 0;
    while (left > -1 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
        count++;
    }
    return count;
}