/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementCountMap = {};
    let answer = -1;

    nums.forEach(el => {
        if(!elementCountMap[el]) {
            elementCountMap[el] = 0;
        }

        elementCountMap[el] += 1;

        if(elementCountMap[el] > (nums.length / 2)){
            answer = el;
        }
    });

    return answer;
};

/* Solution 2 - using Moore's Voting Algorithm */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majority = -1, count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count) {
            count += (nums[i] === majority ? 1 : -1);
        } else {
            majority = nums[i];
            count += 1;
        }
    }

    return majority;
};
