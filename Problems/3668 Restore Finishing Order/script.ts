// Solved

function recoverOrder(order: number[], friends: number[]): number[] {
  const arr: number[] = [];

  let currentId = 0;
  while (arr.length !== friends.length) {
    if (friends.includes(order[currentId])) arr.push(order[currentId]);
    currentId++;
  }

  return arr;
}
