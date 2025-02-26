/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const visibilityMap = new Map();
    const answer = [];

    for (let i = 0; i < nums.length; i++) {
        if (!visibilityMap.get(nums[i])) {
            visibilityMap.set(nums[i], 1);
            answer.push(nums[i]);
        }
    }

    nums.length = answer.length;

    for (let i = 0; i < nums.length; i++) {
        nums[i] = answer[i];
    }
};
