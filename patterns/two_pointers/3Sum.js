/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

var threeSum = function (nums) {
    nums.sort((a, b) => a - b); // step 1 : sort array
    let temp = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                temp.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // Skip duplicates within the inner loop
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return temp;

};