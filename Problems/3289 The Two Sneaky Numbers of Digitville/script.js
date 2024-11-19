"use strict";
// Solved
function getSneakyNumbers(nums) {
    let numbers = [];
    let answer = [];
    nums.forEach((value) => {
        if (numbers.includes(value)) {
            answer.push(value);
        }
        else {
            numbers.push(value);
        }
    });
    return answer;
}
