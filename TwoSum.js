// 1. Two Sum
// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    /* ----------- Optimal Approach --------------- */
    /* Why this is an optimal approach? Because in JS objects are relatively faster than Map. If we are working with simple data type
    then we should prefer object over map or any other data structure */

    const map = {};
    let res;

    // Array.prototype.find is a unique function, we can use it instead of forEach if we want to break from the loop based on some condition

    nums.find ((val, idx) => {
        const diff = target - val;

        if (map[diff] !== undefined) {
            res = [idx, map[diff]];
            return false;
        }

        map[val] = idx;
    });
    
    return res;


    /* ------------ Second Approach ------------- */
    /*const map = new Map();
    let res = undefined;

    nums.find((val, idx) => {
        const diff = target - val;
        if (map.has(diff)) {
            res = [idx, map.get(diff)];
            return false;
        }
        map.set(val, idx);
    });

    return res; */
    


    /* ------------ Third Approach --------------------- */
    /*const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) return [i, map.get(diff)];

        map.set(nums[i], i);
    }*/
};

let arr = [3,2,4];
let target = 6;

console.log(twoSum(arr, target));