// Solved

function findGCD(nums: number[]): number {
  let min = Infinity,
    max = 0;

  for (const num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  for (let i = min; i >= 0; i--) {
    if (min % i === 0 && max % i === 0) return i;
  }

  return 0;
}

console.log(findGCD([2, 5, 6, 9, 10]));
