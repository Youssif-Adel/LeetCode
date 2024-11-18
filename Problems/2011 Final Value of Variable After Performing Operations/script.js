"use strict";
// Solved
function finalValueAfterOperations(operations) {
    let x = 0;
    operations.forEach((operation) => {
        if (operation.includes("+")) {
            x++;
        }
        else {
            x--;
        }
    });
    return x;
}
