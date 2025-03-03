// Solved

// @ts-ignore
function numberOfPairs(nums: number[]): number[] {
  const freq = new Array(101).fill(0);

  for (const num of nums) {
    freq[num] += 1;
  }

  let numOfPairs = 0;
  let numOfLeftovers = 0;
  for (const freqElement of freq) {
    numOfPairs += Math.floor(freqElement / 2);
    numOfLeftovers += freqElement % 2;
  }

  return [numOfPairs, numOfLeftovers];
}

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
