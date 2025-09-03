/* 
Given a string s, return the longest palindromic substring in s.

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var longestPalindrome = function (s) {
    let result = ''

    for (let i = 0; i < s.length; i++) {
        const len1 = expand(s, i, i);
        const len2 = expand(s, i, i + 1);

        const max_len = Math.max(len1, len2);
        if (result.length < max_len) {

            // start index
            const start = i - Math.floor((max_len - 1) / 2)

            // end index
            const end = i + Math.floor(max_len / 2)
            result = s.substring(start, end + 1);
        }
    }
    return result;

};

function expand(str, left, right) {
    // loop
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

