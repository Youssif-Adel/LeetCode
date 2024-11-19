"use strict";
// Solved
function numJewelsInStones(jewels, stones) {
    return [...stones].reduce((previousValue, currentValue) => previousValue + (jewels.includes(currentValue) ? 1 : 0), 0);
}
