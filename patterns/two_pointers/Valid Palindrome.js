/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

var isPalindrome = function (s) {
    // 48 to 57 => number
    // 97 to 122 => lowercase char

    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!isAccepted(s[left])) {
            left++;
            continue;
        }
        if (!isAccepted(s[right])) {
            right--;
            continue;
        }
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

const isAccepted = (char) => {
    const code = char.charCodeAt(0);
    return (code < 58 && code > 47) || (code > 96 && code < 123);
}