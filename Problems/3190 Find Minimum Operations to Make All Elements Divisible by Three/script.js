"use strict";
// Solved
function minimumOperations(nums) {
    return nums.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue % 3 === 0 ? 0 : 1);
    }, 0);
}
console.log(minimumOperations([1, 2, 3, 4]));
