/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroCount++;
    }

    for (let i = 0; i <= zeroCount; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] === 0) {
                nums[j] = nums[j + 1];
                nums[j + 1] = 0;
            }
        }
    }
};
