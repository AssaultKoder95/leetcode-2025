/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            ans.push(nums[i]);
        }
    }

    nums.length = ans.length;

    for (let i = 0; i < ans.length; i++) {
        nums[i] = ans[i];
    }
};
