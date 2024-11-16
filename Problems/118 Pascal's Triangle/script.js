"use strict";
// Solved
function generate(numRows) {
    const answer = [];
    if (numRows === 0)
        return [];
    answer.push([1]);
    for (let i = 1; i < numRows; i++) {
        const currentRow = [];
        currentRow.push(1);
        for (let j = 0; j < answer.length - 1; j++) {
            currentRow.push(answer[i - 1][j] + answer[i - 1][j + 1]);
        }
        currentRow.push(1);
        answer.push(currentRow);
    }
    return answer;
}
