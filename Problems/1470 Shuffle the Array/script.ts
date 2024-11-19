// Solved

function shuffle(nums: number[], n: number): number[] {
  const answer: number[] = [];

  for (let i = 0; i < 2 * n; i++) {
    if (i % 2 === 0) {
      answer.push(nums[i / 2]);
    } else {
      answer.push(nums[(i - 1) / 2 + n]);
    }
  }

  return answer;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
