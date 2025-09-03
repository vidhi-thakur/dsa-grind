/* 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function (nums) {
    const arr = new Array(nums.length).fill(0);
    let right = nums.length - 1;
    let left = 0;

    for (let i = arr.length - 1; i > -1; i--) {
        const right_sq = nums[right] * nums[right];
        const left_sq = nums[left] * nums[left]
        if (left_sq > right_sq) {
            arr[i] = left_sq;
            left++;
        } else {
            arr[i] = right_sq;
            right--;
        }
    }

    return arr;
};